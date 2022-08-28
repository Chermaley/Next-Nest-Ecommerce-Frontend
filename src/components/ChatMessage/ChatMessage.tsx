import React from "react";
import { Message } from "../../api/models";
import styles from "./Chat.module.scss";
import clsx from "clsx";

type MessageProps = {
  message: Message;
  currentUserId: number;
};

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
      </div>
      {/*<div className={styles.info}>*/}
      {/*  <div className={styles.time}>121</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ChatMessage;
