'use strict'

const db = require('../db')
const Sequelize = require('sequelize')

const Task = db.define('Task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  due: Sequelize.DATE
})

Task.clearCompleted = () => {
  return Task.destroy({where: {complete: true}})
}

Task.completeAll = () => {
  return Task.update({complete: true}, {where: {complete: false}})
}

Task.prototype.getTimeRemaining = function() {
  if (!this.due) {
    return Infinity
  } else {
    return this.due - Date.now()
  }
}

Task.prototype.isOverdue = function() {
  return this.getTimeRemaining() < 0 && !this.complete
}

Task.prototype.addChild = async function(task) {
  const child = await Task.create(task)
  return child.setParent(this.id)
}

Task.prototype.getChildren = async function() {
  const children = await Task.findAll({where: {parentId: this.id}})
  return children
}

//return tasks where the parentId is the same but NOT this task
Task.prototype.getSiblings = async function() {
  const siblings = await Task.findAll({
    where: {parentId: this.parentId, id: {$ne: this.id}}
  })
  return siblings
}

module.exports = Task
