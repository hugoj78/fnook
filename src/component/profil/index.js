import React from 'react'
import { useSelector } from 'react-redux'

const Profil = () => {
  const user = useSelector(state => state.user.userValue)
  return (
    <div>
      <p>{user}</p>
    </div>
  )
}

export default Profil
