import React, { useEffect, useState } from 'react'
import './App.css'

import Routes from './config/route'
import { Provider } from 'react-redux'
import { persistor, store } from './config/store'
import { PersistGate } from 'redux-persist/integration/react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51IYsN6FpxjXf87kOAoD3N68wHo5IDhOjiHjCXqnmhWdHsmnhereM817tqJ9IGX0lyZp7Y7DehI07FLOWfpZ6TajA00YFzFryQP'
)

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
