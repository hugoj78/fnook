import { useSelector } from 'react-redux'
export const ADD_SALE = 'ADD_SALE'
export const DECREMENT_QUANTITY_SALE = 'DECREMENT_QUANTITY_SALE'
export const REMOVE_SALE = 'REMOVE_SALE'

export const addSale = sale => ({
  type: ADD_SALE,
  payload: sale
})

export const decrementSaleQuantity = (sale, quantity) => ({
  type: DECREMENT_QUANTITY_SALE,
  payload: sale,
  quantity: quantity
})

export const removeSale = sale => ({
  type: REMOVE_SALE,
  payload: sale
})

export const checkSale = (sale, quantity) => dispatch => {
  if (sale.quantity - quantity === 0) {
    dispatch(removeSale(sale))
  } else {
    dispatch(decrementSaleQuantity(sale, quantity))
  }
}
