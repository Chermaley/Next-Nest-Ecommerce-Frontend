import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AuthService from '../../services/AuthService'
import { NotificationManager } from 'react-notifications'

const initialState = {}

export const signUp = createAsyncThunk(
  'auth/register',
  async (params: { email: string; password: string }, { dispatch }) => {
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
  reducers: {},
})

export default authSlice.reducer
