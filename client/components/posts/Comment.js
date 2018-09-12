import React from 'react'
import CommentsList from './CommentsList'
const Comment = props => {
  const {blogger, comment, replies} = props
  return (
    <li className="media mb-4">
      <img
        className="d-flex mr-3 rounded-circle"
        src={'img/' + blogger.imageUrl}
        width="50px"
        alt=""
      />
      {/* <div className="caption">
            <p>{blogger.username}</p>
          </div> */}
      <div className="media-body">
        <h5 className="mt-0">{comment.title}</h5>
        <p>{comment.content}</p>
        <p>by {blogger.username}</p>
        <p>reply</p>
      </div>
      {/* <CommentsList comments={replies} /> */}
    </li>
  )
}

export default Comment
