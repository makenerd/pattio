import React from "react";
import { Route, Switch } from "react-router-dom";
// import { AuthRoutes } from "../views/auth";
import Login from "../views/auth/login/Login.jsx"
import Password from "../views/auth/login/Password.jsx"
import Register from "../views/auth/login/Register.jsx"

import { CreatorRoutes } from '../views/creator/routing.jsx';
import ListRoutes from '../views/list/routing.jsx';
import { BrandRoutes } from '../views/brand/routing.jsx';
import { CategoryRoutes } from '../views/category/routing.jsx';
import { CartRoutes } from '../views/cart/routing.jsx';

import Home from "../views/Home/Home.jsx";
import NewForm from "../views/NewForm/NewForm.jsx";
import ProductCard from "../components/ProductCard/ProductCard.jsx";

function RoutesRoot() {
  return (
      <Switch>
        <Route path="/" exact render={() => <Home/>} />
        <Route path="/login" render={()=><Login/>} />
        <Route path="/reset" render={() => <Password/>} />
        <Route path="/register" render={()=><Register/>} />

        <Route path="/categorias" render={()=><CategoryRoutes/>} />
        <Route path="/creadores" render={()=><CreatorRoutes/>} />
        <Route path="/marcas" render={()=><BrandRoutes/>} />
        <Route path="/listas" render={()=><ListRoutes/>} />
        <Route path="/cart" component={() => <CartRoutes/>} />
        <Route path="/newproduct" component={() => <NewForm/>} />
        <Route path="/dummy" component={() => <ProductCard/>} />
        <Route path="/perfil" component={() => {console.log("perfil!!");}} />
      </Switch>
  );
}

export { RoutesRoot };
