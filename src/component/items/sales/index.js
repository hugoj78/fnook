import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../../actions/nookipedia'
import { useHistory } from 'react-router-dom'
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

const ItemSales = props => {
  const { t, i18n } = useTranslation()
  const [id, setId] = useState(props.match.params.id)
  const dispatch = useDispatch()
  const salesItems = useSelector(state => state.sales.list)
  const filterItems = salesItems.filter(e => e.idMother === id)
  const history = useHistory()

  const [offSet, setoffSet] = useState({ value: 0, number: 1 })
  const [displayItems, setDiplayItems] = useState(
    filterItems.slice(offSet.value, 24)
  )

  const increase = () => {
    setoffSet({ value: offSet.value + 24, number: offSet.number + 1 })
  }
  const decrease = () => {
    setoffSet({ value: offSet.value - 24, number: offSet.number - 1 })
  }
  const redirectToSales = id => {
    history.push('/item/' + id)
  }

  useEffect(() => {
    setDiplayItems(filterItems.slice(offSet.value, offSet.value + 24))
  }, [offSet])

  return (
    <Container>
      <RowVillagers>
        {filterItems.map(item => (
          <ColumnVillagers key={item?.id}>
            <ImgVillagers src={item?.image_url} />
            <BtnVillager onClick={() => redirectToSales(item?.id)}>
              {t('items.sales.button')}
            </BtnVillager>
            <PriceItem>
              {t('items.sales.price')} : {item?.price} euros
            </PriceItem>
            {/* <QuantityItem>Quantité : {item?.quantity} </QuantityItem> */}
            <VendeurItem>
              {t('items.sales.seller')} : {item?.user}{' '}
            </VendeurItem>
          </ColumnVillagers>
        ))}
      </RowVillagers>
      <PaginationContainer>
        {offSet.number > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet.number}</ParagrapheContainer>
        {filterItems.length > offSet.value + 20 ? (
          <ArrowRight onClick={increase} />
        ) : (
          <div> </div>
        )}
      </PaginationContainer>
    </Container>
  )
}

export default ItemSales
