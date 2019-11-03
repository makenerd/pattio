import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoListas, 
          fakeInfoLista, 
          fakeInfoProduct  
        } from '../../components/Display/fakeInfo'

function ListRoutes(props) {
  return (
    <Switch>
      <Route path="/listas" exact render={()=> <Display pageGroups={fakeInfoListas}/>}/>
      <Route path="/listas/:lista" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/listas/:lista/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { ListRoutes }