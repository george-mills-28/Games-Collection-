import { type ReactElement } from 'react'

interface Game {
  id: number
  title: string
  platform: string
  release_year: number
  genre: string
}

interface CollectionStatsProps {
  games: Game[]
}

export function CollectionStats({ games }: CollectionStatsProps): ReactElement {
  const totalGames = games.length
  const uniquePlatforms = new Set(games.map(game => game.platform)).size
  const uniqueGenres = new Set(games.map(game => game.genre)).size
  const averageYear = games.length
    ? Math.round(games.reduce((sum, game) => sum + game.release_year, 0) / totalGames)
    : 0

  return (
    <div className="collection-stats">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">{totalGames}</div>
          <div className="stat-label">Total Games</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{uniquePlatforms}</div>
          <div className="stat-label">Platforms</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{uniqueGenres}</div>
          <div className="stat-label">Genres</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{averageYear}</div>
          <div className="stat-label">Average Release Year</div>
        </div>
      </div>
    </div>
  )
} 