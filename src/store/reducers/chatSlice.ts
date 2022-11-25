import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Consultation, ConsultationType, Message } from '../../services/models'
import { NotificationManager } from 'react-notifications'
import ChatService from '../../services/ChatService'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  openConsultations: [] as Consultation[],
  closedConsultations: [] as Consultation[],
  messages: [] as Message[],
  activeConsultation: null as Consultation | null,
  isEstablishingConnection: false,
  isConnected: false,
  isLoading: false,
}

export const getClosedConsultations = createAsyncThunk<
  void,
  { accessToken: string }
>('chat/getClosedConsultations', async (params, { dispatch }) => {
  try {
    const { data } = await ChatService.getClosedConsultations(params)
    dispatch(chatActions.setClosedConsultations(data))
  } catch (e: any) {
    NotificationManager.error(e.description)
  }
})

export const getOpenConsultation = createAsyncThunk<
  void,
  { accessToken: string }
>('chat/getActiveConsultation', async (params, { dispatch }) => {
  try {
    const { data } = await ChatService.getOpenConsultation(params)
    dispatch(chatActions.setConsultations({ consultations: data }))
  } catch (e: any) {
    NotificationManager.error(e.description)
  }
})

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startConnecting: (
      state,
      action: PayloadAction<{
        accessToken: string
      }>
    ) => {
      state.isEstablishingConnection = true
    },
    connectionEstablished: (state) => {
      state.isConnected = true
      state.isEstablishingConnection = false
    },
    createNewConsultation: (
      state,
      action: PayloadAction<{
        userId: string
        type: ConsultationType
      }>
    ) => {},
    leaveConsultation: () => {},
    getConsultations: () => {},
    setConsultations: (
      state,
      action: PayloadAction<{
        consultations: Consultation[]
      }>
    ) => {
      state.openConsultations = action.payload.consultations
    },
    setLastClosedConsultation: (state, action: PayloadAction<Consultation>) => {
      state.closedConsultations = [action.payload, ...state.closedConsultations]
    },
    setClosedConsultations: (state, action: PayloadAction<Consultation[]>) => {
      state.closedConsultations = action.payload
    },
    joinConsultation: (
      state,
      action: PayloadAction<{
        userId: string
        consultation: Consultation
      }>
    ) => {
      state.activeConsultation = action.payload.consultation
    },
    setActiveConsultation: (
      state,
      action: PayloadAction<Consultation | null>
    ) => {
      state.activeConsultation = action.payload
    },
    closeConsultation: (
      state,
      action: PayloadAction<{
        consultationId: number
      }>
    ) => {},
    sendMessage: (
      state,
      action: PayloadAction<{
        message: string
        consultationId: number
        userId: number
        attachments: any[]
      }>
    ) => {},
    setMessages: (
      state,
      action: PayloadAction<{
        messages: Message[]
      }>
    ) => {
      state.messages = action.payload.messages
    },
    setMessage: (
      state,
      action: PayloadAction<{
        message: Message
      }>
    ) => {
      state.messages.push(action.payload.message)
    },
  },
})

export const chatActions = chatSlice.actions

export default chatSlice.reducer
