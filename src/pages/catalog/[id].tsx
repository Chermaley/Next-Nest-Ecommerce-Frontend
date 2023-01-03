import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import styles from './Product.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Button from '../../components/Button/Button'
import { ProductComment } from '../../components/ProductComment'
import { useRouter } from 'next/router'
import { Input } from '../../components/Input'
import { Rating } from 'react-simple-star-rating'
import { Carousel } from 'react-responsive-carousel'
import { trpc } from '../../utils/trpc'
import { ProductComment as Comment } from '@prisma/client'

const ProductPage = () => {
  const session = useSession()
  const router = useRouter()
  const user = session.data?.user
  const productId = router.query.id as string
  const utils = trpc.useContext()
  const { data: product } = trpc.products.getProduct.useQuery({
    productId,
  })
  const { data: productComments } = trpc.products.getProductComments.useQuery({
    productId,
  })
  const { mutate: addToBasket } = trpc.basket.addToBasket.useMutation({
    onSuccess: () => utils.basket.invalidate(),
  })

  const images = [product?.image]

  const addToCart = () => {
    if (product) {
      addToBasket({
        productId: product.id,
        quantity: 1,
      })
    }
  }

  return (
    <MainLayout title={product?.name ?? ''}>
      <div className={styles.product}>
        <div className={styles.product__top}>
          <div className={styles.product__left}>
            <Carousel
              emulateTouch
              swipeable
              showThumbs={false}
              showArrows={false}
            >
              {images.map((image) => (
                <div key={image} className={styles.product__image}>
                  <Image
                    key={image}
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
                    alt={product?.name ?? 'Продукт'}
                    fill
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.product__right}>
            <div className={styles.product__info}>
              <div className={styles.product__header}>
                <h1 className={styles.product__title}>{product?.name}</h1>
                <Rating size={25} readonly initialValue={product?.rating} />
              </div>
              <div className={styles.description}>{product?.description}</div>
            </div>
            <div className={styles.product__actions}>
              <div className={styles.product__price}>{product?.price} ₽</div>
              {user && (
                <Button title="Добавить в корзину" onClick={addToCart} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.product__reviews}>
          {productComments ? (
            <CommentSection productId={productId} comments={productComments} />
          ) : null}
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductPage

const CommentSection: React.FC<{
  productId: string
  comments: Comment[]
}> = ({ comments, productId }) => {
  const [text, setText] = React.useState('')
  const [rating, setRating] = React.useState(0)
  const utils = trpc.useContext()

  const { mutate: leaveComment } = trpc.products.leaveComment.useMutation({
    onSuccess: () =>
      utils.products.getProductComments.invalidate({ productId }),
  })

  const onLeaveCommentButtonClick = () => {
    leaveComment({ productId, text, rating })
    setText('')
    setRating(0)
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
