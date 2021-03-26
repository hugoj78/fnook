import { ADD_SALE } from '../actions/sales'
import { store } from '../config/store'

const initialState = {
  list: []
}

const addSale = (state, payload) => {
  return [...state.list, payload]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SALE:
      return { ...state, list: addSale(state, action.payload) }
    default:
      return state
  }
}
