import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../../actions/nookipedia'
import { useHistory } from 'react-router-dom'
import { swapIsLoading } from '../../../actions/loading'

import {
  RowVillagers,
  ColumnVillagers,
  ImgVillagers,
  Container,
  BtnVillager,
  PaginationContainer,
  ParagrapheContainer,
  ArrowLeft,
  ArrowRight
} from './element'

const Villagers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
  }, [])
  const history = useHistory()
  const [offSet, setoffSet] = useState({ value: 0, number: 1 })
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const changeOffset = 15
  const [displayVillagers, setDiplayVillagers] = useState(
    villagersList.slice(offSet.value, changeOffset)
  )

  const increase = () => {
    setoffSet({ value: offSet.value + changeOffset, number: offSet.number + 1 })
  }
  const decrease = () => {
    setoffSet({ value: offSet.value - changeOffset, number: offSet.number - 1 })
  }
  const redirectToSales = id => {
    history.push('/items/' + id)
  }

  useEffect(() => {
    setDiplayVillagers(
      villagersList.slice(offSet.value, offSet.value + changeOffset)
    )
  }, [offSet])

  return (
    <Container>
      <RowVillagers>
        {displayVillagers.map(item => (
          <ColumnVillagers key={item?.name}>
            {/* <p>{item.name}</p> */}
            <ImgVillagers src={item?.image_url} />
            <BtnVillager onClick={() => redirectToSales(item?.id)}>
              {' '}
              {item?.name}{' '}
            </BtnVillager>
          </ColumnVillagers>
        ))}
      </RowVillagers>

      <PaginationContainer>
        {offSet.number > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet.number}</ParagrapheContainer>
        {villagersList.length > offSet.value + changeOffset / 2 ? (
          <ArrowRight onClick={increase} />
        ) : (
          <div> </div>
        )}
      </PaginationContainer>
    </Container>
  )
}

export default Villagers
