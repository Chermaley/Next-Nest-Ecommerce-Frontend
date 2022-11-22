import { Middleware } from 'redux'
import { io, Socket } from 'socket.io-client'
import { chatActions } from '../reducers/chatSlice'
import { Consultation, Message } from '../../services/models'
import { NotificationManager } from 'react-notifications'
import config from '../../../config'

export enum ChatEvent {
  CreateConsultation = 'createConsultation',
  LeaveConsultation = 'leaveConsultation',
  GetAllConsultations = 'getAllConsultations',
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

const chatMiddleware: Middleware = (store) => {
  let socket: Socket

  return (next) => (action) => {
    const isConnectionEstablished = socket && store.getState().chat.isConnected

    if (chatActions.startConnecting.match(action)) {
      socket = io(`${config.wsUrl}/chat`, {
        path: '/socket.io',
        auth: {
          token: action.payload.accessToken,
        },
        transports: ['websocket'],
      })

      socket.on('connect', () => {
        console.log('connected to chat ws')
        store.dispatch(chatActions.connectionEstablished())
      })

      socket.on(ChatEvent.Consultations, (consultations: Consultation[]) => {
        store.dispatch(chatActions.setConsultations({ consultations }))
      })

      socket.on(ChatEvent.Messages, (messages: Message[]) => {
        store.dispatch(chatActions.setMessages({ messages }))
      })

      socket.on(ChatEvent.ActiveConsultation, (consultation: Consultation) => {
        store.dispatch(chatActions.setActiveConsultation(consultation))
      })

      socket.on(ChatEvent.NewMessage, (message: Message) => {
        store.dispatch(chatActions.setMessage({ message }))
      })

      socket.on(ChatEvent.NewConsultation, (userId: string) => {
        NotificationManager.info(`Пользователь с ${userId} задал вопрос`)
      })

      socket.on(ChatEvent.NewMessageInConversation, (message: Message) => {
        NotificationManager.info('Новое сообщение по консультации')
      })

      socket.on(ChatEvent.ConsultationClosed, (consultation: Consultation) => {
        store.dispatch(chatActions.setActiveConsultation(null))
        console.log(consultation)
        store.dispatch(chatActions.setLastClosedConsultation(consultation))
      })
    }

    if (
      chatActions.createNewConsultation.match(action) &&
      isConnectionEstablished
    ) {
      socket.emit(ChatEvent.CreateConsultation, {
        creatorId: action.payload.userId,
        type: action.payload.type,
      })
    }

    if (chatActions.joinConsultation.match(action) && isConnectionEstablished) {
      socket.emit(ChatEvent.JoinConsultation, {
        userId: action.payload.userId,
        consultationId: action.payload.consultation.id,
      })
    }

    if (
      chatActions.leaveConsultation.match(action) &&
      isConnectionEstablished
    ) {
      socket.emit(ChatEvent.LeaveConsultation)
    }

    if (chatActions.sendMessage.match(action) && isConnectionEstablished) {
      socket.emit(ChatEvent.SendMessage, {
        message: action.payload.message,
        userId: action.payload.userId,
        consultationId: action.payload.consultationId,
        attachments: action.payload.attachments,
      })
    }

    next(action)
  }
}

export default chatMiddleware
