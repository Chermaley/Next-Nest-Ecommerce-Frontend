import React from 'react'
import { Product } from '../../services/models'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useAddProductToBasketMutation } from '../../services/BasketService'

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const session = useSession()
  const user = session.data?.user
  const [addProductToBasket] = useAddProductToBasketMutation()

  const addToCart = () => {
    addProductToBasket({
      productId: product.id,
      price: product.price,
      name: product.name,
      quantity: 1,
    })
  }

  console.log(process.env)

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          fill
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/${product.image1}`}
          src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image1}`}
          alt={product.description}
        />
      </div>
      <div className={styles.product__info}>
        <Link href={`/catalog/${product.id}`}>
          <p className={styles.product__name}>{product.name}</p>
        </Link>
        <div className={styles.product__bottom}>
          <p className={styles.product__price}>{product.price} ₽</p>
          {user && (
            <Image
              onClick={addToCart}
              src={'/basketIcon.svg'}
              width={30}
              height={30}
              alt="basket"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
