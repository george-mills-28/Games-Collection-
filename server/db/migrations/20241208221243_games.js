export function up(knex) {
    return knex.schema.createTable('games', (table) => {
      table.increments('id')
      table.string('title')
      table.string('platform')
      table.integer('release_year')
      table.string('genre')
    })
  }
  
  export function down(knex) {
    return knex.schema.dropTable('games')
  }