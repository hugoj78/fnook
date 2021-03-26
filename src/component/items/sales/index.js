import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../../actions/nookipedia'
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
  const [id, setId] = useState(props.match.params.id)
  const dispatch = useDispatch()
  const salesItems = useSelector(state => state.sales.list)
  const filterItems = salesItems.filter(e => e.idMother === id)
  console.log(salesItems)

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
      <PaginationContainer>
        {offSet.number > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet.number}</ParagrapheContainer>
        {filterItems.length > offSet.value + 20 ? (
          <ArrowRight onClick={increase} />
        ) : (
          <div> </div>
        )}
      </PaginationContainer>

      <RowVillagers>
        {filterItems.map(item => (
          <ColumnVillagers key={item?.name}>
            <ImgVillagers src={item?.image_url} />
            <BtnVillager onClick={() => redirectToSales(item?.id)}>
              Voir la vente
            </BtnVillager>
            <PriceItem>Prix : {item?.price} euros</PriceItem>
            <QuantityItem>Quantité : {item?.quantity} </QuantityItem>
            <VendeurItem> Vendeur : {item?.user} </VendeurItem>
          </ColumnVillagers>
        ))}
      </RowVillagers>
    </Container>
  )
}

export default ItemSales
