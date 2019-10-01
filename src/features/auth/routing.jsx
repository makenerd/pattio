import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Login
} from './components'

function AuthRoutes() {
  return (
    <Switch>
      <Route
        path="/auth"
        exact
        component={Login}
      />
    </Switch>
  );
}

export { AuthRoutes };
