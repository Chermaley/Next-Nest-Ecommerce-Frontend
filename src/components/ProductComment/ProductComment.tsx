import React from 'react'
import { Comment } from '../../services/models'
import styles from './ProductComment.module.scss'
import moment from 'moment/moment'

const ProductComment: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.info}>
        <p className={styles.name}>{comment.author}</p>
        <p className={styles.date}>{moment(comment.createdAt).fromNow()}</p>
      </div>
      <p className={styles.text}>{comment.text}</p>
    </div>
  )
}

export default ProductComment
