import axios from 'axios'

/* ACTION TYPES */
const GOT_ALL_BLOGGERS = 'GOT_BLOGGERS'

/* INITIAL STATE */
const initialBloggers = []

/* ACTION CREATORS */
const gotAllBloggers = bloggers => ({type: GOT_ALL_BLOGGERS, bloggers})

/* THUNK CREATORS */
export const getAllBloggers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotAllBloggers(data))
  } catch (err) {
    console.error(err)
  }
}

/* REDUCER */
export default function(state = initialBloggers, action) {
  switch (action.type) {
    case GOT_ALL_BLOGGERS:
      return action.bloggers

    default:
      return state
  }
}
