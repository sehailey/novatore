import React from 'react'
import {connect} from 'react-redux'
import Comment from './Comment'

const CommentsList = props => {
  const {comments, bloggers} = props
  return (
    <ul>
      {comments
        .sort(({id: previousID}, {id: currentID}) => previousID - currentID)
        .map(comment => (
          <Comment
            key={comment.id}
            blogger={bloggers.find(blogger => blogger.id === comment.userId)}
            comment={comments.find(cmt => cmt.id === comment.id)}
            replies={comments.filter(reply => reply.parentId === comment.id)}
          />
        ))}
    </ul>
  )
}

const mapState = state => {
  return {
    //posts: state.posts,
    //user: state.user,
    //comments: state.comments,
    bloggers: state.bloggers,
  }
}
export default connect(mapState)(CommentsList)
