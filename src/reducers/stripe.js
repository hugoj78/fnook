import {
  addItem,
  removeItem,
  incrementItem,
  decrementItem,
  setTotalPrice
} from '../actions/stripe'

const initialState = {
  basketValue: [],
  totalPrice: 0
}

const incrementQuantity = (payload, list) => {
  payload.quantity = payload.quantity + 1
  const indexOfEdit = list.map(listItem => listItem.id).indexOf(payload.id)
  list.splice(indexOfEdit, 1, payload)
  return [...list]
}

const decrementQuantity = (payload, list) => {
  payload.quantity = payload.quantity - 1
  const indexOfEdit = list.map(listItem => listItem.id).indexOf(payload.id)
  list.splice(indexOfEdit, 1, payload)
  return [...list]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case setTotalPrice:
      return { ...state, totalPrice: action.payload }
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
      return {
        ...state,
        basketValue: incrementQuantity(action.payload, state.basketValue)
      }
    case decrementItem:
      return {
        ...state,
        basketValue: decrementQuantity(action.payload, state.basketValue)
      }
    default:
      return state
  }
}
