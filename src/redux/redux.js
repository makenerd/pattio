import { createStore } from 'redux';


const initialState = {
    cartCount: 0,
    cartList: []
}

export const store = createStore(cartReducer, initialState);

export function cartReducer(state = initialState, {type, payload}) {
    switch(type) {
        case 'ADD_CART_COUNT':
            console.log('adding');
            return {...state, cartCount: state.cartCount + payload}
        case 'ADD_CART_LIST':
            console.log(payload);
            console.log(state.cartList);
            // return {...state, cartList: [...state.cartList, payload]}
            return {...state, cartList: updateCart(state.cartList, payload)}
        default:
            return state
    }
}

function updateCart(currentCart, newItem) {
    const repeatedItem = currentCart.find(currentItem => ((currentItem.description === newItem.description) && (currentItem.model === newItem.model) && (currentItem.size === newItem.size)))
    if (repeatedItem) {
    return currentCart.map(currentItem => ((currentItem.description === newItem.description) && (currentItem.model === newItem.model) && (currentItem.size === newItem.size)) ? 
        {...currentItem, count: currentItem.count + newItem.count} :
        currentItem )
    } else {
    return [...currentCart, newItem]
    }};