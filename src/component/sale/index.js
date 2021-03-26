import React from 'react'
import { NavLink as Link } from 'react-router-dom'

const Sale = () => {
  return (
    <>
      <div>eh oh je suis les ventes</div>
      <Link to='/sale/form' activeStyle>
        Vendre
      </Link>
    </>
  )
}

export default Sale
