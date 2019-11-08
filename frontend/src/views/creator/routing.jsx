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
import Creators from './Creators.jsx';
import Creator from './Creator.jsx';
import CreatorGroup from './CreatorGroup.jsx';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';

function CreatorRoutes(props) {
  return (
    <Switch>
      <Route path="/creadores" exact render={()=> <Creators/>}/>
      <Route path="/creadores/:creator" exact render={(props)=> <Creator {...props}/>}/>
      <Route path="/creadores/:creator/p/:product" exact render={(props)=> <ProductCard {...props}/>}/>
      <Route path="/creadores/:creator/:group" exact render={(props)=> <CreatorGroup {...props}/>}/>
    </Switch>
  );
}

export { CreatorRoutes };