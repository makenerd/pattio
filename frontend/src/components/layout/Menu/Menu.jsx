import React from 'react';
import './Menu.scss';
import { slide as SlideMenu } from 'react-burger-menu'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

function Menu(props) {
    const [isLoggedIn, username] = [true, 'Monica']
    let slideMenu = useSelector(state => state.slideMenuReducer.slideMenu);
    let loggedUser = useSelector(state => state.slideMenuReducer.loggedUser);
    return (
        <SlideMenu isOpen={ slideMenu } styles={ styles } customBurgerIcon={false}> 
            <Link className='bmItem' to='/login'>{loggedUser? `Hola ${loggedUser} 😊` : 'Hola! Quieres iniciar sesión?'}</Link>
            <Link className='bmItem' to='/creadores'>Creadores</Link>
            <Link className='bmItem' to='/categorias'>Categorias</Link>
            <Link className='bmItem' to='/marcas'>Marcas</Link>
            {/* <a className="bmItem" href='/'>Marcas!!</a> */}
        </SlideMenu>
    );
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90f0'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'block', //cambiado de inline-block
      margin: '0 0 30px 0', //extra
      zIndex: '1'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

export default Menu;