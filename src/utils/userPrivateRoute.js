import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const UserPrivateRoute = ({ component: Component, ...rest }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  const user = useSelector(state => state.user.userValue)
  const objetUpdate = rest.computedMatch.params.id
  const objetsToSale = useSelector(state => state.sales.list).filter(
    item => item.id === objetUpdate
  )

  const isGoodUser = user === objetsToSale[0].user

  return (
    <Route
      {...rest}
      render={props =>
        tokenState && isGoodUser ? (
          <Component {...props} />
        ) : (
          <Redirect to='/'></Redirect>
        )
      }
    ></Route>
  )
}

export default UserPrivateRoute
