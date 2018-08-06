import React from 'react'
import {connect} from 'react-redux'
import Task from './Task'
import {createTask} from '../../store'
const TaskList = props => {
  const {user, tasks, comments, bloggers, handleSubmit} = props
  return (
    <div className="card rounded bg-light">
      <div className="card-header">
        <h5 className="text-center">{user.username}'s tasks</h5>
      </div>
      <div className="card-body">
        <div className="form-check">
          {tasks.map(task => <Task key={task.id} task={task} />)}
          <div className="mt-4">
            <form onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="enter task" />
              <button type="submit">+</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    //tasks: state.tasks,
    user: state.user,
    //comments: state.comments,
    bloggers: state.bloggers,
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      console.log(evt.target.name.value)
      const name = evt.target.name.value
      dispatch(createTask({name}))
    },
  }
}

export default connect(mapState, mapDispatch)(TaskList)
