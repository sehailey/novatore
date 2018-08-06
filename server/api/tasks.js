const router = require('express').Router()
const {Task} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const posts = await Task.findAll()
    res.json(posts)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const posts = await Task.create(req.body)
    res.json(posts)
  } catch (err) {
    next(err)
  }
})
