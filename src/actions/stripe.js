import axios from 'axios'

export const addItem = 'addItem'
export const removeItem = 'removeItem'

export const incrementItem = 'incrementItem'
export const decrementItem = 'decrementItem'

export const setTotalPrice = 'setTotalPrice'

export const setBill = 'setBill'

export const incrementItemWithValue = 'incrementItemWithValue'

export const setBillPayement = payload => ({
  type: setBill,
  payload
})

export const setTotalPriceForCheckout = payload => ({
  type: setTotalPrice,
  payload
})

export const addItemBasket = payload => ({
  type: addItem,
  payload
})

export const removeItemBasket = payload => ({
  type: removeItem,
  payload
})

export const incrementItemBasket = payload => ({
  type: incrementItem,
  payload
})

export const incrementItemBasketWithValue = (payload, value) => ({
  type: incrementItemWithValue,
  payload,
  value
})

export const decrementItemBasket = payload => ({
  type: decrementItem,
  payload
})

export const doPayement = (amount, paymentMethod) => dispatch => {
  const secretApiKey = process.env.REACT_APP_STRIPE_SECRET_KEY
  axios({
    method: 'post',
    url: 'https://api.stripe.com/v1/payment_intents',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${secretApiKey}`
    },
    params: {
      amount,
      currency: 'eur',
      payment_method_types: ['card'],
      payment_method: paymentMethod,
      confirm: true
    }
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getPayement = () => dispatch => {
  const secretApiKey = process.env.REACT_APP_STRIPE_SECRET_KEY
  axios({
    method: 'get',
    url: 'https://api.stripe.com/v1/payment_intents',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${secretApiKey}`
    }
  })
    .then(res => dispatch(setBillPayement(res.data.data)))
    .catch(err => console.log(err))
}
