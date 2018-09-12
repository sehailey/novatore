const router = require('express').Router()
const {Blog} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const blogs = await Blog.findAll()
    res.json(blogs)
  } catch (err) {
    next(err)
  }
})
