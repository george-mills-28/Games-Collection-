export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('games').del()
  await knex('games').insert([
    {
      title: 'The Legend of Zelda: Breath of the Wild',
      platform: 'Nintendo Switch',
      release_year: 2017,
      genre: 'Action-Adventure'
    },
    {
      title: 'Red Dead Redemption 2',
      platform: 'PlayStation 4',
      release_year: 2018,
      genre: 'Action'
    },
    {
      title: 'Elden Ring',
      platform: 'PC',
      release_year: 2022,
      genre: 'Action RPG'
    }
  ])
}