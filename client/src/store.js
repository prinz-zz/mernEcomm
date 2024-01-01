import { configureStore } from '@reduxjs/toolkit';
import productReducer from './components/products/productSlice.js';

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})