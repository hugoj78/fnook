import React from 'react'
import { useHistory } from 'react-router-dom'

const Success = () => {
  const history = useHistory()

  const goBackToHome = () => {
    history.push('/')
  }

  return (
    <>
      <p>Votre payement a été effectué avec succes :P</p>
      <button onClick={() => goBackToHome()}>Retour sur le site</button>
    </>
  )
}

export default Success
