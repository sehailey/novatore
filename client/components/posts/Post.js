import React from 'react'
import CommentsList from './CommentsList'

const Post = props => {
  const {user, post, comments} = props
  if (!user || !post || !comments) return <div>Loading Post...</div>
  return (
    <div>
      {/* <h2>{user.email}</h2> */}
      <div className="row">
        {/* <!-- Post Content Column --> */}
        <div className="col-lg-8">
          {/* <!-- Title --> */}
          <h1 className="mt-4">{post.title}</h1>
          {/* <!-- Author --> */}
          <p className="lead">
            by
            <a href="#"> {user.username}</a>
          </p>
          <hr />
          {/* <!-- Date/Time --> */}
          <p>Posted on January 1, 2018 at 12:00 PM</p>
          <hr />
          {/* <!-- Preview Image --> */}
          <img
            className="img-fluid rounded"
            src="http://placehold.it/900x300"
            alt=""
          />
          <hr />
          {/* <!-- Post Content --> */}
          <p>{post.content}</p>
          <hr />
        </div>
      </div>
      <CommentsList
        user={user}
        comments={comments.filter(comment => comment.postId === post.id)}
      />
      {/* <!-- /.row --> */}
    </div>
  )
}

export default Post
