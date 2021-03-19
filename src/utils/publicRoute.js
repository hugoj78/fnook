import React from "react";

import { Redirect, Route } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Redirect to="/characters"></Redirect>
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
};

export default PublicRoute;
