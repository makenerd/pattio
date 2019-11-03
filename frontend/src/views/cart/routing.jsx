import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Display from '../../components/Display/Display.jsx';
import { fakeInfoCart } from '../../components/Display/fakeInfo.js';

function CartRoutes(props) {
  return (
    <Switch>
      <Route path="/cart" exact render={()=> <Display pageGroups={fakeInfoCart}/>}/>
    </Switch>
  ); 
}

export { CartRoutes }