import { swapLoading } from '../actions/loading'

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case swapLoading:
      return { ...state, isLoading: !state.isLoading }
    default:
      return state
  }
}
