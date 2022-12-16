import React from 'react'
import { Message } from '../../services/models'
import styles from './Chat.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

type MessageProps = {
  message: Message
  currentUserId: number
}

const ChatMessage: React.FC<MessageProps> = ({ message, currentUserId }) => {
  const isAuthor = currentUserId === message.userId
  return (
    <div
      className={clsx(styles.message, {
        [styles.message__messageLeft]: isAuthor,
        [styles.message__messageRight]: !isAuthor,
      })}
      key={message.id}
    >
      <div className={styles.message__content}>
        <div className={styles.message__textWrapper}>
          <div
            className={styles.message__text}
            dangerouslySetInnerHTML={{ __html: message.message }}
          />
        </div>
        {message.attachments ? (
          <div className={styles.message__images}>
            {message.attachments.map((item) => (
              <Image
                key={item.id}
                src={item.content}
                width={300}
                height={200}
                alt={item.name}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ChatMessage
