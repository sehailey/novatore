import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

const userAccount = {
  username: '',
  firstName: '',
  lastName: '',
  imageUrl: '',
  email: '',
  password: '',
}
class UserAccount extends Component {
  constructor() {
    super()
    this.state = userAccount
  }

  componentDidMount() {
    this.setState(this.props.user)
  }

  render() {
    const {name, displayName, handleSubmit, error} = this.props

    return (
      <div>
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">
              <small>User Name</small>
            </label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <div>
            <label htmlFor="imageUrl">
              <small>Image Url</small>
            </label>
            <input name="imageUrl" type="text" />
          </div>
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <a href="/auth/google">{displayName} with Google</a>
      </div>
    )
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapState = state => {
  return {
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const username = evt.target.username.value
      const firstName = evt.target.firstName.value
      const lastName = evt.target.lastName.value
      const imageUrl = evt.target.imageUrl.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, username, firstName, lastName, imageUrl))
    },
  }
}

export const Login = connect(mapState, mapDispatch)(UserAccount)

/**
 * PROP TYPES
 */
// AuthForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   displayName: PropTypes.string.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   error: PropTypes.object,
// }
