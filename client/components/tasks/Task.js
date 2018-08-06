import React from 'react'

const Task = props => {
  const task = props.task
  return (
    <div>
      <input
        className="form-check-input"
        type="checkbox"
        value={task.name}
        id={task.id}
      />
      <label className="form-check-label" htmlFor={task.id}>
        {task.name}
      </label>
    </div>
  )
}

export default Task
