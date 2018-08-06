import React from 'react'
import {connect} from 'react-redux'
import Task from './Task'
const TaskList = props => {
  const {user, tasks, comments, bloggers} = props
  return (
    <div className="container rounded bg-light">
      <h5 className="my-4 text-center">{user.username}'s tasks</h5>
      <div className="form-check">
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </div>

      <hr />
    </div>
  )
}

const mapState = state => {
  return {
    tasks: state.tasks,
    user: state.user,
    //comments: state.comments,
    bloggers: state.bloggers,
  }
}

export default connect(mapState)(TaskList)
