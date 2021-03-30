import React, { useState } from 'react'
import DisplayForm from './displayForm'
import { useDispatch } from 'react-redux'
import { getToken } from '../../actions/token'
import { incrementUser } from '../../actions/user'
import { swapIsLoading } from '../../actions/loading'

const Login = () => {
  const [formState, setFormState] = useState()

  const dispatch = useDispatch()

  const onSubmitLog = e => {
    e.preventDefault()
    dispatch(getToken(formState))
    dispatch(incrementUser(formState.username))
    dispatch(swapIsLoading())
  }

  return (
    <>
      <DisplayForm
        formState={formState}
        setFormState={setFormState}
        onSubmitLog={onSubmitLog}
      />
    </>
  )
}

export default Login
