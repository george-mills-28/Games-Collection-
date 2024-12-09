import knex from 'knex'
import config from './knexfile.js'

const db = knex(config.development)

async function reset() {
  try {
    await db.raw('DROP TABLE IF EXISTS knex_migrations')
    await db.raw('DROP TABLE IF EXISTS knex_migrations_lock')
    console.log('Successfully reset migrations')
  } catch (err) {
    console.error('Error resetting migrations:', err)
  } finally {
    db.destroy()
  }
}

reset()