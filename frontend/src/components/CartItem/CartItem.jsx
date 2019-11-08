import React, { useState } from 'react';
import './CartItem.scss';
import Options from '../Options/Options';
import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux';
import uuid from 'uuid/v4';
import { Link } from "react-router-dom"

function CartItem(props) {
    console.log(props);
    const thumbnail = props.thumbnail;
    const brand = props.brand.name;
    const name = props.name;
    const model = props.model;
    const size = props.size;
    const price = props.price;
    const count = props.count;
    const cardUrl = props.cardUrl ? props.cardUrl : '/';
    // const thumbnail = 'https://source.unsplash.com/random/63';
    // const brand = 'Naga';
    // const name = 'Vestido Macarena';
    // const model = 'Negro';
    // const size = 'S';
    // const price = 99.99;
    // const count = 2;
    
    // const [model, setModel] = useState('');
    // const [size, setSize] = useState('');
    // const [count, setCount] = useState(1);
    // const dispatchCart = useDispatch();


    return (
        <div className='CartItem sketchy__inner' key={uuid()}>
            <div className='CardItem__img' style={{backgroundImage: `url(${thumbnail})`}}></div>
            <div className='CardItem__info'>
                <div className='CartItem__prim'>{name}</div>
                <div className='CartItem__sec'>{brand}</div>
                <div className='CartItem__sec'>Modelo: {model} | Talla: {size}</div>
                <div className='CartItem__'>{price}</div>
                <div className='CartItem__'>{count}</div>
                <div>Borrar</div>
            </div>
        </div>
    );
}

export default CartItem;