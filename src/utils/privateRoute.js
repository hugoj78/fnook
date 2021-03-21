import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  return (
    <Route
      {...rest}
      render={props =>
        tokenState ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login'></Redirect>
        )
      }
    ></Route>
  )
}

export default PrivateRoute
