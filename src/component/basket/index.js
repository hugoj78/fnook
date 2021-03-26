import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeItemBasket,
  incrementItemBasket,
  decrementItemBasket,
  setTotalPriceForCheckout,
  addItemBasket
} from '../../actions/stripe'
import { useHistory } from 'react-router-dom'
import DisplayBasket from './displayBasket'

const Basket = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [totalPrice, setTotalPrice] = useState(0)

  const items = useSelector(state => state.stripe.basketValue)

  useEffect(() => {
    let total = 0
    for (let index = 0; index < items.length; index++) {
      const element = items[index]
      total =
        total +
        Number.parseInt(element.amount) * Number.parseInt(element.quantity)
    }
    setTotalPrice(total)
  }, [items])

  const goCheckOut = () => {
    dispatch(setTotalPriceForCheckout(totalPrice))
    history.push('/basket/checkout')
  }

  return (
    <>
      <DisplayBasket
        items={items}
        dispatch={dispatch}
        decrementItemBasket={decrementItemBasket}
        incrementItemBasket={incrementItemBasket}
        removeItemBasket={removeItemBasket}
        goCheckOut={goCheckOut}
        totalPrice={totalPrice}
      />
    </>
  )
}

export default Basket
