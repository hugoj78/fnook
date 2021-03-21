import React from 'react'
import DisplayHeader from './displayHeader'
import { useDispatch } from 'react-redux'
import { deleteToken } from '../../actions/token'

const Header = () => {
  const dispatch = useDispatch()

  const disconnect = () => {
    dispatch(deleteToken())
  }

  return (
    <>
      <DisplayHeader disconnect={disconnect} />
    </>
  )
}

export default Header
