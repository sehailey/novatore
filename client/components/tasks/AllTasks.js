import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TaskList from './TaskList'
import CompletedTaskList from './CompletedTaskList'
import {getAllTasks} from '../../store'

/**
 * COMPONENT
 */

class AllTasks extends Component {
  componentDidMount() {
    this.props.fetchTasks()
  }
  render() {
    const {user, tasks} = this.props
    const completeTasks = tasks.filter(task => !!task.complete)
    const incompleteTasks = tasks.filter(task => !task.complete)

    return (
      <div>
        {this.props.user.username &&
          this.props.tasks &&
          this.props.tasks.length && (
            <div className="container">
              <TaskList user={user} tasks={incompleteTasks} />
              <CompletedTaskList user={user} tasks={completeTasks} />
            </div>
          )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    tasks: state.tasks,
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    fetchTasks: () => {
      dispatch(getAllTasks())
    },
  }
}

export default connect(mapState, mapDispatch)(AllTasks)

AllTasks.propTypes = {
  tasks: PropTypes.array,
}
