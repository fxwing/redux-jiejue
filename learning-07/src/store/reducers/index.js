import { combineReducers } from 'redux'
import { user } from './module/user'
import { comments } from './module/comments'
import { test } from './module/tests'
const rootReducer = combineReducers({
  /* your reducers */
  user,
  comments,
  test,
})
export default rootReducer
