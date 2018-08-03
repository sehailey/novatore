import React from 'react'
import Post from './Post'
const PostList = props => {
  const {user, posts, comments} = props
  return (
    <div className="col-lg-12">
      <h1 className="my-4">{user.username}</h1>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            user={user}
            post={post}
            comments={comments.filter(comment => comment.id === post.id)}
          />
        )
      })}
    </div>
  )
}

export default PostList
