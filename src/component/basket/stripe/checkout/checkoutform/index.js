import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { doPayement } from '../../../../../actions/stripe'
import { useHistory } from 'react-router-dom'

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.userValue)
  const price = useSelector(state => state.stripe.totalPrice)
  const history = useHistory()

  const handleSubmit = async event => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        name: userName
      }
    })

    if (!error) {
      const { id } = paymentMethod

      dispatch(doPayement(price * 100, id))

      history.push('/basket/success')
    }
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
      <p>Price: {price} €</p>
      <CardElement options={options} />
      <button type='submit' disabled={!stripe}>
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
