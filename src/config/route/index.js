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
import Header from '../../component/header'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <PublicRoute
          exact
          path='/login'
          component={props => <Login {...props} history={history} />}
        />
        <PrivateRoute exact path='/' component={Home} />
        {/* <Route render={() => <Redirect to='/' />} /> */}
      </Switch>
    </Router>
  )
}

export default Routes
