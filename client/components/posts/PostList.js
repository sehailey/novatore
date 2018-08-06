import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
const PostList = props => {
  const {posts, comments, bloggers} = props
  return (
    <div className="col-md-8">
      <div className="hero-image" />
      <h1 className="my-4">The Creative Nothing</h1>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            blogger={bloggers.find(blogger => blogger.id === post.userId)}
            post={post}
            comments={comments.filter(
              comment => comment.postId === post.id && comment.parentId === null
            )}
          />
        )
      })}
    </div>
  )
}

const mapState = state => {
  return {
    posts: state.posts,
    //user: state.user,
    comments: state.comments,
    bloggers: state.bloggers,
  }
}

export default connect(mapState)(PostList)
