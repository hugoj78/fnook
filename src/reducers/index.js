import { combineReducers } from 'redux'
import token from './token'
import user from './user'
import stripe from './stripe'
import nookipedia from './nookipedia'
import sales from './sales'

export default combineReducers({
  token,
  nookipedia,
  stripe,
  sales,
  user
})
