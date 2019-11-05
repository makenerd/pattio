import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card.jsx';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Carousel } from 'antd';
import './Home.scss';

function HiThere(props) {
  
  return (
    <div style={{backgroundImage: `url(${'https://source.unsplash.com/random/64'})`}} className='HiThere'>
      <span className='HiThere__msj' style={{color: 'white'}}>Encuentra | Descubre | Comparte </span>
    </div>
  );  
}

function Home(props) {
    const [homeGroups, setHomeGroups] = useState([]);
    const dispatchHeaderTitle = useDispatch();

      useEffect(() => { 
        const fetchData = async () => {
        const listsHome = await axios('http://localhost:8000/api/home/lists');
        const creatorsHome = await axios('http://localhost:8000/api/home/creators');
        const brandHome = await axios('http://localhost:8000/api/home/brands');
        const categoriesHome = await axios('http://localhost:8000/api/home/categories');
        
        const result = [{...listsHome.data, groupType: 'scrollH', cardType: 'squareM'}, 
                        {...creatorsHome.data, groupType: 'scrollH', cardType: 'circleM'},
                        {...brandHome.data, groupType: 'scrollH', cardType: 'circleM'},
                        {...categoriesHome.data, groupType: 'scrollH', cardType: 'circleM'}];
        setHomeGroups(result);
        dispatchHeaderTitle({type: 'CHANGE_HEADER_TITLE', payload: ''});
        };
        fetchData();
      },[]);
    
    
    return (
        <>
          <HiThere/>
            {homeGroups.map( homeGroup => <Group {...homeGroup} key={homeGroup.groupTitle}/>)}
        </>
    );
}

export default Home;

        {/* <Display pageGroups={pageGroups}/> */}