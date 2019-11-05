import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoCategorias, 
          fakeInfoCategoria, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo.js';
import Category from './Category.jsx';
import Categories from './Categories.jsx';

function CategoryRoutes(props) {
  return (
    <Switch>
      <Route path="/categorias" exact render={()=> <Categories/>}/>
      <Route path="/categorias/:category" exact render={(props)=> <Category {...props}/>}/>
      <Route path="/categorias/:category/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { CategoryRoutes };