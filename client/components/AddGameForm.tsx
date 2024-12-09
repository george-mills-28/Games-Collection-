import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { addGame } from '../apis/games.ts'

interface Game {
  title: string
  platform: string
  release_year: number
  genre: string
}

export default function AddGameForm() {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState<Game>({
    title: '',
    platform: '',
    release_year: 2024,
    genre: '',
  })

  const addGameMutation = useMutation({
    mutationFn: addGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] })
      setFormData({
        title: '',
        platform: '',
        release_year: 2024,
        genre: '',
      })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addGameMutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Game</h3>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label htmlFor="platform">Platform:</label>
        <input
          id="platform"
          type="text"
          value={formData.platform}
          onChange={(e) =>
            setFormData({ ...formData, platform: e.target.value })
          }
          required
        />
      </div>
      <div>
        <label htmlFor="release_year">Release Year:</label>
        <input
          id="release_year"
          type="number"
          value={formData.release_year}
          onChange={(e) =>
            setFormData({ ...formData, release_year: Number(e.target.value) })
          }
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          value={formData.genre}
          onChange={(e) =>
            setFormData({ ...formData, genre: e.target.value })
          }
          required
        />
      </div>
      <button type="submit">Add Game</button>
    </form>
  )
} 