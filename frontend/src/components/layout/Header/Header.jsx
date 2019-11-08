import React, {useState} from "react";
import { Link, withRouter  } from "react-router-dom";
import { Badge, Icon, Input, Radio } from 'antd';
import './Header.scss';
import { useSelector, useDispatch } from 'react-redux';
import Subtitle from './Subtitle.jsx';


function Header(props) {
  const [searchBar, setSearchBar] = useState(false);
  const cartCount = useSelector(state => state.cartReducer.cartCount);
  const headerTitle = useSelector(state => state.headerReducer.headerTitle);
  const dispatchSlideMenu = useDispatch()
  // console.log(props);
  return (
    <header className="header">
      <div className="header__icons header__icons_left">
        { headerTitle && <Icon type="left" onClick={ () => props.history.goBack() }/> }
        <Icon type="menu" style={{ fontSize: '22px'}} onClick={()=>dispatchSlideMenu({type: 'TOGGLE_MENU'})}/>
      </div>
      <div className="header__title">
        <Link to="/"><h1 className='heading heading--stroke-shadow'>pattio</h1></Link>
        {headerTitle? <Subtitle>{headerTitle}</Subtitle> : "" }
        {/* <Link className="header__sublogo" to="/">{headerTitle}</Link> */}
      </div>
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

export default withRouter(Header);
