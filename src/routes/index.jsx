import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CategoriesRoutes } from "../features/categories";
import { CreatorsRoutes } from "../features/creators";
import { BrandsRoutes } from "../features/brands";
import { ProductsList } from "../features/products";

function RoutesRoot() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={() => {
            return <h1>Home</h1>;
          }}
        />
        <Route path="/categorias" component={CategoriesRoutes} />
        <Route path="/creadores" component={CreatorsRoutes} />
        <Route path="/marcas" component={BrandsRoutes} />
        <Route path="/listas" component={ProductsList} />
        <Route
          path="/perfil"
          component={() => {
            console.log("perfil!!");
          }}
        />
        <Route
          path="/login"
          component={() => {
            console.log("login!!");
          }}
        />
        <Route
          path="/payments"
          component={() => {
            console.log("payments!!");
          }}
        />
      </Switch>
    </Router>
  );
}

export { RoutesRoot };
