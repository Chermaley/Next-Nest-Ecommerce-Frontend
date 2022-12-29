import React from 'react'
import styles from './Product.module.scss'
import Rating from './Rating'
import { getProduct } from '../../catalog/api'
import ImageCarousel from './ImageCarousel'
import CommentSection from './CommentSection'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../../../src/pages/api/auth/[...nextauth]'
import AddToCartButton from './AddToCartButton'

type PageParams = {
  params?: {
    id: number
  }
}

export default async function ProductPage({ params }: PageParams) {
  const session = await unstable_getServerSession(authOptions)
  const user = session?.user
  const product = await getProduct({ id: params?.id })
  const images = [product?.image1, product?.image2, product?.image3]

  return (
    <div className={styles.product}>
      <div className={styles.product__top}>
        <div className={styles.product__left}>
          <ImageCarousel images={images} />
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
            {user && <AddToCartButton product={product} />}
          </div>
        </div>
      </div>
      <div className={styles.product__reviews}>
        {product?.comments ? (
          <CommentSection productId={product.id} comments={product.comments} />
        ) : null}
      </div>
    </div>
  )
}
