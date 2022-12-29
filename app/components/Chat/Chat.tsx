'use client'

import React, { useEffect } from 'react'
import { ChatMessage } from '../ChatMessage'
import { ChatInput } from '../ChatInput'

import { ChatFile } from '../ChatInput/ChatInput'
import styles from './Chat.module.scss'
import { useSession } from 'next-auth/react'
import { useWebsocketStore } from '../../../websocket/WebsocketContextProvider'
import { useChatScroll } from '../../../src/hooks/useChatScroll'
import { ConsultationStatus } from '../../../src/services/models'

const Chat: React.FC = () => {
  const [websocketStore] = useWebsocketStore()
  const {
    activeConsultation,
    closedConsultations,
    openConsultations,
    messages,
    isConnected,
    isEstablishingConnection,
    isLoading,
    joinConsultation,
    leaveConsultation,
  } = websocketStore
  const scrollRef = useChatScroll(messages)
  const session = useSession()
  const user = session.data?.user

  const closeChat = () => {
    // dispatch(chatActions.setActiveConsultation(null))
  }

  useEffect(() => {
    if (activeConsultation && user) {
      joinConsultation({
        consultation: activeConsultation,
        userId: user.id,
      })
    }
    return () => {
      leaveConsultation()
    }
  }, [leaveConsultation, joinConsultation, activeConsultation, user])

  const sendMessage = (text: string, files: ChatFile[]) => {
    // if (user && activeConsultation) {
    //   dispatch(
    //     chatActions.sendMessage({
    //       userId: Number(user.id),
    //       consultationId: activeConsultation.id,
    //       message: text,
    //       attachments: files,
    //     })
    //   )
    // }
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
        {activeConsultation?.status === ConsultationStatus.Open ? (
          <ChatInput onInputFormSubmit={sendMessage} />
        ) : null}
      </div>
    </div>
  )
}

export default Chat
