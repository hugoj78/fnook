import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { doPayement } from '../../../../../actions/stripe'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.userValue)

  const handleSubmit = async event => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: userName
      }
    })

    const { id } = paymentMethod

    dispatch(doPayement(12345, id))
  }

  const options = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <p>Price: 10.99€ EUR</p>
      <CardElement options={options} />
      <button type='submit' disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
