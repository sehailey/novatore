import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PostList from './PostList'
import {getAllPosts, getAllComments, getAllBloggers} from '../../store'

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts()
    this.props.fetchComments()
    this.props.fetchBloggers()
  }
  render() {
    const {user, posts, comments, bloggers} = this.props

    return (
      this.props.posts &&
      this.props.posts.length && (
        <div className="container">
          <PostList
            user={user}
            posts={posts}
            comments={comments}
            bloggers={bloggers}
          />
        </div>
      )
    )
  }
}

const mapState = state => {
  return {
    posts: state.posts,
    user: state.user,
    comments: state.comments,
    bloggers: state.bloggers
  }
}

const mapDispatch = dispatch => {
  return {
    fetchPosts: () => {
      dispatch(getAllPosts())
    },
    fetchComments: () => {
      dispatch(getAllComments())
    },
    fetchBloggers: () => {
      dispatch(getAllBloggers())
    }
  }
}

export default connect(mapState, mapDispatch)(Posts)

Posts.propTypes = {
  posts: PropTypes.array
}
