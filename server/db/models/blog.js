const Sequelize = require('sequelize')
const db = require('../db')

const Blog = db.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Blog

/**
 * instanceMethods
 */
