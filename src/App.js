import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Route from "./config/route";
import { Provider } from "react-redux";
import { persistor, store } from "./config/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Route />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
