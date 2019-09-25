import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ProductsCategories,
  ProductsCategory,
  ProductsDetail,
  ProductsList
} from '../products';

function CreatorsRoutes() {
  return (
    <Switch>
      <Route
        path="/creadores"
        exact
        component={ProductsCategories}
      />
      <Route
        path="/creadores/:creator"
        exact
        component={ProductsCategory}
      />
      <Route
        path="/creadores/:creator/:category"
        exact
        component={ProductsCategory}
      />
      <Route
        path="/creadores/:creator/listas"
        component={ProductsList}
      />
      <Route
        path="/creadores/:creator/listas/:list"
        component={ProductsDetail}
      />
    </Switch>
  );
}

export { CreatorsRoutes };
