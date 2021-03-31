import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useDispatch, useSelector } from 'react-redux'
import { doPayement, removeItemBasket } from '../../../../actions/stripe'
import { useHistory } from 'react-router-dom'
import { checkSale } from '../../../../actions/sales'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Checkout = () => {
  const { t } = useTranslation()
  const stripe = useStripe()
  const elements = useElements()
  const dispatch = useDispatch()
  const userName = useSelector(state => state.user.userValue)
  const price = useSelector(state => state.stripe.totalPrice)
  const history = useHistory()
  const salesList = useSelector(state => state.sales.list)

  const basket = useSelector(state => state.stripe.basketValue).filter(
    item => item.user === userName
  )

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

      for (let index = 0; index < basket.length; index++) {
        const element = basket[index]
        const filterItem = salesList.filter(e => e.id === element.id)
        dispatch(checkSale(filterItem[0], element.quantity))
        dispatch(removeItemBasket(element))
      }
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
    <Container>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: '400px', margin: '0 auto' }}
      >
        <p>
          {t('checkout.price')} : {price} €
        </p>
        {navigator.onLine ? (
          <>
            <CardElement options={options} />
            <Button type='submit' disabled={!stripe}>
              {t('checkout.button')}
            </Button>
          </>
        ) : (
          <>
            <p>{t('checkout.text')}</p>
          </>
        )}
      </form>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.buttonColor};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
  margin: 20px;
`

export default Checkout
