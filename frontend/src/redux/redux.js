import { createStore, combineReducers } from 'redux';


// const initialState = {
//     slideMenu: false,
//     cartCount: 0,
//     cartList: []
// }


export function slideMenuReducer(state = {slideMenu: false, loggedUser: ''}, {type, payload}) {
    switch(type) {
        case 'TOGGLE_MENU':
            return {...state, slideMenu: !state.slideMenu}
        case 'CHANGE_USER':
                return {...state, loggedUser: payload}
        default:
            return state
    }
}

export function headerReducer(state = {headerTitle: ''}, {type, payload}) {
    switch(type) {
        case 'CHANGE_HEADER_TITLE':
            return {...state, headerTitle: payload}
        default:
            return state
    }
}

export function cartReducer(state = {cartCount: 0, cartList: []}, {type, payload}) {
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

const rootReducer = combineReducers({slideMenuReducer, cartReducer, headerReducer})

export const store = createStore(rootReducer);




function updateCart(currentCart, newItem) {
    const repeatedItem = currentCart.find(currentItem => ((currentItem.description === newItem.description) && (currentItem.model === newItem.model) && (currentItem.size === newItem.size)))
    if (repeatedItem) {
    return currentCart.map(currentItem => ((currentItem.description === newItem.description) && (currentItem.model === newItem.model) && (currentItem.size === newItem.size)) ? 
        {...currentItem, count: currentItem.count + newItem.count} :
        currentItem )
    } else {
    return [...currentCart, newItem]
    }};