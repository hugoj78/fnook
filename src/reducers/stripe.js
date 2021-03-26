import {
  addItem,
  removeItem,
  incrementItem,
  decrementItem
} from '../actions/stripe'

const initialState = {
  basketValue: []
}

const editItem = (payload, list) => {
  const indexOfEdit = list.map(listItem => listItem.id).indexOf(payload.id)
  list.splice(indexOfEdit, 1, payload)
  return list
}

export default (state = initialState, action) => {
  switch (action.type) {
    case addItem:
      return {
        ...state,
        basketValue: [
          ...state.basketValue,
          {
            id: action.payload.id,
            name: action.payload.name,
            img: action.payload.img,
            amount: action.payload.amount,
            currency: action.payload.currency,
            quantity: action.payload.quantity
          }
        ]
      }
    case removeItem:
      return {
        ...state,
        basketValue: state.basketValue.filter(
          item => item.id !== action.payload.id
        )
      }
    case incrementItem:
      return { ...state, basketValue: editItem(action.payload, state.list) }
    case decrementItem:
      return { ...state, basketValue: editItem(action.payload, state.list) }
    default:
      return state
  }
}
