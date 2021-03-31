import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getVillagers,
  getFishs,
  getBugs,
  getArtworks
} from '../../actions/nookipedia'
import { swapIsLoading } from '../../actions/loading'

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
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVillagers())
    dispatch(getFishs())
    dispatch(getBugs())
    dispatch(getArtworks())
  }, [])

  const history = useHistory()
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const [fourVillagers, setFourVillagers] = useState(villagersList.slice(0, 4))

  const fishsList = useSelector(state => state.nookipedia.fishs)
  const [fourFish, setFourFish] = useState(fishsList.slice(0, 4))

  const bugsList = useSelector(state => state.nookipedia.bugs)
  const [fourBugs, setFourBugs] = useState(bugsList.slice(0, 4))

  const artworkList = useSelector(state => state.nookipedia.artworks)
  const [fourArtwork, setFourArtwork] = useState(artworkList.slice(0, 4))

  const redirectToVillagers = () => {
    // dispatch(swapIsLoading())
    history.push('/villagers')
  }

  const redirectToFishs = () => {
    history.push('/fishs')
  }

  const redirectToBugs = () => {
    history.push('/bugs')
  }

  const redirectToArtworks = () => {
    history.push('/artworks')
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

      <ContainerVillagers>
        <TitleVillager> {t('home.bug')} </TitleVillager>
        <RowVillagers>
          {fourBugs.map(item => (
            <ColumnVillagers key={item?.name}>
              {/* <p>{item.name}</p> */}
              <ImgVillagers src={item?.image_url} />
            </ColumnVillagers>
          ))}
        </RowVillagers>
        <MoreVillager onClick={redirectToBugs}>
          {t('home.showMore')}
        </MoreVillager>
      </ContainerVillagers>

      <ContainerVillagers>
        <TitleVillager> {t('home.art')} </TitleVillager>
        <RowVillagers>
          {fourArtwork.map(item => (
            <ColumnVillagers key={item?.name}>
              {/* <p>{item.name}</p> */}
              <ImgVillagers src={item?.image_url} />
            </ColumnVillagers>
          ))}
        </RowVillagers>
        <MoreVillager onClick={redirectToArtworks}>
          {t('home.showMore')}
        </MoreVillager>
      </ContainerVillagers>
    </Container>
  )
}

export default Home
