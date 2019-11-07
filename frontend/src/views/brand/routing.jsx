import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoMarcas, 
          fakeInfoMarca, 
          fakeInfoLista, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo';
import Brand from './Brand';
import Brands from './Brands';

function BrandRoutes(props) {
  return (
    <Switch>
      <Route path="/marcas" exact render={()=> <Brands/>}/>
      <Route path="/marcas/:brand" exact render={(props)=> <Brand {...props}/>}/>
      <Route path="/marcas/:marca/:group" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/marcas/:marca/:group/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { BrandRoutes }
