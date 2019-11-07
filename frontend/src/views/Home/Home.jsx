import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card.jsx';
import Group from '../../components/Group/Group.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Carousel } from 'antd';
import './Home.scss';
// import './neon.scss';
import $ from 'jquery';

function HiThere(props) {
  
  return (
    <div style={{backgroundImage: `url(${'https://source.unsplash.com/random/64'})`}} className='HiThere'>
      <span className='HiThere__msj' style={{color: 'white'}}>Encuentra.<br/>Descubre.<br/>Comparte.</span>
    </div>
  );  
}

function HiThere2(props) {
  
  return (
    <div className='HiThere2' style={{backgroundImage: `url(${'https://source.unsplash.com/random/64'})`}}>
      <svg viewBox="0 0 300 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="30%">Encuentra.</text>
          <text textAnchor="middle" x="50%" y="55%">Descubre.</text>
          <text textAnchor="middle" x="50%" y="80%">Comparte.</text>
        </symbol>
        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
          <use xlinkHref="#s-text" className="text-copy" />
        </g>
      </svg>
    </div>
  );  
}

function HiThere3(props) {
  return (
    <div className='HiThere3'>
      <div class="logo line1"><b>Encuen<span>t</span>ra. Descubre. Compar<span>art</span>e</b></div>
    </div>
  );
}

function HiThere4(props) {
  return (
  <div className='HiThere4' style={{backgroundImage: `url(${'https://source.unsplash.com/random/64'})`}}>
    <div id='container'>
      {/* Make  */}
      <div id='flip'>
        <div><div>Encuentra</div></div>
        <div><div>Descubre</div></div>
        <div><div>Comparte</div></div>
      </div>
    {/* AweSoMe! */}
    </div> 
  </div>
  );
}

function HiThere5(props) {
  

  
  useEffect(() => {

    function autoType(elementClass, typingSpeed){
      var thhis = $(elementClass);
      thhis.css({
        "position": "relative",
        "display": "inline-block"
      });
      thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
      thhis = thhis.find(".text-js");
      var text = thhis.text().trim().split('');
      var amntOfChars = text.length;
      var newString = "";
      thhis.text("|");
      setTimeout(function(){
        thhis.css("opacity",1);
        thhis.prev().removeAttr("style");
        thhis.text("");
        for(var i = 0; i < amntOfChars; i++){
          (function(i,char){
            setTimeout(function() {        
              newString += char;
              thhis.text(newString);
            },i*typingSpeed);
          })(i+1,text[i]);
        }
      },1500);
    }
    setTimeout(autoType(".type-js",200), 3000);
  },[]);
  

  return (
    <div className='HiThere5'>
      <div class="type-js headline">
        <h1 class="text-js">Encuentra. Descubre. Comparte</h1> 
      </div>
    </div>
  );
}

function HiThere6(props) {
  
  useEffect(()=> {
    var words = 
    ['Encuentra','Descubre.','Comparte.🙂'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100;

var wordflick = function(){
  setInterval(function(){
      if (forwards) {
        if(offset >= words[i].length){
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      }
      else {
         if(offset == 0){
            forwards = true;
            i++;
            offset = 0;
            if(i >= len){
              i=0;
            } 
         }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        }
        else {
          offset--;
        }
      }
    	$('.word').text(part);
    },speed);
  };
  wordflick();
  }, [])
  return (
    <div className='HiThere6__container'>
      <div className='HiThere6'>
        <div class="word"></div>
      </div>
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
          {/* <HiThere/>
          <HiThere2/>
          <HiThere3/>
          <HiThere4/> */}
          {/* <HiThere5/> */}
          {/* <HiThere6/> */}
            {homeGroups.map( homeGroup => <Group {...homeGroup} key={homeGroup.groupTitle}/>)}
        </>
    );
}

export default Home;
export { HiThere5 };

        {/* <Display pageGroups={pageGroups}/> */}