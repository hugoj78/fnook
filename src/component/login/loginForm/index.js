import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'


const LoginForm = ({logUser, setIsToken}) => {

  console.log(setIsToken)
  const [formState, setFormState] = useState({username: '', password : ''})
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  return (
    <div>
      <FormContainer onSubmit={(e) => logUser(e, formState, setErrorMessage, history, setIsToken)}>
        <DivContainer>
          <LabelContainer htmlFor="name">Enter your UserName: </LabelContainer>
          <InputContainer
              type='text'
              placeholder='Username'
              onChange={e => setFormState({...formState, username: e.target.value})}
              required
            />
        </DivContainer>
        <DivContainer>
          <LabelContainer htmlFor="password">Enter your Password: </LabelContainer>
          <InputContainer
              type='password'
              placeholder='Password'
              onChange={e => setFormState({...formState, password: e.target.value})}
              required
            />
        </DivContainer>
        <SpanContainer>{errorMessage}</SpanContainer>
        <ButtonContainer type='submit'>Log In</ButtonContainer>
      </FormContainer>
    </div>
  )
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InputContainer = styled.input`
  margin: ${props => props.theme.InputMargin};
`

const LabelContainer = styled.label``

const ButtonContainer = styled.button``

const DivContainer = styled.div``

const SpanContainer = styled.span``

export default LoginForm
