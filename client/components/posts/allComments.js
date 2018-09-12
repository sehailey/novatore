import React from 'react'
import {connect} from 'react-redux'
import CommentsList from './CommentsList'

//----------------------------------------------//

const AllComments = props => {
  const {comments} = props
  return (
    <div className="card my-4">
      <h5 className="card-header">Comments</h5>
      <div className="card-body" />
      {comments.length === 0 ? (
        <p>No comments.</p>
      ) : (
        <ul>
          <CommentsList />
        </ul>
      )}
    </div>
  )
}

//----------------------------------------------//

const mapState = state => {
  return {
    //posts: state.posts,
    //user: state.user,
    //comments: state.comments,
    bloggers: state.bloggers,
  }
}
export default connect(mapState)(AllComments)
