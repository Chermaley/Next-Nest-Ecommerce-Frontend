import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import { Basket } from "../../api/models";
import BasketService from "../../api/BasketService";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  basket: null as Basket | null,
};

export const getBasket = createAsyncThunk<void, { accessToken: string }>(
  "basket/basket",
  async (params, { dispatch }) => {
    try {
      const { data } = await BasketService.getBasket(params);
      dispatch(setBasket(data));
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

export const addProductToBasket = createAsyncThunk(
  "catalog/product",
  async (
    params: {
      productId: number;
      name: string;
      quantity: number;
      price: number;
    },
    { dispatch }
  ) => {
    try {
      const { data } = await BasketService.addProductToBasket(params);
      dispatch(setBasket(data))
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    setBasket(state, action: PayloadAction<Basket>) {
      state.basket = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.basket };
    },
  },
});

export const { setBasket } = basketSlice.actions;
export default basketSlice.reducer;
