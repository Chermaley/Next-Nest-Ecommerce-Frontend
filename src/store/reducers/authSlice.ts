import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import AuthService from '../../services/AuthService'
import { NotificationManager } from 'react-notifications'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  accessToken: null as string | null,
}

export const signUp = createAsyncThunk(
  'auth/register',
  async (params: { email: string; password: string }) => {
    try {
      await AuthService.signUp(params)
      NotificationManager.success('Аккаунт создан')
    } catch (e: any) {
      NotificationManager.error(e.description)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    },
  },
})

export const authActions = authSlice.actions
export default authSlice.reducer
