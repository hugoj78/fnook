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
  ArrowRight
} from './element'

const Villagers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
  }, [])

  const [offSet, setoffSet] = useState({ value: 0, number: 1 })
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const [displayVillagers, setDiplayVillagers] = useState(
    villagersList.slice(offSet.value, 24)
  )

  const increase = () => {
    setoffSet({ value: offSet.value + 24, number: offSet.number + 1 })
  }
  const decrease = () => {
    setoffSet({ value: offSet.value - 24, number: offSet.number - 1 })
  }

  useEffect(() => {
    setDiplayVillagers(villagersList.slice(offSet.value, offSet.value + 24))
  }, [offSet])

  return (
    <Container>
      <PaginationContainer>
        {offSet.number > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet.number}</ParagrapheContainer>
        {villagersList.length > offSet.value + 20 ? (
          <ArrowRight onClick={increase} />
        ) : (
          <div> </div>
        )}
      </PaginationContainer>

      <RowVillagers>
        {displayVillagers.map(item => (
          <ColumnVillagers key={item?.name}>
            {/* <p>{item.name}</p> */}
            <ImgVillagers src={item?.image_url} />
            <BtnVillager> Voir plus d'info </BtnVillager>
          </ColumnVillagers>
        ))}
      </RowVillagers>
    </Container>
  )
}

export default Villagers
