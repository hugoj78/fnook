import React from 'react'
import styled from 'styled-components'

const Toast = ({ title, body, setShow }) => {
  return (
    <Container>
      <DeleteButton onClick={() => setShow(false)}>X</DeleteButton>
      <Header>
        <Image src='logo_hugo.svg' alt='fnook logo' />
        <Title>{title}</Title>
      </Header>
      <Body>
        <Message>{body}</Message>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  font-size: 14px;
  box-sizing: border-box;
  position: fixed;
  top: 12px;
  right: 12px;
  background-color: red;
  border-radius: 10px;
  padding: 10px;
`

const Header = styled.div`
  display: inline-flex;
  width: 100%;
`

const Body = styled.div``

const Image = styled.img`
  width: 40px;
`

const Title = styled.p`
  font-weight: bold;
  text-transform: uppercase;
`

const Message = styled.p``

const DeleteButton = styled.button`
  border-radius: 4px;
  background: transparent;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
  position: relative;
  left: 85%;
`

export default Toast
