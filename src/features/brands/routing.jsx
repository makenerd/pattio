import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ProductsCategories,
  ProductsCategory,
  ProductsList
} from '../products';

function BrandsRoutes() {
  return (
    <Switch>
      <Route
        path="/marcas"
        exact
        component={ProductsCategories}
      />
      <Route
        path="/marcas/:brand"
        exact
        component={ProductsCategory}
      />
      <Route
        path="/marcas/:brand/:category"
        exact
        component={ProductsCategory}
      />
      <Route
        path="/marcas/:brand/listas"
        component={ProductsList}
      />
      <Route
        path="/creadores/:creator/listas/:list"
        component={ProductsCategory}
      />
    </Switch>
  );
}

export { BrandsRoutes };
