import { DISPLAY_VILLAGERS } from '../actions/nookipedia'

const initialState = {
  villagers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_VILLAGERS:
      return {
        ...state,
        villagers: action.payload
      }
    default:
      return state
  }
}
