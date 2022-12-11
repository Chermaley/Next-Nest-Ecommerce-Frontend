import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null as string | null,
  skip: true,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
      state.skip = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
