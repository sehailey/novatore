import React from 'react'
import Comment from './Comment'

const CommentsList = props => {
  const {user, comments} = props
  return (
    <div>
      <div className="card my-4">
        <h5 className="card-header">Comments</h5>
        <div className="card-body">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              user={user}
              comment={comments.find(cmt => cmt.id === comment.id)}
            />
          ))}
        </div>
      </div>
      <div className="card my-4">
        <h5 className="card-header">Leave a Comment:</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control" rows="3" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CommentsList
