import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../actions/nookipedia'
import { useHistory } from 'react-router-dom'
import { swapIsLoading } from '../../actions/loading'
import { useTranslation } from 'react-i18next'
import {
  addItemBasket,
  incrementItemBasketWithValue
} from '../../actions/stripe'
import {
  RowVillagers,
  DescriptionVillagers,
  ImgVillagers,
  Container,
  BtnVillager,
  PaginationContainer,
  ParagrapheContainer,
  ArrowLeft,
  ArrowRight,
  PriceItem,
  VendeurItem,
  SaleVillagers,
  QuantityItem,
  FormContainer,
  InputContainer
} from './element'

const Item = props => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  const [id, setId] = useState(props.match.params.id)
  const user = useSelector(state => state.user.userValue)

  const filterItem = useSelector(state => state.sales.list).filter(
    e => e.id === id
  )
  const checkBasket = useSelector(state => state.stripe.basketValue).filter(
    e => e.id === id
  )

  const [quantity, setQuantity] = useState(1)
  const history = useHistory()

  const addBasketWhenExist = () => {
    dispatch(incrementItemBasketWithValue(checkBasket[0], quantity))
    history.push('/basket')
  }

  const addBasket = () => {
    const data = {
      id: filterItem[0]?.id,
      name: filterItem[0]?.name,
      img: filterItem[0]?.image_url,
      amount: filterItem[0]?.price,
      currency: 'eur',
      quantity: quantity,
      user: user
    }

    dispatch(addItemBasket(data))

    history.push('/basket')
  }

  return (
    <Container>
      <RowVillagers>
        <DescriptionVillagers key={filterItem[0]?.name}>
          <ImgVillagers src={filterItem[0]?.image_url} />
          <PriceItem>
            {t('item.price')} : {filterItem[0]?.price} euros
          </PriceItem>
          {checkBasket.length > 0 ? (
            <QuantityItem>
              {t('item.quantity')} :{' '}
              {filterItem[0]?.quantity - checkBasket[0]?.quantity}
            </QuantityItem>
          ) : (
            <QuantityItem>
              {t('item.quantity')} : {filterItem[0]?.quantity}{' '}
            </QuantityItem>
          )}

          <VendeurItem>
            {t('item.seller')} : {filterItem[0]?.user}{' '}
          </VendeurItem>
        </DescriptionVillagers>
        {checkBasket.length > 0 ? (
          <SaleVillagers>
            <FormContainer>
              <InputContainer
                type='number'
                placeholder={t('item.quantity')}
                max={filterItem[0]?.quantity - checkBasket[0]?.quantity}
                min={1}
                required
                onChange={e => setQuantity(e.target.value)}
              />
            </FormContainer>

            <BtnVillager onClick={() => addBasketWhenExist()}>
              {t('item.button')}
            </BtnVillager>
          </SaleVillagers>
        ) : (
          <SaleVillagers>
            <FormContainer>
              <InputContainer
                type='number'
                placeholder={t('item.quantity')}
                max={filterItem[0]?.quantity}
                min={1}
                required
                onChange={e => setQuantity(e.target.value)}
              />
            </FormContainer>

            <BtnVillager onClick={() => addBasket()}>
              {t('item.button')}
            </BtnVillager>
          </SaleVillagers>
        )}
      </RowVillagers>
    </Container>
  )
}

export default Item
