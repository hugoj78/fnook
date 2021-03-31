import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const AdminRoute = ({ component: Component, ...rest }) => {
  const tokenState = useSelector(state => state.token.tokenValue)
  const user = useSelector(state => state.user.userValue)
  return (
    <Route
      {...rest}
      render={props =>
        tokenState && user === 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login'></Redirect>
        )
      }
    ></Route>
  )
}

export default AdminRoute
