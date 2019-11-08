import React from 'react';
import CartItem from '../../components/CartItem/CartItem.jsx';
import { useSelector } from 'react-redux';
import travolta from '../../assets/img/search_travolta.gif';
import './Cart.scss';

function Cart(props) {
    const cartList = useSelector(state => state.cartReducer.cartList)
    console.log(cartList);
    console.log(cartList.length);
    return (
        <div className='sketchy'>
            { (cartList.length === 0) ?
                <div className='Cart__noluck'>
                    <div className='frame_cart'>
                        <img src={travolta} alt="" className='frame__img'/>
                    </div>
                    <div>Aqui no hay nada joven</div>
                </div>
                :
                cartList.map((cartItem, index) => <CartItem {...cartItem} index={index}/>)
            }
        </div>
    );
}

export default Cart;