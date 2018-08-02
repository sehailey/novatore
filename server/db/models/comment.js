const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  title: {
    type: Sequelize.STRING
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Comment

/**
 * instanceMethods
 */
