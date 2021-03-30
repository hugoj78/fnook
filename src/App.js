import React, { useEffect, useState } from 'react'
import './App.css'

import Routes from './config/route'
import { Provider } from 'react-redux'
import { persistor, store } from './config/store'
import { PersistGate } from 'redux-persist/integration/react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import './config/translations'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise}>
            <Routes />
          </Elements>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
