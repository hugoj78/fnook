import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Sale = () => {
  const history = useHistory()
  const { t, i18n } = useTranslation()

  const goToSale = () => {
    history.push('/sale/form')
  }

  const user = useSelector(state => state.user.userValue)

  const sales = useSelector(state => state.sales.list).filter(
    item => item.user === user
  )

  return (
    <Container>
      <H1>{t('sales.title')}</H1>
      <Button onClick={() => goToSale()}>{t('sales.button')}</Button>
      <H3>{t('sales.title2')}</H3>
      <HR />
      {sales.map(sale => (
        <div key={sale.id}>
          <p>
            {t('sales.name')} : {sale.name}
          </p>
          <p>
            {t('sales.price')} : {sale.price} €
          </p>
          <p>
            {t('sales.quantity')} : {sale.quantity}
          </p>
          <HR />
        </div>
      ))}
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const H1 = styled.h1``

const H3 = styled.h3``

const HR = styled.hr`
  margin: 10px 25px;
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

export default Sale
