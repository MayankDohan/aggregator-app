
import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from './shoppingCart'

 const store = configureStore({
    reducer:{shoppingCart: shoppingCartReducer }
})

export default store;
