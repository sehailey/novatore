import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TasksList from './TasksList'
import {getAllTasks} from '../../store'

/**
 * COMPONENT
 */

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const {user, tasks} = this.props

    return (
      this.props.posts &&
      this.props.posts.length && (
        <div className="container">
          <TasksList user={user} tasks={tasks} />
        </div>
      )
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

export default connect(mapState, mapDispatch)(Tasks)

Tasks.propTypes = {
  tasks: PropTypes.array,
}
