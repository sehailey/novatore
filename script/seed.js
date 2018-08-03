'use strict'

const db = require('../server/db')
const {User, Post, Comment} = require('../server/db/models')

async function seedUsers() {
  const users = await Promise.all([
    User.create({
      email: 'novatore@email.com',
      username: 'Novatore!',
      password: '123'
    }),
    User.create({
      email: 'sarah@email.com',
      username: 'notnull',
      password: '123'
    }),
    User.create({
      email: 'faefolk@email.com',
      username: 'faefolk',
      password: '123'
    }),
    User.create({email: 'rfa@email.com', username: 'rfa_afk', password: '123'})
  ])

  console.log(`seeded ${users.length} users`)
}

const posts = [
  {
    title: 'Iconoclasts, forward!',
    content:
      'All societies tremble when the scornful aristocracy of Vagabonds, Unique ones, Unapproachable ones, rulers over the ideal, and Conquerors of Nothing advance without inhibitions. So, come on, Iconoclasts, forward!'
  },
  {
    title: 'on prison abolition',
    content:
      'Mine is an enthusiastic and dionysian pessimism, like a flame that sets my vital exuberance ablaze, that mocks at any theoretical, scientific or moral prison.'
  },
  {
    title: 'Rebellion!',
    content:
      'We absolutely feel we are beyond all isms and theories. We will suppress the works of all nitwits and all scribblers who, by affiliating with the schools of the avant-garde, try to impose themselves on more original minds. We will absolutely refuse all works of purely technical virtuosity unless they serve to express an aesthetic rebellion.'
  }
]

const seedPosts = async () => {
  for (let i = 0; i < posts.length; i++) {
    const newPost = await Post.create(posts[i])
    await newPost.setUser(1)

    const comments = await Promise.all([
      Comment.create({
        title: 'nice post!',
        content: 'seriously, have you ever considered making your own blog?',
        userId: 3
      }),
      Comment.create({
        title: '+1!',
        content: 'WOW',
        userId: 4
      })
      //   Comment.create({
      //     title: 'I do not really agree...!',
      //     content: 'um...???',
      //     userId: 2,
      //     parentId: 1
      //   }),

      //
    ])
    await newPost.addComments(comments)
  }
  console.log('seeded posts!')
}

const seedComments = async () => {
  //const post = await Post.findById(2)
  const comment1 = await Comment.create({
    title: 'stupid!',
    content: "I can't believe anyone would say this...",
    userId: 1,
    parentId: 1
  })

  const comment2 = await Comment.create({
    title: 'I do not really agree...!',
    content: 'um...???',
    userId: 2,
    parentId: 1
  })

  await comment1.addComment(comment2)
  await comment1.setUser(3)
  await comment2.setUser(2)
  await comment2.setParent(1)
  await comment1.setPost(1)
  await comment2.setPost(1)
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
    await seedComments()
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
