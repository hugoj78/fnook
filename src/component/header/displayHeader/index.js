import React from 'react'
import {
  Nav,
  Image,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnOnClick
} from './NavbarElements'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const DisplayHeader = ({ disconnect }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  const { t, i18n } = useTranslation()
  return (
    <>
      {tokenState ? (
        <Nav>
          <NavLink to='/'>
            <Image src='logo.svg' alt='logo' />
          </NavLink>
          <NavMenu>
            <NavLink to='/profil' activeStyle>
              {t('header.profil')}
            </NavLink>
            <NavLink to='/basket' activeStyle>
              {t('header.basket')}
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnOnClick onClick={() => disconnect()}>
              {t('header.disconnect')}
            </NavBtnOnClick>
          </NavBtn>
        </Nav>
      ) : (
        <Nav style={{ 'justify-content': 'center' }}>
          <NavLink to='/'>
            <Image src='logo.svg' alt='logo' />
          </NavLink>
        </Nav>
      )}
    </>
  )
}

export default DisplayHeader
