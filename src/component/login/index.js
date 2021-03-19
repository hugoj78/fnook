import React, { useEffect } from 'react'
import LoginForm from './loginForm'
import Logo from './logo'
import styled from 'styled-components'
import axios from 'axios'

const logUser = (e, formState, setErrorMessage, history, setIsToken) => {
  e.preventDefault()

  if(formState.password.length < 5) {
    setErrorMessage('the field must be more than 5 characters')
    return
  }

  axios({
    method: 'post',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  }).then(res => {
    localStorage.setItem('token', res.headers['x-access-token'])
    setIsToken(res.headers['x-access-token'])
    history.push('/characters')
  }).catch(err => {
    console.log(err)
  })
}

const Login = ({history, setIsToken}) => {

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/')
    }
  })

  return (
    <DivContainer>
      <h1>LogIn Page</h1>
      <Logo />
      <LoginForm logUser={logUser} setIsToken={setIsToken}/>
    </DivContainer>
  )
}


const DivContainer = styled.div`
  text-align: ${props => props.theme.FormTextAlign};
`

export default Login
