import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  ProductsCategories,
  ProductsCategory,
  ProductsDetail
} from '../products';

function CategoriesRoutes() {
  return (
    <Switch>
      <Route
        path="/categorias"
        exact
        component={ProductsCategories}
      />
      <Route
        path="/categorias/:category"
        exact
        component={ProductsCategory}
      />
      <Route
        path="/categorias/:category/:product"
        component={ProductsDetail}
      />
    </Switch>
  );
}

export { CategoriesRoutes };
