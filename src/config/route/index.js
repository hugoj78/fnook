import React, { useState } from 'react'
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
import Success from '../../component/basket/stripe/success'
import Checkout from '../../component/basket/stripe/checkout'
import Header from '../../component/header'
import Purchase from '../../component/purchase'
import Sale from '../../component/sale'
import FormSale from '../../component/sale/form'
import Villagers from '../../component/items/villagers'
import ItemSales from '../../component/items/sales'
import Bill from '../../component/bill'

import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'
import { theme, themeDark } from '../../config/theme'
import { createGlobalStyle } from 'styled-components'

import { getToken, onMessageListener } from '../firebase'
import Toast from '../../component/toast'
import Loading from '../../component/loading'

const Routes = () => {
  const themeValue = useSelector(state => state.user.themeValue)
  const isLoading = useSelector(state => state.loading.isLoading)

  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState()
  const [isTokenFound, setTokenFound] = useState(false)

  getToken(setTokenFound)
  onMessageListener()
    .then(payload => {
      setShow(true)
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body
      })
    })
    .catch(err => console.log('failed: ', err))

  if (isLoading) {
    return (
      <>
        <ThemeProvider theme={themeValue ? theme : themeDark}>
          <GlobalStyle />
          <Loading />
        </ThemeProvider>
      </>
    )
  }

  return (
    <ThemeProvider theme={themeValue ? theme : themeDark}>
      <GlobalStyle />
      <Router>
        <Header />
        {isTokenFound && show ? (
          <>
            <Toast
              title={notification?.title}
              body={notification?.body}
              setShow={setShow}
            />
          </>
        ) : null}
        <Switch>
          <PublicRoute exact path='/login' component={Login} />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/villagers' component={Villagers} />
          <PrivateRoute exact path='/items/:id' component={ItemSales} />
          <PrivateRoute exact path='/profil' component={Profil} />
          <PrivateRoute exact path='/basket' component={Basket} />
          <PrivateRoute exact path='/basket/success' component={Success} />
          <PrivateRoute exact path='/basket/checkout' component={Checkout} />
          <PrivateRoute exact path='/purchase' component={Purchase} />
          <PrivateRoute exact path='/sale' component={Sale} />
          <PrivateRoute exact path='/sale/form' component={FormSale} />
          <PrivateRoute exact path='/bill' component={Bill} />
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color : ${props => props.theme.textColor}
  }
`

export default Routes
