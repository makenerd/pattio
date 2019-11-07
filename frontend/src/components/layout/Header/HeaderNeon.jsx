import React, {useState} from "react";
import { Link, withRouter  } from "react-router-dom";
import { Badge, Icon, Input, Radio } from 'antd';
// import './HeaderNeon.scss';
import { useSelector, useDispatch } from 'react-redux';


function HeaderNeon(props) {
  const [title] = ["Mafer Neyra"];
  const [searchBar, setSearchBar] = useState(false);
  const cartCount = useSelector(state => state.cartReducer.cartCount);
  const headerTitle = useSelector(state => state.headerReducer.headerTitle);
  const dispatchSlideMenu = useDispatch()
  // console.log(props);
  return (
    <header className="header">
      <div className="header__icons header__icons_left">
        { title && <Icon type="left" onClick={ () => props.history.goBack() }/> }
        <Icon type="menu" style={{ fontSize: '22px'}} onClick={()=>dispatchSlideMenu({type: 'TOGGLE_MENU'})}/>
      </div>
      <h1 className="header__title">
      <div className='HiThere3'>
        <div class="logo line1"><b>pa<span>t</span>t<span>i</span>o</b></div>
      </div>
        <Link className="header__sublogo" to="/">{headerTitle}</Link>
      </h1>
      <div className="header__icons header__icons_left">
        <Icon type="search" style={{ fontSize: '22px'}}  onClick={()=>setSearchBar(!searchBar)}/>
        <Link to='/cart'>
          <Badge count={cartCount} style={{ backgroundColor: '#E94B40' }}>
            <Icon type="shopping" style={{ fontSize: '22px'}} theme='filled'/>
          </Badge>
        </Link>
      </div>
      { searchBar && <Input.Search className="header__search " placeholder="Qué estas buscando?" onSearch={value => console.log(value)} />}
      {/* <input className="header__search" type="search" placeholder="Qué estas buscando?" style={searchBar ? null : {display: "none"}}/> */}
    </header>
  )
}

export default withRouter(HeaderNeon);
