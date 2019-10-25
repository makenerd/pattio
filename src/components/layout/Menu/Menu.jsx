import React from 'react';
import './Menu.scss';

function Menu(props) {
    const [isLoggedIn, username] = [false, 'Monica']
    return (
        <div className='Menu'>
            <p>{ isLoggedIn ? `Hola ${username}` : 'Iniciar Sesion' }</p>
        </div>
    );
}

export default Menu;