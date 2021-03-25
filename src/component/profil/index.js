import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../actions/user'

const Profil = () => {
  const dispath = useDispatch()
  const user = useSelector(state => state.user.userValue)
  return (
    <div>
      <p>{user}</p>
      <button onClick={() => dispath(changeTheme())}>Swap Theme</button>
    </div>
  )
}

export default Profil
