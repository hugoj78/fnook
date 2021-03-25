import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
  display: block;
  text-align: center;
`

export const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.buttonColor};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
  margin: 10px;
`

export const Text = styled.p``

export const Image = styled.img`
  width: 250px;
  margin-top: 24px;
`
