import { GET_TOKEN } from '../actions/token'

const initialState = {
  tokenValue: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, tokenValue: action.payload }
    default:
      return state
  }
}
