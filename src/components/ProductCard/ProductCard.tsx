import React from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Product } from '@prisma/client'
import { trpc } from '../../utils/trpc'

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const session = useSession()
  const user = session.data?.user
  const utils = trpc.useContext()

  const { mutate: addToBasket } = trpc.basket.addToBasket.useMutation({
    onSuccess: () => utils.basket.invalidate(),
  })

  const addToCart = () => {
    addToBasket({
      productId: product.id,
      quantity: 1,
    })
  }

  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image
          fill
          placeholder="blur"
          blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/${product.image}`}
          src={`${process.env.NEXT_PUBLIC_API_URL}/${product.image}`}
          alt={product.description}
        />
      </div>
      <div className={styles.product__info}>
        <Link href={`/catalog/${product.id}`}>
          <p className={styles.product__name}>{product.name}</p>
        </Link>
        <div className={styles.product__bottom}>
          <p className={styles.product__price}>{product.price} ₽</p>
          {user ? (
            <Image
              onClick={addToCart}
              src={'/basketIcon.svg'}
              width={30}
              height={30}
              alt="basket"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
