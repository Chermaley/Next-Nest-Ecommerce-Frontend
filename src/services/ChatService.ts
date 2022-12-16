import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Consultation, Message, Product, ProductType } from './models'
import config from '../../config'
import { HYDRATE } from 'next-redux-wrapper'
import { AppDispatch, AppState } from '../store/store'
import prepareHeaders from './prepareHeaders'
import { io, Socket } from 'socket.io-client'
import { chatActions } from '../store/reducers/chatSlice'

enum ChatEvent {
  CreateConsultation = 'createConsultation',
  LeaveConsultation = 'leaveConsultation',
  Consultations = 'consultations',
  ActiveConsultation = 'activeConsultation',
  JoinConsultation = 'joinConsultation',
  Messages = 'messages',
  SendMessage = 'sendMessage',
  NewMessage = 'newMessage',
  NewConsultation = 'newConsultation',
  NewMessageInConversation = 'newMessageInConsultation',
  ConsultationClosed = 'consultationClosed',
}

let socket: Socket
function getSocket() {
  if (!socket) {
    socket = io(config.wsUrl, {
      withCredentials: true,
    })
  }
  return socket
}

export const chatServiceAPI = createApi({
  reducerPath: 'chatAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
    prepareHeaders,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    fetchClosedConsultations: build.query<Consultation[], void>({
      query: () => ({
        url: `/chat/closedConsultations`,
        params: {
          pageSize: 10,
          page: 0,
        },
      }),
    }),
    fetchOpenConsultations: build.query<Consultation[], void>({
      query: () => ({
        url: `/chat/openConsultation/`,
      }),
    }),
  }),
})

export const {
  useFetchClosedConsultationsQuery,
  useFetchOpenConsultationsQuery,
} = chatServiceAPI

export const modifyConsultations = (
  type: 'open' | 'closed',
  map: (consultations: Consultation[]) => any
) =>
  chatServiceAPI.util.updateQueryData(
    type === 'open' ? 'fetchOpenConsultations' : 'fetchClosedConsultations',
    undefined,
    (data) => {
      map(data)
    }
  )
