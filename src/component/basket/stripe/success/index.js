import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Success = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const goBackToHome = () => {
    history.push('/')
  }

  return (
    <Container>
      <h2>{t('checkoutSuccess.title')}</h2>
      <Button onClick={() => goBackToHome()}>
        {t('checkoutSuccess.button')}
      </Button>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Button = styled.button`
  border-radius: 4px;
  background: ${props => props.theme.buttonColor};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
  margin: 20px;
`
export default Success
