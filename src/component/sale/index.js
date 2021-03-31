import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  RowVillagers,
  ColumnVillagers,
  ImgVillagers,
  Container,
  BtnVillager,
  PaginationContainer,
  ParagrapheContainer,
  ArrowLeft,
  ArrowRight,
  PriceItem,
  VendeurItem,
  QuantityItem
} from './element'
import { useHistory } from 'react-router-dom'
import { removeSale } from '../../actions/sales'
import styled from 'styled-components'

const Sale = () => {
  const { t, i18n } = useTranslation()
  const user = useSelector(state => state.user.userValue)
  const filterSales = useSelector(state => state.sales.list).filter(
    e => e.user === user
  )
  const history = useHistory()
  const dispatch = useDispatch()
  const redirectToUpdate = id => {
    history.push('/sale/form/' + id)
  }
  const removeItem = sales => {
    dispatch(removeSale(sales))
  }
  const goToSale = () => {
    history.push('/sale/form')
  }

  const sales = useSelector(state => state.sales.list).filter(
    item => item.user === user
  )

  return (
    <Container>
      <H1>{t('sales.title')}</H1>
      <Button onClick={() => goToSale()}>{t('sales.button')}</Button>
      <H3>{t('sales.title2')}</H3>
      <HR />
      {filterSales.map(item => (
        <ColumnVillagers key={item?.id}>
          <ImgVillagers src={item?.image_url} />
          <BtnVillager onClick={() => redirectToUpdate(item?.id)}>
            {t('sale.index.update')}
          </BtnVillager>
          <BtnVillager onClick={() => removeItem(item)}>
            {t('sale.index.remove')}
          </BtnVillager>
          <PriceItem>
            {t('sale.index.price')} : {item?.price} euros
          </PriceItem>
          {/* <QuantityItem>Quantité : {item?.quantity} </QuantityItem> */}
          <VendeurItem>
            {t('sale.index.quantity')} : {item?.quantity}
          </VendeurItem>
        </ColumnVillagers>
      ))}
    </Container>
  )
}

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
