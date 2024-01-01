import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts, fetchProductsByFilters } from './ProductApi';

const initialState = {
    products: [],
    status: 'idle',
}

export const fetchAllProductsAsync = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const response = await fetchAllProducts();
        return response.data;
    }
);
export const fetchProductsByFiltersAsync = createAsyncThunk(
    'products/fetchProductsByFilters',
    async (filter, sort, pagination) => {
        const response = await fetchProductsByFilters(filter, sort, pagination);
        return response.data;
    }
);


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllProductsAsync.pending, (state)=> {
            state.status = 'loading';
        })
        .addCase(fetchAllProductsAsync.fulfilled, (state, action)=> {
            state.status = 'idle';
            state.products =  action.payload;
        })
        .addCase(fetchProductsByFiltersAsync.pending, (state)=> {
            state.status = 'loading';
        })
        .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action)=> {
            state.status = 'idle';
            state.products =  action.payload;
        })
        }
});


export const { fetchAll } = productSlice.actions;
export const selectAllProducts = (state)=> state.product.products;
export default productSlice.reducer;