import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { shopDetailsReducer, shopListReducer } from './reducers/shopReducers';
import {userSignInReducer, userRegisterReducer } from './reducers/userReducers';

const initialState={
    cart:{paymentMethod:'PayPal',
        shippingAddress:localStorage.getItem('shippingAddress')?JSON.parse(localStorage.getItem('shippingAddress')):{},
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],},
    userSignin:{userInfo:localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null},

};
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userSignin:userSignInReducer,
    userRegister:userRegisterReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    shopList:shopListReducer,
    shopDetails:shopDetailsReducer,

})
const composeEnchancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(reducer,initialState,composeEnchancer(applyMiddleware(thunk)));

export default store;