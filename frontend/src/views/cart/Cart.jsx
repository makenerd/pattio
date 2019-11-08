import React from 'react';
import CartItem from '../../components/CartItem/CartItem.jsx';
import { useSelector } from 'react-redux';

function Cart(props) {
    const cartList = useSelector(state => state.cartReducer.cartList)
    console.log(cartList);
    console.log(cartList.length);
    return (
        <div className='sketchy'>
            { 
            cartList.map(cartItem => <CartItem {...cartItem} />)
            }
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
}

export default Cart;