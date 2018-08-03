import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostList from './PostList'
import {getAllPosts, getAllComments} from '../../store'

/**
 * COMPONENT
 */

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
  }
  render() {
    const {user, posts, comments} = this.props

    return (
      this.props.posts &&
      this.props.posts.length && (
        <div className="container">
          <PostList user={user} posts={posts} comments={comments} />
        </div>
      )
    )
  }
}

const mapState = state => {
  return {
    posts: state.posts,
    user: state.user,
    comments: state.comments
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(getAllPosts())
    },
    fetchComments: () => {
      dispatch(getAllComments())
    }
  }
}

export default connect(mapState, mapDispatch)(Posts)

Posts.propTypes = {
  posts: PropTypes.array
}
