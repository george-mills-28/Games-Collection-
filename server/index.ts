import express from 'express'
import server from './server.ts'
import * as Path from 'node:path'

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
