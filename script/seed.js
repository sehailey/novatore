'use strict'

const db = require('../server/db')
const {User, Post, Comment, Blog, Task} = require('../server/db/models')

async function seedUsers() {
  const users = await Promise.all([
    User.create({
      email: 'novatore@email.com',
      username: 'Novatore!',
      password: '123',
    }),
    User.create({
      email: 'sarah@email.com',
      username: 'notnull',
      password: '123',
    }),
    User.create({
      email: 'faefolk@email.com',
      username: 'faefolk',
      password: '123',
    }),
    User.create({
      email: 'rfa@email.com',
      username: 'rfa_afk',
      password: '123',
    }),
    User.create({
      email: 'aragorn@email.com',
      username: 'aragorn!',
      password: '123',
    }),
  ])

  console.log(`seeded ${users.length} users`)
}

async function seedPosts() {
  const posts = await Promise.all([
    Post.create({
      title: 'Iconoclasts, forward!',
      userId: 1,
      content:
        'All societies tremble when the scornful aristocracy of Vagabonds, Unique ones, Unapproachable ones, rulers over the ideal, and Conquerors of Nothing advance without inhibitions. So, come on, Iconoclasts, forward!',
    }),
    Post.create({
      title: 'on prison abolition',
      userId: 1,
      content:
        'Mine is an enthusiastic and dionysian pessimism, like a flame that sets my vital exuberance ablaze, that mocks at any theoretical, scientific or moral prison.',
    }),
    Post.create({
      title: 'Rebellion!',
      userId: 1,
      content:
        'We absolutely feel we are beyond all isms and theories. We will suppress the works of all nitwits and all scribblers who, by affiliating with the schools of the avant-garde, try to impose themselves on more original minds. We will absolutely refuse all works of purely technical virtuosity unless they serve to express an aesthetic rebellion.',
    }),
  ])

  console.log(`seeded ${posts.length} posts`)
}

async function seedComments() {
  const comments = await Promise.all([
    //comment1
    Comment.create({
      title: 'nice post!',
      content: 'seriously, have you ever considered making your own blog?',
      userId: 2,
      postId: 1,
    }),
    //comment2
    Comment.create({
      title: 'Wow',
      content: 'WOW.',
      userId: 4,
      postId: 1,
    }),
    //comment3
    Comment.create({
      title: 'This is so stupid',
      content: 'This is literally the stupidest thing I have ever heard.',
      userId: 3,
      postId: 1,
    }),
    //comment4
    Comment.create({
      title: 'I do not really agree...!',
      content: 'um...???',
      userId: 2,
      postId: 1,
    }),
    //comment5
    Comment.create({
      title: 'what??',
      content: 'Why do you have to be so mean?',
      userId: 4,
      postId: 1,
    }),
    //comment6
    Comment.create({
      title: 'boring.',
      content: '*curmudgeonly things*',
      userId: 5,
      postId: 1,
    }),
    //comment7
    Comment.create({
      title: 'NIIIIICE',
      content: 'I told you you could do it!',
      userId: 5,
      postId: 2,
    }),
  ])
  console.log(`seeded ${comments.length} comments`)
}

async function seedBlogs() {
  const blog = await Blog.create({title: 'The Creative Nothing'})
  await blog.addUsers([1, 2]) // This works! so does blog.addUser(1)

  const posts = await Post.findAll()
  const comments = await Comment.findAll()

  const p1 = posts[0]

  const c1 = comments[0]
  const c2 = comments[1]
  const c3 = comments[2]
  const c4 = comments[3]
  const c5 = comments[4]
  const c6 = comments[5]

  //await c1.setParent([c3, c4])
  console.log(c3)
  //await c2.setParent(c1)
  //await c3.setParent(c1)
  //await c5.addReplies(c3)
  //c3.setParent(c5)

  await blog.addPosts(posts)
}

async function seedTasks() {
  await Promise.all([Task.create({name: 'create blog'})])
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
    await seedBlogs()
    await seedTasks()
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
