import React from 'react'
import CommentsList from './CommentsList'

const Post = props => {
  const {blogger, post, comments} = props
  if (!blogger || !post || !comments) return <div>Loading Post...</div>
  return (
    <div>
      <div className="row">
        {/* <!-- Post Content Column --> */}
        <div className="col-lg-12">
          {/* <!-- Title --> */}
          <h1 className="mt-4">{post.title}</h1>
          {/* <!-- Author --> */}
          <p className="lead">
            by
            <a href="#"> {blogger.username}</a>
          </p>
          <hr />
          {/* <!-- Date/Time --> */}
          <p>Posted on January 1, 2018 at 12:00 PM</p>
          <hr />
          {/* <!-- Preview Image --> */}
          {post.imageUrl ? (
            <img
              className="img-fluid rounded"
              src="http://placehold.it/900x300"
              alt=""
            />
          ) : (
            <div />
          )}
          <hr />
          {/* <!-- Post Content --> */}
          <p>{post.content}</p>
          <hr />
        </div>
      </div>
      <CommentsList
        comments={comments.filter(comment => comment.postId === post.id)}
      />
      {/* <!-- /.row --> */}
    </div>
  )
}

export default Post
