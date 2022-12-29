import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from 'react'
import { io, Socket } from 'socket.io-client'
import { Consultation, Message } from '../src/services/models'
import { useSession } from 'next-auth/react'

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

const initialState = {
  accessToken: null as string | null,
  openConsultations: [] as Consultation[],
  closedConsultations: [] as Consultation[],
  messages: [] as Message[],
  activeConsultation: null as Consultation | null,
  isEstablishingConnection: false,
  isConnected: false,
  isLoading: false,
  joinConsultation: (params: {
    userId: string
    consultation: Consultation
  }) => {},
  leaveConsultation: () => {},
  createNewConsultation: (params: { creatorId: string; type: string }) => {},
}

type State = typeof initialState

function useWebsocketStoreData(): {
  get: () => State
  set: (value: Partial<State>) => void
  subscribe: (callback: () => void) => () => void
} {
  const store = useRef<State>(initialState)

  const get = useCallback(() => store.current, [])

  const subscribers = useRef(new Set<() => void>())

  const set = useCallback((value: Partial<State>) => {
    store.current = { ...store.current, ...value }
    subscribers.current.forEach((callback) => callback())
  }, [])

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback)
    return () => subscribers.current.delete(callback)
  }, [])

  return {
    get,
    set,
    subscribe,
  }
}

type UseWebsocketDataReturnType = ReturnType<typeof useWebsocketStoreData>

const WebsocketContext = createContext<UseWebsocketDataReturnType | null>(null)

export const WebsocketProvider = ({ children }: PropsWithChildren) => {
  const store = useWebsocketStoreData()
  const session = useSession()
  const accessToken = session?.data?.user.accessToken
  const { isConnected } = store.get()
  const ws = useRef<Socket>()

  useEffect(() => {
    if (accessToken && !isConnected) {
      ws.current = io(`${process.env.NEXT_PUBLIC_WS_URL}/chat`, {
        path: '/socket.io',
        auth: {
          token: accessToken,
        },
        transports: ['websocket'],
      })

      ws.current.on('connect', () => {
        console.log('connected to chat ws')
        store.set({ isConnected: true })
      })

      ws.current.on(
        ChatEvent.Consultations,
        (consultations: Consultation[]) => {
          console.log(consultations)
          store.set({ closedConsultations: consultations })
        }
      )

      ws.current.on(ChatEvent.Messages, (messages: Message[]) => {
        store.set({ messages })
      })

      ws.current.on(
        ChatEvent.ActiveConsultation,
        (consultation: Consultation) => {
          console.log(consultation)
          const openConsultations = store.get().openConsultations
          store.set({
            openConsultations: [...openConsultations, consultation],
          })
        }
      )

      ws.current.on(ChatEvent.NewMessage, (message: Message) => {
        store.set({ messages: [...store.get().messages, message] })
      })

      // ws.current.on(ChatEvent.NewMessageInConversation, (message: Message) => {
      //   store.dispatch(
      //     notificationActions.show({
      //       type: NotificationType.Success,
      //       text: 'Новое сообщение по консультации',
      //     })
      //   )
      // })
      //
      // ws.current.on(ChatEvent.ConsultationClosed, (consultation: Consultation) => {
      //   store.dispatch(chatActions.setActiveConsultation(null))
      //   dispatch(
      //     modifyConsultations('open', (consultations) => consultations.pop())
      //   )
      //   dispatch(
      //     modifyConsultations('closed', (consultations) =>
      //       consultations.unshift(consultation)
      //     )
      //   )
      // })

      store.set({
        joinConsultation: (params) => {
          ws.current?.emit(ChatEvent.JoinConsultation, {
            userId: params.userId,
            consultationId: params.consultation.id,
          })
          store.set({ activeConsultation: params.consultation })
        },
      })

      store.set({
        createNewConsultation: (params) => {
          ws.current?.emit(ChatEvent.CreateConsultation, params)
        },
      })

      const wsCurrent = ws.current

      return () => {
        wsCurrent?.close()
      }
    }
  }, [store, isConnected, accessToken])

  return (
    <WebsocketContext.Provider value={store}>
      {children}
    </WebsocketContext.Provider>
  )
}

export function useWebsocketStore(): [State, (value: Partial<State>) => void] {
  const store = useContext(WebsocketContext)
  if (!store) {
    throw new Error('Store not found')
  }

  const state = useSyncExternalStore(store.subscribe, store.get, store.get)

  return [state, store.set]
}
