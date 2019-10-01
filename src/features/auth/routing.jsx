import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Login,
  Register,
  Password
} from './components'

function AuthRoutes() {
  return (
    <Switch>
      <Route
        path="/auth"
        exact
        component={Login}
      />
      <Route
        path="/auth/registro"
        exact
        component={Register}
      />
      <Route
        path="/auth/cambiar-contrasena"
        exact
        component={Password}
      />
    </Switch>
  );
}

export { AuthRoutes };
