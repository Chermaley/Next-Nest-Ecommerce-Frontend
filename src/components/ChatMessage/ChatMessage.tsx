import React from 'react'
import { Message } from '../../services/models'
import styles from './Chat.module.scss'
import clsx from 'clsx'
import Gallery from 'react-grid-gallery'

type MessageProps = {
  message: Message
  currentUserId: number
}

const ChatMessage: React.FC<MessageProps> = ({ message, currentUserId }) => {
  const isAuthor = currentUserId === message.userId
  return (
    <div
      className={clsx(styles.message, {
        [styles.messageLeft]: isAuthor,
        [styles.messageRight]: !isAuthor,
      })}
      key={message.id}
    >
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: message.message }}
          />
        </div>
        {message.attachments && (
          <div className={styles.images}>
            <Gallery
              showCloseButton={false}
              backdropClosesModal
              tileViewportStyle={() => ({
                maxWidth: 350,
              })}
              images={message.attachments.map((item) => ({
                src: item.content,
                thumbnail: item.content,
                thumbnailWidth: 200,
                thumbnailHeight: 300,
              }))}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatMessage
