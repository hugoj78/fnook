import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${props => props.theme.header};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`
export const Image = styled.img`
  width: 80px;
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.headerButtonEffectTextColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${props => props.theme.headerButton};
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`

export const NavBtnOnClick = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.headerButton};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${props => props.theme.headerButtonEffect};
    color: ${props => props.theme.headerButtonEffectColor};
  }
`
