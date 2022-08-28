import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Consultation, Message } from "../../api/models";
import { NotificationManager } from "react-notifications";
import ChatService from "../../api/ChatService";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  server: {
    openConsultations: [] as Consultation[],
    closedConsultations: [] as Consultation[],
  },
  client: {
    activeConsultation: null as Consultation | null,
    messages: [] as Message[],
    isEstablishingConnection: false,
    isConnected: false,
  },
};

export const getClosedConsultations = createAsyncThunk<
  void,
  { accessToken: string }
>("chat/getClosedConsultations", async (params, { dispatch }) => {
  try {
    const { data } = await ChatService.getClosedConsultations(params);
    dispatch(chatActions.setClosedConsultations(data));
  } catch (e: any) {
    NotificationManager.error(e.description);
  }
});

export const getOpenConsultation = createAsyncThunk<
  void,
  { accessToken: string }
>("chat/getActiveConsultation", async (params, { dispatch }) => {
  try {
    const { data } = await ChatService.getOpenConsultation(params);
    console.log(data, 'sdgfdg');
    dispatch(chatActions.setConsultations({ consultations: data }));
  } catch (e: any) {
    NotificationManager.error(e.description);
  }
});

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    startConnecting: (state) => {
      state.client.isEstablishingConnection = true;
    },
    connectionEstablished: (state) => {
      state.client.isConnected = true;
      state.client.isEstablishingConnection = true;
    },
    createNewConsultation: (
      state,
      action: PayloadAction<{
        userId: number;
      }>
    ) => {},
    leaveConsultation: () => {},
    getConsultations: () => {},
    setConsultations: (
      state,
      action: PayloadAction<{
        consultations: Consultation[];
      }>
    ) => {
      state.server.openConsultations = action.payload.consultations;
    },
    setClosedConsultations: (state, action: PayloadAction<Consultation[]>) => {
      state.server.closedConsultations = action.payload;
    },
    joinConsultation: (
      state,
      action: PayloadAction<{
        userId: number;
        consultation: Consultation;
      }>
    ) => {
      state.client.activeConsultation = action.payload.consultation;
    },
    setActiveConsultation: (state, action: PayloadAction<Consultation | null>) => {
      state.client.activeConsultation = action.payload;
    },
    closeConsultation: (
      state,
      action: PayloadAction<{
        consultationId: number;
      }>
    ) => {},
    sendMessage: (
      state,
      action: PayloadAction<{
        message: string;
        consultationId: number;
        userId: number;
      }>
    ) => {},
    setMessages: (
      state,
      action: PayloadAction<{
        messages: Message[];
      }>
    ) => {
      state.client.messages = action.payload.messages;
    },
    setMessage: (
      state,
      action: PayloadAction<{
        message: Message;
      }>
    ) => {
      state.client.messages.push(action.payload.message);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.chat.server,
        },
      };
    },
  },
});

export const chatActions = chatSlice.actions;

export default chatSlice.reducer;
