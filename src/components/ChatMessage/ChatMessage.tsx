import React from "react";
import { Attachment, Message } from "../../api/models";
import styles from "./Chat.module.scss";
import clsx from "clsx";
import Gallery from "react-grid-gallery";

type MessageProps = {
  message: Message;
  currentUserId: number;
};

const ChatMessage: React.FC<MessageProps> = ({ message, currentUserId }) => {
  const isAuthor = currentUserId === message.userId;
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
          <div className={styles.images} >
            <Gallery
              showCloseButton={false}
              backdropClosesModal
              tileViewportStyle={() => ({
                maxWidth: 350
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

      {/*<Attachments attachments={message.attachments} />*/}
      {/*<div className={styles.info}>*/}
      {/*  <div className={styles.time}>121</div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ChatMessage;

type ImagesProps = {
  attachments?: Attachment[];
};

// const Attachments: React.FC<ImagesProps> = ({ attachments }) => {
//   console.log(attachments);
//   return (
//     <div className={`images`}>
//       {attachments?.map((attachment, index) => {
//         return (
//           <a href={attachment.content} target='_blank' key={attachment.content + " " + index} rel="noreferrer">
//             <img className='images__image' src={attachment.content} alt=''/>
//           </a>
//         );
//       })}
//     </div>
//   );
// };
