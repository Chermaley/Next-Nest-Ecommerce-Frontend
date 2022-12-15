import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import config from '../../../config'
import styles from './Product.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Button from '../../components/Button/Button'
import { ProductComment } from '../../components/ProductComment'
import {
  fetchProduct,
  useLeaveCommentMutation,
} from '../../services/ProductService'
import { useRouter } from 'next/router'
import { useAddProductToBasketMutation } from '../../services/BasketService'
import { Input } from '../../components/Input'
import { Comment } from '../../services/models'
import { Rating } from 'react-simple-star-rating'
import { Carousel } from 'react-responsive-carousel'

const ProductPage = () => {
  const session = useSession()
  const { id } = useRouter().query
  const user = session.data?.user
  const [addProductToBasket] = useAddProductToBasketMutation()
  const { data: product } = fetchProduct.useQuery({
    productId: Number(id),
  })
  const images = [product?.image1, product?.image2, product?.image3]

  const addToCart = () => {
    if (product) {
      addProductToBasket({
        productId: product.id,
        price: product.price,
        name: product.name,
        quantity: 1,
      })
    }
  }

  return (
    <MainLayout title={product?.name ?? ''}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Carousel
            emulateTouch
            swipeable
            showThumbs={false}
            showArrows={false}
          >
            {images.map((image) => (
              <div key={image} className={styles.image}>
                <Image
                  key={image}
                  src={`${config.apiUrl}/${image}`}
                  alt={product?.name ?? 'Продукт'}
                  fill
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.header}>
              <h1 className={styles.title}>{product?.name}</h1>
              <Rating size={25} readonly initialValue={product?.rating} />
            </div>
            <div className={styles.description}>{product?.description}</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.price}>{product?.price} ₽</div>
            {user && <Button title="Добавить в корзину" onClick={addToCart} />}
          </div>
        </div>
      </div>
      {product?.comments && (
        <CommentSection productId={product.id} comments={product.comments} />
      )}
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(
        fetchProduct.initiate({ productId: Number(params?.id) })
      )
      return { props: {} }
    }
)

export default ProductPage

const CommentSection: React.FC<{ productId: number; comments: Comment[] }> = ({
  comments,
  productId,
}) => {
  const [text, setText] = React.useState('')
  const [rating, setRating] = React.useState(0)
  const [leaveComment] = useLeaveCommentMutation()
  const onLeaveCommentButtonClick = () => {
    leaveComment({ productId, text, rating })
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
