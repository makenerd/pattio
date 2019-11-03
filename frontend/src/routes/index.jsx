import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoutes } from "../views/auth";

import { CreatorRoutes } from '../views/creator/routing.jsx';
import { ListRoutes } from '../views/follower/routing.jsx';
import { BrandRoutes } from '../views/brand/routing.jsx';
import { CategoryRoutes } from '../views/category/routing.jsx';
import { CartRoutes } from '../views/cart/routing.jsx';

import { Home } from "../views/displays";

function RoutesRoot() {
  return (
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/auth" render={()=><AuthRoutes/>} />
        <Route path="/categorias" render={()=><CategoryRoutes/>} />
        <Route path="/creadores" render={()=><CreatorRoutes/>} />
        <Route path="/marcas" render={()=><BrandRoutes/>} />
        <Route path="/listas" render={()=><ListRoutes/>} />
        <Route path="/cart" component={() => <CartRoutes/>} />
        <Route path="/perfil" component={() => {console.log("perfil!!");}} />
      </Switch>
  );
}

export { RoutesRoot };
