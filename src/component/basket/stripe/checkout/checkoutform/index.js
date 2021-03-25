import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDispatch } from 'react-redux'
import { doPayement } from '../../../../../actions/stripe'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()

  const handleSubmit = async event => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    dispatch(doPayement(12345, paymentMethod.id))
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <p>Price: 10.99€ EUR</p>
      <CardElement />
      <button type='submit' disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
