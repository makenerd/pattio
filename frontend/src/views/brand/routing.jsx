import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoMarcas, 
          fakeInfoMarca, 
          fakeInfoLista, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo';

function BrandRoutes(props) {
  return (
    <Switch>
      <Route path="/marcas" exact render={()=> <Display pageGroups={fakeInfoMarcas}/>}/>
      <Route path="/marcas/:marca" exact render={()=> <Display pageGroups={fakeInfoMarca}/>}/>
      <Route path="/marcas/:marca/:group" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/marcas/:marca/:group/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { BrandRoutes }
