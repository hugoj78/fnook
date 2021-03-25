import { combineReducers } from 'redux'
import token from './token'
import user from './user'
import stripe from './stripe'

export default combineReducers({
  token,
  user,
  stripe
})
