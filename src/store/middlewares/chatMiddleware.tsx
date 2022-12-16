import { Middleware } from 'redux'
import { io, Socket } from 'socket.io-client'
import { chatActions } from '../reducers/chatSlice'
import { Consultation, Message } from '../../services/models'
import { modifyConsultations } from '../../services/ChatService'
import { AppDispatch } from '../store'
import {
  notificationActions,
  NotificationType,
} from '../reducers/notificationSlice'

export enum ChatEvent {
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

const chatMiddleware: Middleware = (store) => {
  let socket: Socket

  return (next) => (action) => {
    const dispatch = store.dispatch as AppDispatch
    const isConnectionEstablished = socket && store.getState().chat.isConnected

    if (chatActions.startConnecting.match(action)) {
      socket = io(`${process.env.NEXT_PUBLIC_WS_URL}/chat`, {
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
        dispatch(modifyConsultations('open', (prev) => (prev = consultations)))
      })

      socket.on(ChatEvent.Messages, (messages: Message[]) => {
        store.dispatch(chatActions.setMessages({ messages }))
      })

      socket.on(ChatEvent.ActiveConsultation, (consultation: Consultation) => {
        dispatch(
          modifyConsultations('open', (consultations) =>
            consultations.push(consultation)
          )
        )
      })

      socket.on(ChatEvent.NewMessage, (message: Message) => {
        store.dispatch(chatActions.setMessage({ message }))
      })

      socket.on(ChatEvent.NewMessageInConversation, (message: Message) => {
        store.dispatch(
          notificationActions.show({
            type: NotificationType.Success,
            text: 'Новое сообщение по консультации',
          })
        )
      })

      socket.on(ChatEvent.ConsultationClosed, (consultation: Consultation) => {
        store.dispatch(chatActions.setActiveConsultation(null))
        dispatch(
          modifyConsultations('open', (consultations) => consultations.pop())
        )
        dispatch(
          modifyConsultations('closed', (consultations) =>
            consultations.unshift(consultation)
          )
        )
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
