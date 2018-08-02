const router = require('express').Router()
const {Post} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const posts = await Post.create(req.body)
    res.json(posts)
  } catch (err) {
    next(err)
  }
})
