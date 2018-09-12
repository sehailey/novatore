const router = require('express').Router()
module.exports = router

router.use('/blogs', require('./blogs'))
router.use('/users', require('./users'))
router.use('/posts', require('./posts'))
router.use('/tasks', require('./tasks'))
router.use('/comments', require('./comments'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
