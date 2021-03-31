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

  return (
    <>
      <Link to='/sale/form' activeStyle>
        Vendre
      </Link>

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
    </>
  )
}

export default Sale
