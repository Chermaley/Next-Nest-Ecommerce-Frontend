import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthService from "../../api/AuthService";
import { NotificationManager } from "react-notifications";
import jwtDecode from "jwt-decode";

export type User = {
  id: number;
  email: string;
  roles: any[];
};

const initialState = {
  user: null as User | null,
};

export const signIn = createAsyncThunk(
  "catalog/product",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.signIn(params);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      const user: User = jwtDecode(data.accessToken);
      dispatch(setUser(user));
    } catch (e: any) {
      NotificationManager.error(e.description);
    }
  }
);

export const signUp = createAsyncThunk(
  "catalog/register",
  async (params: { email: string; password: string }, { dispatch }) => {
    try {
      const { data } = await AuthService.signUp(params);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      const user: User = jwtDecode(data.accessToken);
      dispatch(setUser(user));
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
