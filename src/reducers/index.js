import { combineReducers } from 'redux'
import token from './token'
import user from './user'
<<<<<<< HEAD
import nookipedia from './nookipedia'

export default combineReducers({
  token,
  nookipedia,
  user
=======
import stripe from './stripe'

export default combineReducers({
  token,
  user,
  stripe
>>>>>>> d15b1ca72b3f15ca236c4bbbb9a936b2cdb5a8ca
})
