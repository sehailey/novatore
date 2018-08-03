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

router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body)
    res.json(comment)
  } catch (err) {
    next(err)
  }
})
