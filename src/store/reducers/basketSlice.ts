import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NotificationManager } from 'react-notifications'
import { Basket } from '../../services/models'
import BasketService from '../../services/BasketService'

const initialState = {
  basket: null as Basket | null,
  isBasketFetching: false,
}

export const getBasket = createAsyncThunk<void, { accessToken?: string }>(
  'basket/basket',
  async (params, { dispatch }) => {
    try {
      const { data } = await BasketService.getBasket(params)
      dispatch(setBasket(data))
    } catch (e: any) {
      NotificationManager.error(e.description)
    }
  }
)

export const addProductToBasket = createAsyncThunk(
  'basket/add',
  async (
    params: {
      productId: number
      name: string
      quantity: number
      price: number
      accessToken?: string
    },
    { dispatch }
  ) => {
    try {
      const { data } = await BasketService.addProductToBasket(params)
      dispatch(setBasket(data))
    } catch (e: any) {
      NotificationManager.error(e.description)
    }
  }
)

export const deleteProductFromBasket = createAsyncThunk(
  'basket/delete',
  async (
    params: {
      productId: number
      accessToken: string
    },
    { dispatch }
  ) => {
    try {
      const { data } = await BasketService.deleteProductFromBasket(params)
      dispatch(setBasket(data))
    } catch (e: any) {
      NotificationManager.error(e.description)
    }
  }
)

export const createOrder = createAsyncThunk(
  'basket/order',
  async (_, { dispatch }) => {
    try {
      await BasketService.createOrder()
    } catch (e: any) {
      NotificationManager.error(e.description)
    }
  }
)

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setBasket(state, action: PayloadAction<Basket>) {
      state.basket = action.payload
    },
    setIsBasketFetching(state, action: PayloadAction<boolean>) {
      state.isBasketFetching = action.payload
    },
  },
})

export const { setBasket, setIsBasketFetching } = basketSlice.actions
export default basketSlice.reducer
