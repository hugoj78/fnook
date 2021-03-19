import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../utils/privateRoute'
import PublicRoute from '../utils/publicRoute'

const Route = () => {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        <PublicRoute exact path='/' component={(props) => <Login setIsToken={setIsToken} {...props}/>} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
};

export default Route;
