import { swapLoading, setLoading } from '../actions/loading'

const initialState = {
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case swapLoading:
      return { ...state, isLoading: !state.isLoading }
    case setLoading:
      return { ...state, isLoading: state.payload }
    default:
      return state
  }
}
