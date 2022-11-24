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

  const addToCart = () => {
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
    <div className={styles.product}>
      <div className={styles.image}>
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={`${config.apiUrl}/${product.image1}`}
          src={`${config.apiUrl}/${product.image1}`}
          alt={product.description}
        />
      </div>
      <div className={styles.info}>
        <Link href={`/catalog/${product.id}`}>
          <p className={styles.name}>{product.name}</p>
        </Link>
        <div className={styles.bottom}>
          <p className={styles.price}>{product.price} ₽</p>
          {user && (
            <Image
              onClick={addToCart}
              src={'/basketIcon.svg'}
              width={30}
              height={30}
              className={styles.topHeaderButton}
              alt="basket"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
