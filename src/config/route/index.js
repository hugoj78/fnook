import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from '../../utils/privateRoute'
import PublicRoute from '../../utils/publicRoute'
import Login from '../../component/login'
import Home from '../../component/home'
import Profil from '../../component/profil'
import Basket from '../../component/basket'
import Header from '../../component/header'

import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { theme, themeDark } from '../../config/theme'

const Routes = () => {
  const themeValue = useSelector(state => state.user.themeValue)
  return (
    <ThemeProvider theme={themeValue ? theme : themeDark}>
      <Router>
        <Header />
        <Switch>
          <PublicRoute exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/profil' component={Profil} />
          <PrivateRoute exact path='/basket' component={Basket} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default Routes
