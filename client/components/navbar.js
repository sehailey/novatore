import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({username, handleClick, isLoggedIn}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
    <div className="container">
      <NavLink className="navbar-brand js-scroll-trigger" to="/">
        Novatore
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavLink className="nav-link" to="/posts">
          Posts
        </NavLink>
        {isLoggedIn ? (
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
          </ul>
        ) : (
          <div />
        )}
      </div>
      {isLoggedIn ? (
        <ul className="navbar-nav navbar-right float-right">
          <li className="nav-item nav-link">Hi, {username}!</li>
          <li>
            <NavLink className="nav-link" to={`/${username}/account`}>
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleClick}>
              Logout
            </a>
          </li>
        </ul>
      ) : (
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  </nav>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    username: state.user.username,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
