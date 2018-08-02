const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  notes: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Task

/**
 * instanceMethods
 */
