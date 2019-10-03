import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./login/login.container.jsx";
import { Register } from "./register/register.container.jsx";
import { Password } from "./password/password.container.jsx";

function AuthRoutes() {
    return (
      <Switch>
        <Route path="/auth" exact render={()=><Login/>} />
        <Route path="/auth/register" exact render={()=><Register/>} />
        <Route path="/auth/reset" exact render={()=><Password/>} />
      </Switch>
    );
  }
  
  export { AuthRoutes };