import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Badge, Icon, Input, Radio } from 'antd';
import './Header.scss';
import { useSelector } from 'react-redux';


function Header(props) {
  const [title] = ["Mafer Neyra"];
  const [searchBar, setSearchBar] = useState(false);
  const cartCount = useSelector(state => state.cartCount);
  return (
    <header className="header">
      <div className="header__icons header__icons_left">
        { title && <Icon type="left" /> }
        <Icon type="menu" style={{ fontSize: '22px'}}/>
      </div>
      <h1 className="header__title">
        <Link className="header__logo" to="/">Pattio</Link>
        <Link className="header__sublogo" to="/">{title}</Link>
      </h1>
      <div className="header__icons header__icons_left">
        <Icon type="search" style={{ fontSize: '22px'}}  onClick={()=>setSearchBar(!searchBar)}/>
        <Badge count={cartCount} style={{ backgroundColor: '#E94B40' }}>
          <Icon type="shopping" style={{ fontSize: '22px'}} theme='filled'/>
        </Badge>
      </div>
      { searchBar && <Input.Search className="header__search" placeholder="Qué estas buscando?" onSearch={value => console.log(value)} />}
      {/* <input className="header__search" type="search" placeholder="Qué estas buscando?" style={searchBar ? null : {display: "none"}}/> */}
    </header>
  )
}

export default Header;
