import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Product} from "../../api/models";
import ProductService from "../../api/ProductService";
import {ProductType} from "../../api/models/ProductType";

const initialState = {
    productList: [] as Product[],
    productTypeList: [] as ProductType[],
    currentProduct: null as Product | null
};

export const getProduct = createAsyncThunk(
    'catalog/product',
    async (params: {productId: number}) => {
        try {
            const {data} = await ProductService.getProduct(params)
            return data
        } catch (e) {
            console.log(e)
        }
    },
);

export const getProductList = createAsyncThunk(
    'catalog/list',
    async (params: {typeId?: number}) => {
        try {
            const {data} = await ProductService.getProductList(params)
            return data
        } catch (e) {
            console.log(e)
        }
    },
);

export const getProductTypeList = createAsyncThunk(
    'catalog/typeList',
    async () => {
        try {
            const {data} = await ProductService.getProductTypeList()
            return data
        } catch (e) {
            console.log(e)
        }
    },
);

export const contractSlice = createSlice({
    name: 'contract',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProductList.fulfilled, (state, {payload}) => {
                if (payload) state.productList = payload;
            })
            .addCase(getProduct.fulfilled, (state, {payload}) => {
                if (payload) state.currentProduct = payload;
            })
            .addCase(getProductTypeList.fulfilled, (state, {payload}) => {
                if (payload) state.productTypeList = payload;
            })
    },
});

export default contractSlice.reducer;
