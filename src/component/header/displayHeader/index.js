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

const DisplayHeader = ({ disconnect }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  return (
    <>
      {tokenState ? (
        <Nav>
          <NavLink to='/'>
            <Image src='logo.svg' alt='logo' />
          </NavLink>
          <NavMenu>
            <NavLink to='/profil' activeStyle>
              Profil
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
