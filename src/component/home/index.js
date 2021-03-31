import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getVillagers, getFishs } from '../../actions/nookipedia'
import { setIsLoading, swapIsLoading } from '../../actions/loading'

import {
  Container,
  ContainerVillagers,
  ColumnVillagers,
  ImgVillagers,
  TitleVillager,
  RowVillagers,
  MoreVillager
} from './element'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
    dispatch(getFishs())
  }, [])

  const history = useHistory()
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const [fourVillagers, setFourVillagers] = useState(villagersList.slice(0, 4))

  const fishsList = useSelector(state => state.nookipedia.fishs)
  const [fourFish, setFourFish] = useState(fishsList.slice(0, 4))

  const redirectToVillagers = () => {
    history.push('/villagers')
  }

  const redirectToFishs = () => {
    history.push('/fishs')
  }
  return (
    <Container>
      <ContainerVillagers>
        <TitleVillager> {t('home.villager')} </TitleVillager>
        <RowVillagers>
          {fourVillagers.map(item => (
            <ColumnVillagers key={item?.name}>
              {/* <p>{item.name}</p> */}
              <ImgVillagers src={item?.image_url} />
            </ColumnVillagers>
          ))}
        </RowVillagers>
        <MoreVillager onClick={redirectToVillagers}>
          {t('home.showMore')}
        </MoreVillager>
      </ContainerVillagers>

      <ContainerVillagers>
        <TitleVillager> {t('home.fish')} </TitleVillager>
        <RowVillagers>
          {fourFish.map(item => (
            <ColumnVillagers key={item?.name}>
              {/* <p>{item.name}</p> */}
              <ImgVillagers src={item?.image_url} />
            </ColumnVillagers>
          ))}
        </RowVillagers>
        <MoreVillager onClick={redirectToFishs}>
          {t('home.showMore')}
        </MoreVillager>
      </ContainerVillagers>
    </Container>
  )
}

export default Home
