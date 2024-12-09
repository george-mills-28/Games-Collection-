import express from 'express'
import * as db from '../db/games.ts'

const router = express.Router()

interface Game {
  id?: number
  title: string
  platform: string
  release_year: number
  genre: string
}

// GET /api/v1/games
router.get('/', async (req, res) => {
  try {
    const games = await db.getAllGames()
    res.json(games)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not get games' })
  }
})

// POST /api/v1/games
router.post('/', async (req, res) => {
  try {
    const newGame = await db.addGame(req.body as Game)
    res.status(201).json(newGame)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not add game' })
  }
})

// DELETE /api/v1/games/:id
router.delete('/:id', async (req, res) => {
  try {
    await db.deleteGame(Number(req.params.id))
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not delete game' })
  }
})

// PATCH /api/v1/games/:id
router.patch('/:id', async (req, res) => {
  try {
    const updatedGame = await db.updateGame(Number(req.params.id), req.body as Game)
    res.json(updatedGame)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Could not update game' })
  }
})

export default router 