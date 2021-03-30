import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPayement } from '../../actions/stripe'
import { useTranslation } from 'react-i18next'

const Purchase = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const user = useSelector(state => state.user.userValue)
  const bill = useSelector(state => state.stripe.bill).filter(
    payment => payment.charges.data[0].billing_details.name === user
  )

  useEffect(() => {
    dispatch(getPayement())
  }, [])

  const toDateTime = secs => {
    var time = new Date(1970, 0, 1)
    time.setSeconds(secs)
    const stringDate = `${time.getFullYear()}/${
      time.getMonth() + 1
    }/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    return stringDate
  }

  return (
    <Container>
      <h1>{t('purchase.title')}</h1>

      {bill.length !== 0 ? (
        <>
          {bill.map(payment => (
            <div key={payment.id}>
              <p>
                {t('purchase.date')} : {toDateTime(payment.created)}
              </p>
              <p>
                {t('purchase.price')} : {payment.amount / 100} €
              </p>
              <p>
                {t('purchase.PaymentMethode')} :{' '}
                {payment.payment_method_types[0]}
              </p>
              <p>
                {t('purchase.Statut')} : {payment.status}
              </p>
              <button
                onClick={() =>
                  window.open(
                    `${payment.charges.data[0].receipt_url}`,
                    '_blank'
                  )
                }
              >
                {t('purchase.button')}
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <p>{t('purchase.noBill')}</p>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

export default Purchase
