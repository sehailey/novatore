import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {username, imageUrl} = props

  return (
    <div className="col-md-8 my-4">
      <div className="card text-center">
        <div className="card-header">
          <img className="img-fluid" src="img/home.jpg" />
        </div>
        <div className="card-body">
          <h3>Welcome, {username}!</h3>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.user.username,
    imageUrl: state.user.imageUrl,
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
}
