import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Cart from './Cart.jsx';

function CartRoutes(props) {
  return (
    <Switch>
      <Route path="/cart" exact render={()=> <Cart/>}/>
    </Switch>
  ); 
}

export { CartRoutes }