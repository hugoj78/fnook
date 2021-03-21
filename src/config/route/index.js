import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import PrivateRoute from '../../utils/privateRoute'
import PublicRoute from '../../utils/publicRoute'
import Login from '../../component/logIn'
import Home from '../../component/home'
import Profil from '../../component/profil'
import Basket from '../../component/basket'
import Header from '../../component/header'

const Routes = () => {
  return (
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
  )
}

export default Routes
