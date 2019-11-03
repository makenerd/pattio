import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoCategorias, 
          fakeInfoCategoria, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo.js';

function CategoryRoutes(props) {
  return (
    <Switch>
      <Route path="/categorias" exact render={()=> <Display pageGroups={fakeInfoCategorias}/>}/>
      <Route path="/categorias/:category" exact render={()=> <Display pageGroups={fakeInfoCategoria}/>}/>
      <Route path="/categorias/:category/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { CategoryRoutes};