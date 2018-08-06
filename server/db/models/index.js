const User = require('./user')
const Blog = require('./blog')
const Post = require('./post')
const Comment = require('./comment')
const Task = require('./task')

User.hasMany(Post) //puts userId on Post, creates instance method 'user.getPosts()'
Post.belongsTo(User) // creates instance method 'post.getUser()''

Post.hasMany(Comment) //puts postId on Comment
Comment.belongsTo(Post)

User.hasMany(Comment) //puts userId on Comment
Comment.belongsTo(User) //puts userId on Comment

Comment.belongsTo(Comment, {as: 'parent'})
Comment.hasMany(Comment, {as: {singular: 'reply', plural: 'replies'}})
// comment.getComments
// comment.setComment (I'm assuming this sets the parent?)
// comment.addComment (I'm assuming this sets the child?)
// comment.addComments
User.belongsToMany(Blog, {through: 'BlogUser'})
Blog.belongsToMany(User, {through: 'BlogUser'})

Blog.hasMany(Post) //puts blogId on Post
Post.belongsTo(Blog) //puts blogId on Post

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
  Blog,
  Post,
  Comment,
  Task,
}
