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

  const [offSet, setoffSet] = useState(0)
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const [displayVillagers, setDiplayVillagers] = useState(
    villagersList.slice(offSet, 24)
  )

  const increase = () => {
    setoffSet(offSet + 24)
  }
  const decrease = () => {
    setoffSet(offSet - 24)
  }

  useEffect(() => {
    setDiplayVillagers(villagersList.slice(offSet, offSet + 24))
  }, [offSet])

  return (
    <Container>
      <PaginationContainer>
        {offSet > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet}</ParagrapheContainer>
        {villagersList.length > offSet + 20 ? (
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
