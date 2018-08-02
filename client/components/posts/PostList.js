import React from 'react'
import Post from './Post'
const PostList = props => {
  const {user, posts} = props
  return (
    <div className="container">
      {posts.map(post => {
        return <Post key={post.id} user={user} post={post} />
      })}
    </div>
  )
}

export default PostList
