import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import { getProduct } from '../../store/reducers/productSlice'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import config from '../../../config'
import styles from './Product.module.scss'
import Image from 'next/image'

const ProductPage = () => {
  const product = useTypedSelector((state) => state.product.currentProduct)
  return (
    <MainLayout title={product?.name ?? ''}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image
            width={500}
            height={500}
            src={`${config.apiUrl}${product?.image1}`}
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div>Название: {product?.name}</div>
          <div>Описание: {product?.description}</div>
          <div>Цена: {product?.price}</div>
          <h1>Комментарии</h1>
          <div>
            {product?.comments.map((comment) => (
              <div key={comment.id}>
                <div>
                  {comment.author} - {comment.text}
                </div>
              </div>
            ))}
          </div>
        </div>
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
