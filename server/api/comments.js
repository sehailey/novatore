const router = require('express').Router()
const {Comment} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const comments = await Comment.findAll()
    res.json(comments)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id)
    res.json(comment)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/replies', async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id)
    const replies = await comment.getReplies()
    res.json(replies)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body)
    res.json(comment)
  } catch (err) {
    next(err)
  }
})
