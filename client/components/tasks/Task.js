import React from 'react'
import {connect} from 'react-redux'
import {toggleTask} from '../../store'

const Task = props => {
  const {task, toggleTask} = props
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        value={task.name}
        id={task.id}
        onChange={() => toggleTask(task.id)}
      />
      <label className="form-check-label" htmlFor={task.id}>
        {task.name}
      </label>
    </div>
  )
}

const mapDispatch = dispatch => ({
  toggleTask: id => {
    console.log(id)
    dispatch(toggleTask(id))
  },
})

export default connect(null, mapDispatch)(Task)
