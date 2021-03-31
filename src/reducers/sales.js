import {
  ADD_SALE,
  REMOVE_SALE,
  DECREMENT_QUANTITY_SALE,
  UPDATE_SALE
} from '../actions/sales'
import { store } from '../config/store'

const initialState = {
  list: []
}

const addSale = (state, payload) => {
  return [...state.list, payload]
}

const removeSale = (state, payload) => {
  const newList = state.list.filter(item => item.id !== payload.id)
  return newList
}

const updateSale = (sale, payload) => {
  const saleEdit = sale.list.map(listItem => listItem.id).indexOf(payload.id)
  sale.list.splice(saleEdit, 1, payload)
  return [...sale.list]
}

const decrementSaleQuantity = (state, payload, quantity) => {
  payload.quantity = Number(payload.quantity) - Number(quantity)
  const saleEdit = state.list.map(listItem => listItem.id).indexOf(payload.id)
  state.list.splice(saleEdit, 1, payload)
  return [...state.list]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SALE:
      return { ...state, list: addSale(state, action.payload) }
    case REMOVE_SALE:
      return {
        ...state,
        list: removeSale(state, action.payload)
      }
    case DECREMENT_QUANTITY_SALE:
      return {
        ...state,
        list: decrementSaleQuantity(state, action.payload, action.quantity)
      }
    case UPDATE_SALE:
      return {
        ...state,
        list: updateSale(state, action.payload)
      }
    default:
      return state
  }
}
