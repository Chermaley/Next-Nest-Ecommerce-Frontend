import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import { getProduct } from '../../store/reducers/productSlice'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import config from '../../../config'
import styles from './Product.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { addProductToBasket } from '../../store/reducers/basketSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import Button from '../../components/Button/Button'
import { ProductComment } from '../../components/ProductComment'

const ProductPage = () => {
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user
  const product = useTypedSelector((state) => state.product.currentProduct)

  const addToCart = () => {
    if (product) {
      dispatch(
        addProductToBasket({
          productId: product.id,
          price: product.price,
          name: product.name,
          accessToken: user?.accessToken,
          quantity: 1,
        })
      )
    }
  }

  return (
    <MainLayout title={product?.name ?? ''}>
      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.image}>
            <Image
              src={`${config.apiUrl}${product?.image1}`}
              priority
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h1 className={styles.title}>{product?.name}</h1>
            <div className={styles.description}>{product?.description}</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.price}>{product?.price} ₽</div>
            {user && <Button title="Добавить в корзину" onClick={addToCart} />}
          </div>
        </div>
      </div>

      <div className={styles.reviews}>
        <h2 className={styles.title}>Комментарии</h2>
        {product?.comments.map((comment) => (
          <ProductComment key={comment.id} comment={comment} />
        ))}
      </div>
    </MainLayout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(getProduct({ productId: Number(params?.id) }))
      return { props: {} }
    }
)

export default ProductPage
