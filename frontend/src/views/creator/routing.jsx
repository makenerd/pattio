import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Display from '../../components/Display/Display.jsx';
import Card from '../../components/Card/Card.jsx';
import {  fakeInfoCreadores, 
          fakeInfoCreador,  
          fakeInfoLista, 
          fakeInfoProduct, 
        } from '../../components/Display/fakeInfo.js';
import axios from 'axios';
import Creator from './Creator.jsx';

function CreatorRoutes(props) {

  const peticion = async () => {
    const result = await axios('http://localhost:8000/api/products/grouped');
    return result.data;
  };
  const infoCreadores = peticion();
  return (
    <Switch>
      <Route path="/creadores" exact render={()=> <Display pageGroups={fakeInfoCreador}/>}/>
      <Route path="/creadores/:creator" exact render={(props)=> <Creator {...props}/>}/>
      <Route path="/creadores/:creator/:group" exact render={()=> <Display pageGroups={fakeInfoLista}/>}/>
      <Route path="/creadores/:creator/:group/:product" exact render={()=> <Card {...fakeInfoProduct}/>}/>
    </Switch>
  );
}

export { CreatorRoutes }; 