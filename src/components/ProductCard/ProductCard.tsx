import React from 'react'
import { Product } from '../../services/models'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addProductToBasket } from '../../store/reducers/basketSlice'
import styles from './ProductCard.module.scss'
import config from '../../../config/config'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user

  const addToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
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

  return (
    <Link href={`/catalog/${product.id}`}>
      <div className={styles.product}>
        <div className={styles.top}>
          <Image
            layout="fill"
            src={`${config.apiUrl}/${product.image1}`}
            alt={product.description}
          />
        </div>
        <div className={styles.bottom}>
          <div className={styles.info}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price} рублей</p>
          </div>
          {user && (
            <button onClick={addToCart} className={styles.add}>
              Добавить в корзину
            </button>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
