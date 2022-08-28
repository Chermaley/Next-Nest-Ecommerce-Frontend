import React, { useEffect } from "react";
import { chatActions } from "../../../store/reducers/chatSlice";
import { ChatMessage } from "../../../components/ChatMessage";
import { ChatInput } from "../../../components/ChatInput";
import { useChatScroll } from "../../../hooks/useChatScroll";
import { useTypedSelector } from "../../../hooks/useTypedSelectors";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import styles from "./Chat.module.scss";
import { RoleValue } from "../../../api/models";

const Chat = () => {
  const dispatch = useAppDispatch();
  const messages = useTypedSelector((state) => state.chat.client.messages);
  const scrollRef = useChatScroll(messages);
  const user = useTypedSelector((state) => state.user.user);
  const activeConsultation = useTypedSelector(
    (state) => state.chat.client.activeConsultation
  );

  useEffect(() => {
    if (activeConsultation && user) {
      dispatch(
        chatActions.joinConsultation({
          consultation: activeConsultation,
          userId: user.id,
        })
      );
    }

    return () => {
      console.log('clear');
      dispatch(chatActions.setActiveConsultation(null));
      dispatch(chatActions.leaveConsultation());
    };
  }, [dispatch, user, activeConsultation]);

  const sendMessage = (text: string) => {
    if (user && activeConsultation) {
      dispatch(
        chatActions.sendMessage({
          userId: user.id,
          consultationId: activeConsultation.id,
          message: text,
        })
      );
    }
  };

  return (
    user &&
    activeConsultation && (
      <div className={styles.chat}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTitle}>
              Консультация с кометологом
            </div>
            {/*<div className='chat-header__info'>Договор № {currentDialog?.contract_number}</div>*/}
            {/*<div className='chat-header__info'>{currentDialog?.client.fio}</div>*/}
          </div>

          <div className={styles.headerBottom}>
            <div
            //    className={`panel-title chat-header__status
            // ${chatStatus === ChatStatus.Online && 'online'} ${chatStatus === ChatStatus.Offline && 'offline'} `}
            >
              {/*{chatStatus === ChatStatus.Typing && 'Абонент печатает'}*/}
              {/*{chatStatus === ChatStatus.Online && 'Абонент в сети'}*/}
              {/*{chatStatus === ChatStatus.Offline && 'Абонент не в сети'}*/}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.messages} ref={scrollRef}>
            {messages.length
              ? messages.map((message) => (
                  <ChatMessage
                    currentUserId={user.id}
                    message={message}
                    key={message.id}
                  />
                ))
              : null}
          </div>
          <ChatInput
            onInputFocus={() => {}}
            onInputFormSubmit={sendMessage}
            onTyping={() => {}}
          />
        </div>
      </div>
    )
  );
};

export default Chat;
