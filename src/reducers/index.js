import { combineReducers } from 'redux'
import token from './token'
import user from './user'
import nookipedia from './nookipedia'

export default combineReducers({
  token,
  nookipedia,
  user
})
