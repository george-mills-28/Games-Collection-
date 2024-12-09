import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'

import gamesRoutes from './routes/games.js'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/games', gamesRoutes)

export default server
