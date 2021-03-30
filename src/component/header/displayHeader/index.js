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
            <button onClick={() => i18n.changeLanguage('fr')}>Fr</button>
            <button onClick={() => i18n.changeLanguage('eng')}>En</button>
            <NavLink to='/profil' activeStyle>
              {t('header.profil')}
            </NavLink>
            <NavLink to='/basket' activeStyle>
              Basket
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnOnClick onClick={() => disconnect()}>
              Disconnect
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
