import axios from 'axios'

// ACTION TYPES
const GOT_ALL_COMMENTS = 'GOT_ALL_COMMENTS'
const CREATED_COMMENT = 'CREATE_POST'
const initialComments = []

// ACTION CREATORS
export const gotAllComments = comments => ({
  type: GOT_ALL_COMMENTS,
  comments
})

export const createdComment = comment => ({
  type: CREATED_COMMENT,
  comment
})

// THUNK CREATORS

export const getAllComments = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/comments')
    dispatch(gotAllComments(data))
  } catch (err) {
    console.error(err)
  }
}

export const createComment = comment => async dispatch => {
  try {
    const {data} = await axios.post('/api/posts', comment)
    dispatch(createdComment(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const commentReducer = (comments = initialComments, action) => {
  switch (action.type) {
    case GOT_ALL_COMMENTS: {
      return action.comments
    }
    case CREATED_COMMENT: {
      return [...comments, action.comment]
    }

    default: {
      return comments
    }
  }
}

export default commentReducer
