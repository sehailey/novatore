import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostList from './PostList'
import {getAllPosts} from '../../store'

/**
 * COMPONENT
 */

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const {user, posts} = this.props

    return (
      this.props.posts &&
      this.props.posts.length && (
        <div className="container">
          <PostList user={user} posts={posts} />
        </div>
      )
    )
  }
}

const mapState = state => {
  return {
    posts: state.posts,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(getAllPosts())
    }
  }
}

export default connect(mapState, mapDispatch)(Posts)

Posts.propTypes = {
  posts: PropTypes.array
}
