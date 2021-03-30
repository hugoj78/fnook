import styled from 'styled-components'

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
  margin: 20px;
`

export const Text = styled.p``

export const Image = styled.img`
  width: 250px;
  margin-top: 24px;
`
