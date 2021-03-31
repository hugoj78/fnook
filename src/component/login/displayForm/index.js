import React from 'react'
import {
  Container,
  FormContainer,
  DivContainer,
  InputContainer,
  ButtonContainer
} from './FormElements'

import { useTranslation } from 'react-i18next'

const DisplayForm = ({ formState, setFormState, onSubmitLog }) => {
  const { t, i18n } = useTranslation()
  return (
    <Container>
      <FormContainer onSubmit={e => onSubmitLog(e)}>
        <DivContainer>
          <InputContainer
            type='text'
            placeholder={t('login.username')}
            onChange={e =>
              setFormState({ ...formState, username: e.target.value })
            }
            required
          />
        </DivContainer>
        <DivContainer>
          <InputContainer
            type='password'
            placeholder={t('login.password')}
            onChange={e =>
              setFormState({ ...formState, password: e.target.value })
            }
            required
          />
        </DivContainer>
        <ButtonContainer disabled={!navigator.onLine} type='submit'>
          {t('login.button')}
        </ButtonContainer>
      </FormContainer>
    </Container>
  )
}

export default DisplayForm
