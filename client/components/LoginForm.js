import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="form-group col-md-8 my-4">
      <div className="card">
        <div className="card-header">
          <img className="img-fluid " src="img/bg-masthead.jpg" />
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} name={name}>
            <div className="row">
              <div className="col">
                <label htmlFor="email">Email</label>
                <input name="email" type="text" className="form-control" />
              </div>

              <div className="col">
                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                />
              </div>
            </div>

            <button className="btn btn-primary mt-2" type="submit">
              {displayName}
            </button>

            {error && error.response && <div> {error.response.data} </div>}
          </form>
          <a href="/auth/google">{displayName} with Google</a>
        </div>
      </div>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const method = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, method))
    },
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
}
