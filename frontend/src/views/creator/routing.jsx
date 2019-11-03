import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoCreadores, 
          fakeInfoCreador,  
          fakeInfoLista, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo.js';

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

export { CreatorRoutes }; 