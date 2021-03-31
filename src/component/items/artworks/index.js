import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArtworks } from '../../../actions/nookipedia'
import { useHistory } from 'react-router-dom'

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

const Artworks = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArtworks())
  }, [])
  const history = useHistory()
  const [offSet, setoffSet] = useState({ value: 0, number: 1 })
  const artworksList = useSelector(state => state.nookipedia.artworks)
  const changeOffset = 15
  const [displayArtworks, setDisplayArtworks] = useState(
    artworksList.slice(offSet.value, changeOffset)
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
    setDisplayArtworks(
      artworksList.slice(offSet.value, offSet.value + changeOffset)
    )
  }, [offSet])

  return (
    <Container>
      <RowVillagers>
        {displayArtworks.map(item => (
          <ColumnVillagers key={item?.id}>
            {/* <p>{item.name}</p> */}
            <ImgVillagers src={item?.image_url} />
            <BtnVillager onClick={() => redirectToSales(item?.name)}>
              {' '}
              {item?.name}{' '}
            </BtnVillager>
          </ColumnVillagers>
        ))}
      </RowVillagers>

      <PaginationContainer>
        {offSet.number > 1 ? <ArrowLeft onClick={decrease} /> : <div> </div>}
        <ParagrapheContainer>{offSet.number}</ParagrapheContainer>
        {displayArtworks.length > offSet.value + changeOffset / 2 ? (
          <ArrowRight onClick={increase} />
        ) : (
          <div> </div>
        )}
      </PaginationContainer>
    </Container>
  )
}

export default Artworks
