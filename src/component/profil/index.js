import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../actions/user'
import { Container, Button, Text, Image } from './profilElements'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'

const Profil = () => {
  const { t, i18n } = useTranslation()
  const dispath = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.user.userValue)
  return (
    <Container>
      <Image src='profil.png' alt='profil' />
      <Text>
        {t('profil.username')} : {user}
      </Text>
      <Button onClick={() => history.push('/sale')}>{t('profil.sales')}</Button>
      <Button onClick={() => history.push('/purchase')}>
        {t('profil.purchase')}
      </Button>
      <Button onClick={() => dispath(changeTheme())}>Theme</Button>
      <Text>{t('profil.lng')} : </Text>
      <Button onClick={() => i18n.changeLanguage('fr')}>Fr</Button>
      <Button onClick={() => i18n.changeLanguage('eng')}>En</Button>

      {user === 'admin' ? (
        <>
          <Text>{t('profil.admin')} : </Text>
          <Button onClick={() => history.push('/admin')}>
            {t('profil.admin')}
          </Button>
        </>
      ) : null}
    </Container>
  )
}

export default Profil
