import { Middleware } from "redux";
import { io, Socket } from "socket.io-client";
import { chatActions } from "../reducers/chatSlice";
import { Consultation, Message, Role } from "../../api/models";
import { NotificationManager } from "react-notifications";
import config from "../../../config";

export enum ChatEvent {
  CreateConsultation = "createConsultation",
  LeaveConsultation = "leaveConsultation",
  GetAllConsultations = "getAllConsultations",
  Consultations = "consultations",
  ActiveConsultation = "activeConsultation",
  JoinConsultation = "joinConsultation",
  Messages = "messages",
  SendMessage = "sendMessage",
  NewMessage = "newMessage",
  NewConsultation = "newConsultation",
  NewMessageInConversation = "newMessageInConsultation",
  CloseConsultation = "closeConsultation",
  ConsultationClosed = "consultationClosed",
}

const chatMiddleware: Middleware = (store) => {
  let socket: Socket;

  return (next) => (action) => {
    const isConnectionEstablished =
      socket && store.getState().chat.client.isConnected;

    if (chatActions.startConnecting.match(action)) {
      socket = io(`${config.apiUrl}chat`, { withCredentials: true });

      socket.on("connect", () => {
        console.log('connected to chat ws');
        store.dispatch(chatActions.connectionEstablished());
      });

      socket.on(ChatEvent.Consultations, (consultations: Consultation[]) => {
        console.log(consultations);
        store.dispatch(chatActions.setConsultations({ consultations }));
      });

      socket.on(ChatEvent.ActiveConsultation, (consultation: Consultation) => {
        store.dispatch(chatActions.setActiveConsultation(consultation));
      });

      socket.on(ChatEvent.Messages, (messages: Message[]) => {
        store.dispatch(chatActions.setMessages({ messages }));
      });

      socket.on(ChatEvent.NewMessage, (message: Message) => {
        store.dispatch(chatActions.setMessage({ message }));
      });

      socket.on(ChatEvent.NewConsultation, (userId: string) => {
        NotificationManager.info(`Пользователь с ${userId} задал вопрос`);
      });

      socket.on(ChatEvent.NewMessageInConversation, (message: Message) => {
        NotificationManager.info(
          'Новое сообщение по консультации'
        );
      });
    }

    if (
      chatActions.createNewConsultation.match(action) &&
      isConnectionEstablished
    ) {
      socket.emit(ChatEvent.CreateConsultation, action.payload.userId);
    }

    if (chatActions.getConsultations.match(action) && isConnectionEstablished) {
      socket.emit(ChatEvent.GetAllConsultations);
    }

    if (chatActions.joinConsultation.match(action) && isConnectionEstablished) {
      socket.emit(ChatEvent.JoinConsultation, {
        userId: action.payload.userId,
        consultationId: action.payload.consultation.id,
      });
    }

    if (
      chatActions.closeConsultation.match(action) &&
      isConnectionEstablished
    ) {
      socket.emit(ChatEvent.CloseConsultation, action.payload.consultationId);
    }

    if (
      chatActions.leaveConsultation.match(action) &&
      isConnectionEstablished
    ) {
      socket.emit(ChatEvent.LeaveConsultation);
    }

    if (chatActions.sendMessage.match(action) && isConnectionEstablished) {
      socket.emit(ChatEvent.SendMessage, {
        message: action.payload.message,
        userId: action.payload.userId,
        consultationId: action.payload.consultationId,
      });
    }

    next(action);
  };
};

export default chatMiddleware;
