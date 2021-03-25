import { INCREMENT_USER, SWAP_THEME } from '../actions/user'

const initialState = {
  userValue: '',
  themeValue: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_USER:
      return { ...state, userValue: action.value }
    case SWAP_THEME:
      return { ...state, themeValue: !state.themeValue }
    default:
      return state
  }
}
