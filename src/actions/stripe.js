import axios from 'axios'
import { useSelector } from 'react-redux'

import Stripe from 'stripe'
// don't commit your real stripe secret key... use env variables!!
// https://www.leighhalliday.com/secrets-env-vars-nextjs-now
const stripe = new Stripe(
  'sk_test_51IYsN6FpxjXf87kOv5B2UOtUIL7lki6HZNPi5UZXKvNODmovxfHoW260Cr8uGXEtiBSNLaMJjnniA2oEcNjQA83x00IDqoeJQV'
)

export const useEffectUpdate = 'useEffectUpdate'
export const increment = 'increment'
export const decrement = 'decrement'

export const updateBasket = payload => ({
  type: useEffectUpdate,
  payload
})

export const incrementBasket = () => ({
  type: increment
})

export const decrementBasket = payload => ({
  type: decrement,
  payload
})

export const doPayement = (id, amount) => dispatch => {
  axios({
    method: 'post',
    url: 'https://api.stripe.com/v1/payment_intents',
    body: {
      amount,
      currency: 'EUR',
      description: 'test',
      payment_method: id,
      confirm: true
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}
