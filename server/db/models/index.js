const User = require('./user')
const Post = require('./post')
const Comment = require('./comment')
const Task = require('./task')

User.hasMany(Post)
Post.belongsTo(User)

Post.hasMany(Comment)
Comment.belongsTo(Post)

Comment.belongsTo(User)
User.hasMany(Comment)

//Task.belongsTo(Task, {as: 'parent'})

/*
Sketching out fantasy ideas:

// Users can share tasks without teams
Task.belongsToMany(User, {through: 'TaskUser'})

// Tasks can belong to teams but they don't have to
User.belongsToMany(Team)


/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Post,
  Comment,
  Task
}
