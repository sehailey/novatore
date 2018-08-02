import axios from 'axios'

/* ACTION TYPES */

//Post list
export const FETCH_POSTS = 'FETCH_POSTS'
// export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
// export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'
// export const RESET_POSTS = 'RESET_POSTS'

// //Create new post
// export const CREATE_POST = 'CREATE_POST'
// export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
// export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE'
// export const RESET_NEW_POST = 'RESET_NEW_POST'
//
// //Validate post fields like Title, Categries on the server
// export const VALIDATE_POST_FIELDS = 'VALIDATE_POST_FIELDS'
// export const VALIDATE_POST_FIELDS_SUCCESS = 'VALIDATE_POST_FIELDS_SUCCESS'
// export const VALIDATE_POST_FIELDS_FAILURE = 'VALIDATE_POST_FIELDS_FAILURE'
// export const RESET_POST_FIELDS = 'RESET_POST_FIELDS'
//
// //Fetch post
// export const FETCH_POST = 'FETCH_POST'
// export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
// export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
// export const RESET_ACTIVE_POST = 'RESET_ACTIVE_POST'
//
// //Delete post
// export const DELETE_POST = 'DELETE_POST'
// export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
// export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'
// export const RESET_DELETED_POST = 'RESET_DELETED_POST'

/* ACTION CREATORS */

export const fetchPostsSuccess = posts => {
  return {type: FETCH_POSTS, posts}
}

export const fetchPostsFailure = error => {
  return {type: FETCH_POSTS, error}
}

/* THUNK CREATORS */

export const fetchPosts = async dispatch => {
  try {
    const {data} = await axios.get('/posts')
    dispatch(fetchPostsSuccess(data))
  } catch (err) {
    dispatch(fetchPostsFailure(err))
    console.log(err)
  }
}
