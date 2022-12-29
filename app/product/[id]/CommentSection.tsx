'use client'

import React from 'react'
import styles from './Product.module.scss'
import { Rating } from 'react-simple-star-rating'
import { ProductComment } from '../../components/ProductComment'
import Button from '../../components/Button/Button'
import { Input } from '../../components/Input'
import { Comment } from '../../../src/services/models'
import { leaveComment } from './api'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

const CommentSection: React.FC<{ productId: number; comments: Comment[] }> = ({
  comments,
  productId,
}) => {
  const session = useSession()
  const accessToken = session?.data?.user.accessToken
  const router = useRouter()
  const [text, setText] = React.useState('')
  const [rating, setRating] = React.useState(0)

  const onLeaveCommentButtonClick = async () => {
    await leaveComment({ productId, accessToken, text, rating })
    setText('')
    setRating(0)
    router.refresh()
  }

  return (
    <div className={styles.reviews}>
      <h2 className={styles.reviews__title}>Комментарии</h2>
      <div className={styles.reviews__list}>
        {comments.map((comment) => (
          <ProductComment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className={styles.reviews__inputField}>
        <Input
          value={text}
          onChange={setText}
          className={styles.reviews__input}
        />
        <Rating
          initialValue={rating}
          onClick={setRating}
          className={styles.reviews__rating}
        />
        <Button title="Отправить" onClick={onLeaveCommentButtonClick} />
      </div>
    </div>
  )
}

export default CommentSection
