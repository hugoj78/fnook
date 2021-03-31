import {
  DISPLAY_VILLAGERS,
  DISPLAY_FISHS,
  DISPLAY_BUGS,
  DISPLAY_ARTWORKS
} from '../actions/nookipedia'

const initialState = {
  villagers: [],
  fishs: [],
  bugs: [],
  artworks: []
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

    case DISPLAY_BUGS:
      return { ...state, bugs: action.payload }

    case DISPLAY_ARTWORKS:
      return { ...state, artworks: action.payload }
    default:
      return state
  }
}
