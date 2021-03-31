import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  getVillagers,
  getFishs,
  getBugs,
  getArtworks
} from '../../actions/nookipedia'
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
    dispatch(getBugs())
    dispatch(getArtworks())
  }, [])

  const history = useHistory()
  const villagersList = useSelector(state => state.nookipedia.villagers)
  const fourVillagers = villagersList.slice(0, 4)

  const fishsList = useSelector(state => state.nookipedia.fishs)
  const fourFish = fishsList.slice(0, 4)

  const bugsList = useSelector(state => state.nookipedia.bugs)
  const [fourBugs, setFourBugs] = useState(bugsList.slice(0, 4))

  const artworkList = useSelector(state => state.nookipedia.artworks)
  const [fourArtwork, setFourArtwork] = useState(artworkList.slice(0, 4))

  const redirectToVillagers = () => {
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
