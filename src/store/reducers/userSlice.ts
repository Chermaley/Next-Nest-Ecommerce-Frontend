import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../api/models";
import { HYDRATE } from "next-redux-wrapper";
import UserService from "../../api/UserService";

const initialState = {
  user: null as User | null,
};

export const getUser = createAsyncThunk(
  "user/user",
  async (params: {accessToken: string} , { dispatch }) => {
    try {
      const { data } = await UserService.getCurrentUser(params);
      dispatch(setUser(data));
    } catch (e) {
      console.log(e);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.user };
    },
  },
});

const { setUser } = userSlice.actions;
export default userSlice.reducer;
