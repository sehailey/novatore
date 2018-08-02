import axios from 'axios'

// ACTION TYPES
const GOT_ALL_POSTS = 'GOT_ALL_POSTS'
const CREATED_POST = 'CREATE_POST'
const initialPosts = []

// ACTION CREATORS
export const gotAllPosts = posts => ({
  type: GOT_ALL_POSTS,
  posts
})

export const createdPost = post => ({
  type: CREATED_POST,
  post
})

// THUNK CREATORS

export const getAllPosts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/posts')
    dispatch(gotAllPosts(data))
  } catch (err) {
    console.error(err)
  }
}

export const createPost = post => async dispatch => {
  try {
    const {data} = await axios.post('/api/posts', post)
    dispatch(createdPost(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const postReducer = (posts = initialPosts, action) => {
  switch (action.type) {
    case GOT_ALL_POSTS: {
      return action.posts
    }
    case CREATED_POST: {
      return [...posts, action.post]
    }

    default: {
      return posts
    }
  }
}

export default postReducer
