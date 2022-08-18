import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../api/AuthService";
import { NotificationManager } from "react-notifications";
import jwtDecode from "jwt-decode";
import { HYDRATE } from "next-redux-wrapper";

export type User = {
  id: number;
  email: string;
  roles: any[];
};

const initialState = {
  user: null as User | null,
};

export const login = createAsyncThunk(
  "catalog/product",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.login(params);
      const user: User = jwtDecode(data.token);
      dispatch(setUser(user));
      localStorage.setItem("accessToken", data.token);
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

export const register = createAsyncThunk(
  "catalog/register",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.register(params);
      const user: User = jwtDecode(data.token);
      dispatch(setUser(user));
      localStorage.setItem("accessToken", data.token);
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout: () => {
      console.log("logout");
    },
  },
  extraReducers: {}
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
