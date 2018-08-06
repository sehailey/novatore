import React from 'react'
import {connect} from 'react-redux'
// /import Task from './Task'
const TaskList = props => {
  const {tasks, comments, bloggers} = props
  console.log(tasks)
  return (
    <div className="col-sm bg-dark">
      <h1 className="my-4">Tasks</h1>

      {/* {tasks.map(post => {
        return (
          <Post
            key={post.id}
            blogger={bloggers.find(blogger => blogger.id === post.userId)}
            post={post}
            comments={comments.filter(
              comment => comment.postId === post.id && comment.parentId === null
            )}
          />
        )
      })} */}
    </div>
  )
}

const mapState = state => {
  return {
    tasks: state.tasks,
    //user: state.user,
    //comments: state.comments,
    bloggers: state.bloggers,
  }
}

export default connect(mapState)(TaskList)
