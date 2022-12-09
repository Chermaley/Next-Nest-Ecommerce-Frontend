import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  currentProductTypeId: null as number | null,
}

export const contractSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    setCurrentProductTypeId(state, action: PayloadAction<number | null>) {
      state.currentProductTypeId = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.product }
    },
  },
})

export const { setCurrentProductTypeId } = contractSlice.actions
export default contractSlice.reducer
