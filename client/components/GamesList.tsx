import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllGames, deleteGame, updateGame } from '../apis/games.ts'
import { useState } from 'react'

interface Game {
  id: number
  title: string
  platform: string
  release_year: number
  genre: string
}

export default function GamesList() {
  const queryClient = useQueryClient()
  const [editingGame, setEditingGame] = useState<Game | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPlatform, setFilterPlatform] = useState('all')
  const [sortBy, setSortBy] = useState('title')

  const {
    data: games = [], // Provide default empty array
    error,
    isLoading,
  } = useQuery({ queryKey: ['games'], queryFn: getAllGames })

  const deleteGameMutation = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] })
    },
  })

  const updateGameMutation = useMutation({
    mutationFn: ({ id, game }) => updateGame(id, game),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] })
      setEditingGame(null)
    },
  })

  // Get unique platforms for filter dropdown
  const platforms = [...new Set(games.map(game => game.platform))]
  
  // Filter games based on search and platform
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.genre.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPlatform = filterPlatform === 'all' || game.platform === filterPlatform
    return matchesSearch && matchesPlatform
  })

  // Sort the filtered games
  const sortedGames = [...filteredGames].sort((a, b) => {
    switch (sortBy) {
      case 'year':
        return b.release_year - a.release_year
      case 'title':
        return a.title.localeCompare(b.title)
      case 'platform':
        return a.platform.localeCompare(b.platform)
      default:
        return 0
    }
  })

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this game?')) {
      deleteGameMutation.mutate(id)
    }
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingGame) {
      updateGameMutation.mutate({
        id: editingGame.id,
        game: editingGame,
      })
    }
  }

  if (error) {
    return <p className="error">Error loading games: {error.message}</p>
  }

  if (isLoading) {
    return <p className="loading">Loading games...</p>
  }

  return (
    <div className="games-list">
      <div className="games-list-header">
        <h2>My Games Collection</h2>
        <div className="filters">
          <input
            type="search"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select 
            value={filterPlatform}
            onChange={(e) => setFilterPlatform(e.target.value)}
            className="platform-filter"
          >
            <option value="all">All Platforms</option>
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="title">Sort by Title</option>
            <option value="year">Sort by Year</option>
            <option value="platform">Sort by Platform</option>
          </select>
        </div>
      </div>
      
      <div className="games-grid">
        {sortedGames.map((game) => (
          <div key={game.id} className="game-card">
            {editingGame?.id === game.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={editingGame.title}
                  onChange={(e) =>
                    setEditingGame({ ...editingGame, title: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editingGame.platform}
                  onChange={(e) =>
                    setEditingGame({ ...editingGame, platform: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editingGame.release_year}
                  onChange={(e) =>
                    setEditingGame({
                      ...editingGame,
                      release_year: Number(e.target.value),
                    })
                  }
                />
                <input
                  type="text"
                  value={editingGame.genre}
                  onChange={(e) =>
                    setEditingGame({ ...editingGame, genre: e.target.value })
                  }
                />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setEditingGame(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <h3>{game.title}</h3>
                <p>Platform: {game.platform}</p>
                <p>Release Year: {game.release_year}</p>
                <p>Genre: {game.genre}</p>
                <div className="game-card-buttons">
                  <button onClick={() => setEditingGame(game)}>Edit</button>
                  <button onClick={() => handleDelete(game.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 