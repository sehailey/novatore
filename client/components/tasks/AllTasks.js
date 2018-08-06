import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TaskList from './TaskList'
import {getAllTasks} from '../../store'

/**
 * COMPONENT
 */

class AllTasks extends Component {
  componentDidMount() {
    //this.props.fetchPosts()
  }
  render() {
    const {user, tasks} = this.props

    return (
      <div className="col-sm bg-dark">hello!</div>
      /*this.props.tasks &&
      this.props.tasks.length && (
        <div className="container">
          <TaskList user={user} tasks={tasks} />
      </div>
      )*/
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
