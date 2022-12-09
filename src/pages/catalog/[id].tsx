import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import config from '../../../config'
import styles from './Product.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Button from '../../components/Button/Button'
import { ProductComment } from '../../components/ProductComment'
import { fetchProduct } from '../../services/ProductService'
import { useRouter } from 'next/router'
import { useAddProductToBasketMutation } from '../../services/BasketService'

const ProductPage = () => {
  const session = useSession()
  const { id } = useRouter().query
  const user = session.data?.user
  const [addProductToBasket] = useAddProductToBasketMutation()
  const { data: product } = fetchProduct.useQueryState({
    productId: Number(id),
  })

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
      await store.dispatch(
        fetchProduct.initiate({ productId: Number(params?.id) })
      )
      return { props: {} }
    }
)

export default ProductPage
