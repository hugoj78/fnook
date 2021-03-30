import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../actions/user'
import { Container, Button, Text, Image } from './profilElements'
import { NavLink as Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Profil = () => {
  const { t, i18n } = useTranslation()
  const dispath = useDispatch()
  const user = useSelector(state => state.user.userValue)
  return (
    <Container>
      <Image src='profil.png' alt='profil' />
      <Text>
        {t('profil.username')} : {user}
      </Text>
      <Link to='/sale'>
        <Button>{t('profil.sales')}</Button>
      </Link>
      <Link to='/purchase'>
        <Button>{t('profil.purchase')}</Button>
      </Link>
      <Button onClick={() => dispath(changeTheme())}>Theme</Button>
      <Text>{t('profil.lng')} : </Text>
      <Button onClick={() => i18n.changeLanguage('fr')}>Fr</Button>
      <Button onClick={() => i18n.changeLanguage('eng')}>En</Button>
    </Container>
  )
}

export default Profil
