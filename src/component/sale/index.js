import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import {
  H3,
  ColumnVillagers,
  ImgVillagers,
  Container,
  BtnVillager,
  Button,
  PriceItem,
  VendeurItem,
  H1
} from './element'
import { useHistory } from 'react-router-dom'
import { removeSale } from '../../actions/sales'

const Sale = () => {
  const { t } = useTranslation()
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

  return (
    <Container>
      <H1>{t('sales.title')}</H1>
      <Button onClick={() => goToSale()}>{t('sales.button')}</Button>
      <H3>{t('sales.title2')}</H3>
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
          <VendeurItem>
            {t('sale.index.quantity')} : {item?.quantity}
          </VendeurItem>
        </ColumnVillagers>
      ))}
    </Container>
  )
}

export default Sale
