import { Consultation, Message } from '../src/services/models'

export const initialState = {
  accessToken: null as string | null,
  openConsultations: [] as Consultation[],
  closedConsultations: [] as Consultation[],
  messages: [] as Message[],
  activeConsultation: null as Consultation | null,
  isEstablishingConnection: false,
  isConnected: false,
  isLoading: false,
}

export default function reducer(
  state = initialState,
  action: InferActionsTypes<typeof actions>
) {
  switch (action.type) {
    case 'CONNECTION_ESTABLISHED':
      return {
        ...state,
        isConnected: true,
      }
    default:
      return state
  }
}

const connectionEstablished = () =>
  ({
    type: 'CONNECTION_ESTABLISHED',
  } as const)

export const actions = {
  connectionEstablished,
}

type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U
}
  ? U
  : never
