import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Display from '../../components/Display/Display.js';
import Card from '../../components/Card/Card.js';
import { fakeInfoHome, fakeInfoCategorias, fakeInfoCategoria, 
        fakeInfoCreadores, fakeInfoCreador, fakeInfoMarcas, fakeInfoMarca, fakeInfoListas, fakeInfoLista, fakeInfoProduct, fakeInfoCart } from '../../components/Display/fakeInfo.js';

function Home(props) {
    return (
        <Display pageGroups={fakeInfoHome}/>
    );
}

function CategoryRoutes(props) {
  return (
    <Switch>
      <Route path="/categorias" exact render={()=> <Display pageGroups={fakeInfoCategorias}/>}/>
      <Route path="/categorias/:category" exact render={()=> <Display pageGroups={fakeInfoCategoria}/>}/>
      <Route path="/categorias/:category/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

function CreatorRoutes(props) {
  return (
    <Switch>
      <Route path="/creadores" exact render={()=> <Display pageGroups={fakeInfoCreadores}/>}/>
      <Route path="/creadores/:creator" exact render={()=> <Display pageGroups={fakeInfoCreador}/>}/>
      <Route path="/creadores/:creator/:group" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/creadores/:creator/:group/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

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

function ListRoutes(props) {
  return (
    <Switch>
      <Route path="/listas" exact render={()=> <Display pageGroups={fakeInfoListas}/>}/>
      <Route path="/listas/:lista" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/listas/:lista/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

function CartRoutes(props) {
  return (
    <Switch>
      <Route path="/cart" exact render={()=> <Display pageGroups={fakeInfoCart}/>}/>
    </Switch>
  ); 
}










export { Home, CategoryRoutes, CreatorRoutes, BrandRoutes, ListRoutes, CartRoutes};