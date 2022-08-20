import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";
import { Basket } from "../../api/models";
import BasketService from "../../api/BasketService";


const initialState = {
  basket: null as Basket | null
};

export const getBasket = createAsyncThunk(
  "catalog/product",
  async (_, { dispatch }) => {
    try {
      const { data } = await BasketService.getBasket()
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
  extraReducers: {}
});

export const { setBasket } = basketSlice.actions;
export default basketSlice.reducer;
