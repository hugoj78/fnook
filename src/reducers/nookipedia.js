import { DISPLAY_VILLAGERS, DISPLAY_FISHS } from '../actions/nookipedia'

const initialState = {
  villagers: [],
  fishs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_VILLAGERS:
      return {
        ...state,
        villagers: action.payload
      }

    case DISPLAY_FISHS:
      return { ...state, fishs: action.payload }
    default:
      return state
  }
}
