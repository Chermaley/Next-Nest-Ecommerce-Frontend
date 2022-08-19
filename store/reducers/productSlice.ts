import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../api/models";
import ProductService from "../../api/ProductService";
import { ProductType } from "../../api/models/ProductType";
import { HYDRATE } from "next-redux-wrapper";
import { User } from "./authSlice";

const initialState = {
  productList: [] as Product[],
  productTypeList: [] as ProductType[],
  currentProduct: null as Product | null,
};

export const getProduct = createAsyncThunk(
  "catalog/product",
  async (params: { productId: number }, { dispatch }) => {
    try {
      const { data } = await ProductService.getProduct(params);
      dispatch(setProduct(data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const getProductList = createAsyncThunk(
  "catalog/list",
  async (params: { typeId?: number }, { dispatch }) => {
    try {
      const { data } = await ProductService.getProductList(params);
      dispatch(setProductList(data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const getProductTypeList = createAsyncThunk(
  "catalog/typeList",
  async (_, { dispatch }) => {
    try {
      const { data } = await ProductService.getProductTypeList();
      dispatch(setProductTypes(data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const contractSlice = createSlice({
  name: "contract",
  initialState,
  reducers: {
    setProductList(state, action: PayloadAction<Product[]>) {
      state.productList = action.payload;
    },
    setProduct(state, action: PayloadAction<Product>) {
      state.currentProduct = action.payload;
    },
    setProductTypes(state, action: PayloadAction<ProductType[]>) {
      state.productTypeList = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.product };
    },
  },
});

const { setProductList, setProduct, setProductTypes } = contractSlice.actions;
export default contractSlice.reducer;
