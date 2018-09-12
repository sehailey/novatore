const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'img/purpose900x300.jpg',
  },
})

module.exports = Post

/**
 * instanceMethods
 */
