import React, { useEffect } from 'react'
import { ChatMessage } from '../ChatMessage'
import { ChatInput } from '../ChatInput'
import { useChatScroll } from '../../hooks/useChatScroll'
import { ChatFile } from '../ChatInput/ChatInput'
import { useSession } from 'next-auth/react'
import styles from './Chat.module.scss'
import { trpc } from '../../utils/trpc'
import { Consultation, ConsultationStatus } from '@prisma/client'

const Chat: React.FC<{
  activeConsultation: Consultation
  onClose: () => void
}> = ({ activeConsultation, onClose }) => {
  const scrollRef = useChatScroll([])
  const session = useSession()
  const user = session.data?.user
  const utils = trpc.useContext()
  const { data: messages } = trpc.chat.getMessages.useQuery({
    consultationId: activeConsultation?.id ?? '',
  })
  const { mutate: joinConsultation } = trpc.chat.joinConsultation.useMutation()
  const { mutate: leaveConsultation } =
    trpc.chat.leaveConsultation.useMutation()
  const { mutateAsync: sendMessage } = trpc.chat.sendMessage.useMutation()

  trpc.chat.onMessage.useSubscription(undefined, {
    onData: () => utils.chat.getMessages.invalidate(),
    onError(err) {
      console.error('Subscription error:', err)
      // we might have missed a message - invalidate cache
    },
  })

  useEffect(
    () => () => {
      leaveConsultation({
        consultationId: activeConsultation?.id ?? '',
      })
    },
    [joinConsultation, leaveConsultation, activeConsultation, user]
  )

  const onSendMessage = (text: string, files: ChatFile[]) => {
    if (user && activeConsultation) {
      sendMessage({
        consultationId: activeConsultation.id,
        text: text,
      })
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.chat__close} onClick={onClose}>
        &#x2716;
      </div>
      <div className={styles.chat__content}>
        <div className={styles.chat__messages} ref={scrollRef}>
          {user && messages?.length
            ? messages.map((message) => (
                <ChatMessage
                  currentUserId={user.id}
                  message={message}
                  key={message.id}
                />
              ))
            : null}
        </div>
        {activeConsultation?.status === ConsultationStatus.OPEN ? (
          <ChatInput onInputFormSubmit={onSendMessage} />
        ) : null}
      </div>
    </div>
  )
}

export default Chat
