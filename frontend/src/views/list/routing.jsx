import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoListas, 
          fakeInfoLista, 
          fakeInfoProduct  
        } from '../../components/Display/fakeInfo'
import Lists from './Lists.jsx';

function ListRoutes(props) {
  return (
    <Switch>
      <Route path="/listas" exact render={()=> <Lists/>}/>
      <Route path="/listas/:lista" exact render={()=> <Lists/>}/>
      {/* <Route path="/listas/:lista/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/> */}
    </Switch>
  );
}

export default ListRoutes;