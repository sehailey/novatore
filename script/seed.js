'use strict'

const db = require('../server/db')
const {User, Post} = require('../server/db/models')

async function seedUsers() {
  const users = await Promise.all([
    User.create({email: 'sarah@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
}

const comment = {
  title: 'nice post!',
  content: 'seriously, have you ever considered making your own blog?'
}
const seedPosts = async () => {
  const post1 = await Post.create({
    title: 'my first post',
    content: 'This is a great post!'
  })
  await post1.setUser(1)
  await post1.addComment(comment)

  console.log('seeded posts!')
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  await db.sync({force: true})
  console.log('db synced!')
  console.log('seeding...')
  try {
    await seedUsers()
    await seedPosts()
    console.log(`seeded successfully`)
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = runSeed
