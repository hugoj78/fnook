import React from 'react'
import styled from 'styled-components'

const DisplayForm = ({ formState, setFormState, onSubmitLog }) => {
  return (
    <Container>
      <FormContainer onSubmit={e => onSubmitLog(e)}>
        <DivContainer>
          <LabelContainer htmlFor='name'>Enter your UserName: </LabelContainer>
          <InputContainer
            type='text'
            placeholder='Username'
            onChange={e =>
              setFormState({ ...formState, username: e.target.value })
            }
            required
          />
        </DivContainer>
        <DivContainer>
          <LabelContainer htmlFor='password'>
            Enter your Password:{' '}
          </LabelContainer>
          <InputContainer
            type='password'
            placeholder='Password'
            onChange={e =>
              setFormState({ ...formState, password: e.target.value })
            }
            required
          />
        </DivContainer>
        <ButtonContainer type='submit'>Log In</ButtonContainer>
      </FormContainer>
    </Container>
  )
}

const Container = styled.div`
  text-align: 'center';
`

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

export default DisplayForm
