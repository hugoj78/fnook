import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers } from '../../actions/nookipedia'
import styled from 'styled-components'
import {
  Container,
  ContainerVillagers,
  ColumnVillagers,
  ImgVillagers,
  TitleVillager,
  RowVillagers,
  MoreVillager
} from './element'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
  }, [])

  const history = useHistory()
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const [fourVillagers, setFourVillagers] = useState(villagersList.slice(0, 4))
  const redirectToVillagers = () => {
    history.push('/villagers')
  }

  return (
    <Container>
      <ContainerVillagers>
        <TitleVillager> Villageois </TitleVillager>
        <RowVillagers>
          {fourVillagers.map(item => (
            <ColumnVillagers key={item?.name}>
              {/* <p>{item.name}</p> */}
              <ImgVillagers src={item?.image_url} />
            </ColumnVillagers>
          ))}
        </RowVillagers>
        <MoreVillager onClick={redirectToVillagers}> voir plus </MoreVillager>
      </ContainerVillagers>
    </Container>
  )
}

export default Home
