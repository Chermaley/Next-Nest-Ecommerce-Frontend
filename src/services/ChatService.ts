import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Consultation } from './models'
import { HYDRATE } from 'next-redux-wrapper'
import prepareHeaders from './prepareHeaders'

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

export const chatServiceAPI = createApi({
  reducerPath: 'chatAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
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
