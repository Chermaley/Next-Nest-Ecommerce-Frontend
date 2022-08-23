import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../api/AuthService";
import { NotificationManager } from "react-notifications";
import { getUser } from "./userSlice";

const initialState = {};

export const signIn = createAsyncThunk(
  "auth/product",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.signIn(params);
      dispatch(getUser({ accessToken: data.accessToken }));
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/register",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.signUp(params);
      dispatch(getUser({ accessToken: data.accessToken }));
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logoutThunk",
  async (_, { dispatch }) => {
    try {
      dispatch(logout());
      await AuthService.logout();
    } catch (e: any) {
      console.log(e);
      NotificationManager.error(e.description);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: () => {},
  },
  extraReducers: {},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
