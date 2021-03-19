import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "../../utils/privateRoute";
import PublicRoute from "../../utils/publicRoute";
import Login from "../../component/logIn";

const Routes = () => {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        <Route exact path="/" component={(props) => <Login {...props} />} />
        {/* <Route render={() => <Redirect to="/" />} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;
