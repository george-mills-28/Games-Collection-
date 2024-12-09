import request from 'superagent'

export async function getAllGames() {
  const response = await request.get('/api/v1/games')
  return response.body
}

export async function addGame(game) {
  const response = await request.post('/api/v1/games')
    .send(game)
  return response.body
}

export async function deleteGame(id) {
  return await request.delete(`/api/v1/games/${id}`)
}

export async function updateGame(id, game) {
  const response = await request.patch(`/api/v1/games/${id}`)
    .send(game)
  return response.body
} 