import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoutes } from "../views/auth";
import { Home, CategoryRoutes, CreatorRoutes, BrandRoutes, ListRoutes, CartRoutes } from "../views/displays";

function RoutesRoot() {
  return (
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/auth" render={()=><AuthRoutes/>} />
        <Route path="/categorias" render={()=><CategoryRoutes/>} />
        <Route path="/creadores" render={()=><CreatorRoutes/>} />
        <Route path="/marcas" render={()=><BrandRoutes/>} />
        <Route path="/listas" render={()=><ListRoutes/>} />s
        <Route path="/cart" component={() => <CartRoutes/>} />
        <Route path="/perfil" component={() => {console.log("perfil!!");}} />
      </Switch>
  );
}

export { RoutesRoot };
