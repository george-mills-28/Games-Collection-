import connection from './connection.ts'

interface Game {
  id?: number
  title: string
  platform: string
  release_year: number
  genre: string
}

export async function getAllGames(db = connection) {
  return db('games').select() as Promise<Game[]>
}

export async function addGame(game: Game, db = connection) {
  return db('games').insert(game).returning('*') as Promise<Game[]>
}

export async function deleteGame(id: number, db = connection) {
  return db('games').where('id', id).delete()
}

export async function updateGame(id: number, updatedGame: Game, db = connection) {
  return db('games')
    .where('id', id)
    .update(updatedGame)
    .returning('*') as Promise<Game[]>
}