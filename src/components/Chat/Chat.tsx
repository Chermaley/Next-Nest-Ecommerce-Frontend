import React, { useEffect } from 'react'
import { chatActions } from '../../store/reducers/chatSlice'
import { ChatMessage } from '../ChatMessage'
import { ChatInput } from '../ChatInput'
import { useChatScroll } from '../../hooks/useChatScroll'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { ChatFile } from '../ChatInput/ChatInput'
import styles from './Chat.module.scss'
import { ConsultationStatus } from '../../services/models'
import { useSession } from 'next-auth/react'

const Chat: React.FC = () => {
  const dispatch = useAppDispatch()
  const messages = useTypedSelector((state) => state.chat.messages)
  const scrollRef = useChatScroll(messages)
  const session = useSession()
  const user = session.data?.user
  const activeConsultation = useTypedSelector(
    (state) => state.chat.activeConsultation
  )

  const closeChat = () => {
    dispatch(chatActions.setActiveConsultation(null))
  }

  useEffect(() => {
    if (activeConsultation && user) {
      dispatch(
        chatActions.joinConsultation({
          consultation: activeConsultation,
          userId: user.id,
        })
      )
    }
    return () => {
      dispatch(chatActions.leaveConsultation())
    }
  }, [activeConsultation, user, dispatch])

  const sendMessage = (text: string, files: ChatFile[]) => {
    if (user && activeConsultation) {
      dispatch(
        chatActions.sendMessage({
          userId: Number(user.id),
          consultationId: activeConsultation.id,
          message: text,
          attachments: files,
        })
      )
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.chat__close} onClick={closeChat}>
        &#x2716;
      </div>
      <div className={styles.chat__content}>
        <div className={styles.chat__messages} ref={scrollRef}>
          {messages.length
            ? messages.map((message) => (
                <ChatMessage
                  currentUserId={Number(user?.id)}
                  message={message}
                  key={message.id}
                />
              ))
            : null}
        </div>
        {activeConsultation?.status === ConsultationStatus.Open && (
          <ChatInput onInputFormSubmit={sendMessage} />
        )}
      </div>
    </div>
  )
}

export default Chat
