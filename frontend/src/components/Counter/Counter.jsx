import React from 'react';
import './Counter.scss';
import { Button } from 'antd';

function Counter(props) {
    const {count, setCount, dispatchCart, itemsToCart} = props;
    return (
        <div className='Counter'>
            <Button type="primary" shape="circle" icon="minus" size='large' onClick={ count-1 ? () => setCount(count => count - 1) : null }/>
            <Button type="primary" shape="circle" icon="plus" size='large' onClick={()=> setCount(count => count + 1)}/>
            <Button type="primary" size='large' onClick={ () => {
                dispatchCart({type: 'ADD_CART_COUNT', payload: count});
                dispatchCart({type: 'ADD_CART_LIST', payload: itemsToCart});
            }}>
                {`Agregar a carrito x ${count}`}
            </Button>
        </div>
    );
}

export default Counter;