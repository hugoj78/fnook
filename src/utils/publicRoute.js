import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  return (
    <Route
      {...rest}
      render={props =>
        tokenState ? <Redirect to='/'></Redirect> : <Component {...props} />
      }
    ></Route>
  )
}

export default PublicRoute
