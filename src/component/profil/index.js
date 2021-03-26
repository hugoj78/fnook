import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeTheme } from '../../actions/user'
import { Container, Button, Text, Image } from './profilElements'
import { NavLink as Link } from 'react-router-dom'

const Profil = () => {
  const dispath = useDispatch()
  const user = useSelector(state => state.user.userValue)
  return (
    <Container>
      <Image src='profil.png' alt='profil' />
      <Text>Pseudo : {user}</Text>
      <Button onClick={() => dispath(changeTheme())}>Theme</Button>
      <Link to='/sale'>
        <Button>Mes ventes</Button>
      </Link>
      <Link to='/purchase'>
        <Button>Mes achats</Button>
      </Link>
    </Container>
  )
}

export default Profil
