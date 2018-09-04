import React from 'react'
import CommentsList from './CommentsList'

const Post = props => {
  const {blogger, post, comments} = props
  return (
    <div>
      <div className="row">
        <div className="col-lg-11">
          <h1 className="mt-4">{post.title}</h1>
          <p className="lead">
            by <a href="#"> {blogger.username}</a>
          </p>
          <hr />
          <p>Posted on August 3, 2018 at 4:32 PM</p>
          <hr />
          {post.imageUrl ? (
            <img
              className="img-fluid rounded preview-img"
              src={post.imageUrl}
              alt=""
            />
          ) : (
            <div />
          )}
          <hr />
          <p>{post.content}</p>
          <hr />
        </div>
      </div>
      <CommentsList
        comments={comments.filter(comment => comment.postId === post.id)}
      />
    </div>
  )
}

export default Post
