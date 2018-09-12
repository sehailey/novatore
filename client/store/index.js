import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './reducers/user'
import posts from './reducers/post'
import tasks from './reducers/task'
import comments from './reducers/comment'
import bloggers from './reducers/blogger'

const reducer = combineReducers({user, posts, tasks, comments, bloggers})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './reducers/post'
export * from './reducers/user'
export * from './reducers/task'
export * from './reducers/comment'
export * from './reducers/blogger'
