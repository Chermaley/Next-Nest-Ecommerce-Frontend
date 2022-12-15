import React from 'react'
import { Comment } from '../../services/models'
import styles from './ProductComment.module.scss'
import moment from 'moment/moment'
import { Rating } from 'react-simple-star-rating'

const ProductComment: React.FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.comment__content}>
        <div className={styles.comment__info}>
          <p className={styles.comment__name}>{comment.author}</p>
          <p className={styles.comment__date}>
            {moment(comment.createdAt).fromNow()}
          </p>
        </div>
        <p className={styles.comment__text}>{comment.text}</p>
      </div>

      <Rating
        size={15}
        readonly
        className={styles.comment__rating}
        initialValue={comment.rating}
      />
    </div>
  )
}

export default ProductComment
