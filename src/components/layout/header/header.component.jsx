import React from "react";
import { Link } from "react-router-dom"
import { Icon } from 'antd'
import './header.scss';

function Header() {
  return (
    <header className="header">
      <i className="fas fa-bars header__menu"></i>
      <h1 className="header__logo">
        <Link to="/">Pattio</Link>
      </h1>
      <Icon type="right"/>
    </header>
  )
}

export { Header };
