import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getPayement } from '../../actions/stripe'

const Admin = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPayement())
  }, [])

  const sales = useSelector(state => state.sales.list)

  const bills = useSelector(state => state.stripe.bill)

  return (
    <Container>
      <BigTitle>{t('admin.title')}</BigTitle>
      <LittleTitle>{t('admin.saleTitle')}</LittleTitle>
      <Hr />
      {sales.map(sale => (
        <div key={sale.id}>
          <p>
            {t('admin.name')} : {sale.name}
          </p>
          <p>
            {t('admin.quantity')} : {sale.quantity}
          </p>
          <p>
            {t('admin.price')} : {sale.price} €
          </p>
          <Hr />
        </div>
      ))}

      <LittleTitle>{t('admin.purchaseTitle')} :</LittleTitle>
      <Hr />
      {bills.map(bill => (
        <div key={bill.id}>
          <p>
            {t('admin.name')} : {bill.charges.data[0].billing_details.name}
          </p>
          <p>
            {t('admin.price')} : {bill.amount} €
          </p>
          <p>
            {t('admin.status')} : {bill.status}
          </p>
          <button
            onClick={() =>
              window.open(`${bill.charges.data[0].receipt_url}`, '_blank')
            }
          >
            {t('admin.receipt')}
          </button>
          <Hr />
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const BigTitle = styled.h1``

const LittleTitle = styled.h3``

const Hr = styled.hr`
  margin: 5px 20px;
`

export default Admin
