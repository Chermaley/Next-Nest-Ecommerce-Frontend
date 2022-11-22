import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../services/models'
import ProductService from '../../services/ProductService'
import { ProductType } from '../../services/models'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  productList: [] as Product[],
  productTypeList: [] as ProductType[],
  currentProduct: null as Product | null,
  searchedProducts: [] as Product[],
}

export const getProduct = createAsyncThunk(
  'catalog/product',
  async (params: { productId: number }, { dispatch }) => {
    try {
      const { data } = await ProductService.getProduct(params)
      dispatch(setProduct(data))
    } catch (e) {
      console.log(e)
    }
  }
)

export const getProductListByTerm = createAsyncThunk(
  'catalog/listByTerm',
  async (params: { term?: string }, { dispatch }) => {
    try {
      const { data } = await ProductService.getProductListByTerm(params)
      dispatch(setSearchedProductList(data))
    } catch (e) {
      console.log(e)
    }
  }
)

export const getProductList = createAsyncThunk(
  'catalog/list',
  async (params: { typeId?: number }, { dispatch }) => {
    try {
      const { data } = await ProductService.getProductList(params)
      return dispatch(setProductList(data))
    } catch (e) {
      console.log(e)
    }
  }
)

export const getProductTypeList = createAsyncThunk(
  'catalog/typeList',
  async (_, { dispatch }) => {
    try {
      const { data } = await ProductService.getProductTypeList()
      dispatch(setProductTypes(data))
    } catch (e) {
      console.log(e)
    }
  }
)

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setProductList(state, action: PayloadAction<Product[]>) {
      state.productList = action.payload
    },
    setProduct(state, action: PayloadAction<Product>) {
      state.currentProduct = action.payload
    },
    setProductTypes(state, action: PayloadAction<ProductType[]>) {
      state.productTypeList = action.payload
    },
    setSearchedProductList(state, action: PayloadAction<Product[]>) {
      state.searchedProducts = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.product }
    },
  },
})

export const {
  setProductList,
  setProduct,
  setProductTypes,
  setSearchedProductList,
} = contractSlice.actions
export default contractSlice.reducer
