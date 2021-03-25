import React from 'react'
import {
  Container,
  FormContainer,
  DivContainer,
  LabelContainer,
  InputContainer,
  ButtonContainer
} from './FormElements'

const DisplayForm = ({ formState, setFormState, onSubmitLog }) => {
  return (
    <Container>
      <FormContainer onSubmit={e => onSubmitLog(e)}>
        <DivContainer>
          {/* <LabelContainer>Pseudo :</LabelContainer> */}
          <InputContainer
            type='text'
            placeholder='Pseudo'
            onChange={e =>
              setFormState({ ...formState, username: e.target.value })
            }
            required
          />
        </DivContainer>
        <DivContainer>
          {/* <LabelContainer>Mot de Passe:</LabelContainer> */}
          <InputContainer
            type='password'
            placeholder='Mot De Passe'
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

export default DisplayForm
