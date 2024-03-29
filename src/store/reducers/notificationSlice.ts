import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Notification = {
  id: number
  text: string
  type: NotificationType
}

export enum NotificationType {
  Success,
  Error,
}

const initialState = {
  notifications: [] as Notification[],
}

export const notificationSlice = createSlice({
  name: 'contract',
  initialState,
  reducers: {
    show(
      state,
      action: PayloadAction<{ text: string; type: NotificationType }>
    ) {
      const lastId = state.notifications[state.notifications.length - 1]?.id
      state.notifications.push({
        id: lastId ? lastId + 1 : 1,
        type: action.payload.type,
        text: action.payload.text,
      })
    },
    hide(state, action: PayloadAction<number>) {
      state.notifications = state.notifications.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const notificationActions = notificationSlice.actions
export default notificationSlice.reducer
