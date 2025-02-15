import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
    reducer:{
        cart1: cartReducer,
    },
    devTools: true,
});