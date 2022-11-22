import React from 'react'
import { Product } from '../../../services/models'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { addProductToBasket } from '../../../store/reducers/basketSlice'
import styles from '../Catalog.module.scss'
import config from '../../../../config/config'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user

  const addToCart = () => {
    dispatch(
      addProductToBasket({
        productId: product.id,
        price: product.price,
        name: product.name,
        quantity: 1,
        accessToken: user?.accessToken,
      })
    )
  }

  return (
    <div className={styles.product}>
      <p>{product.name}</p>
      <Image
        width={200}
        height={200}
        src={`${config.apiUrl}/${product.image1}`}
        alt={product.description}
      />
      <p>{product.description}</p>
      <p>По цене в {product.price} рублей</p>
      <button onClick={() => router.push(`/catalog/${product.id}`)}>
        Подробнее
      </button>
      {user && <button onClick={addToCart}>Добавить в корзину</button>}
    </div>
  )
}

export default ProductItem
