import React from 'react'

const Comment = props => {
  const {user, comment} = props

  if (comment.length === 0)
    return (
      <div className="media mb-4">
        <p>No comments.</p>
      </div>
    )
  return (
    <div className="media mb-4">
      <img
        className="d-flex mr-3 rounded-circle"
        src={'img/' + user.imageUrl}
        width="50px"
        alt=""
      />
      <div className="media-body">
        <h5 className="mt-0">{user.name}</h5>
        <h3 className="mt-0">{comment.title}</h3>
        <p>{comment.content}</p>
      </div>
    </div>
  )
}

export default Comment
