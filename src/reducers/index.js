import { combineReducers } from 'redux'
import token from './token'
import user from './user'
import stripe from './stripe'
import nookipedia from './nookipedia'

export default combineReducers({
  token,
  nookipedia,
  stripe
  user
})
