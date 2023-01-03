import React from 'react'
import classes from './BasketProductList.module.scss'
import { trpc } from '../../utils/trpc'
import { BasketProduct } from '@prisma/client'

const BasketProductList: React.FC<{
  products: BasketProduct[]
  readonly?: boolean
}> = ({ products, readonly }) => {
  return (
    <div className={classes.basketProductList}>
      <ul className={classes.basketProductList__fields}>
        <li>Название</li>
        <li>Количество</li>
        <li>Цена за 1 шт.</li>
        <li>Общая цена</li>
        {!readonly ? <li /> : null}
      </ul>
      <div className={classes.basketProductList__products}>
        {products.map((product) => (
          <Product readonly={readonly} key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default BasketProductList

const Product: React.FC<{ product: BasketProduct; readonly?: boolean }> = ({
  product,
  readonly,
}) => {
  const utils = trpc.useContext()
  const { mutate: removeFromBasket } = trpc.basket.removeFromBasket.useMutation(
    { onSuccess: () => utils.basket.invalidate() }
  )
  const onDelete = () => {
    removeFromBasket({ productId: product.id })
  }

  return (
    <div className={classes.product}>
      <div>{product.name}</div>
      <div>
        <div>{product.quantity}</div>
      </div>
      <div>{product.price} ₽</div>
      <div>{product.price * product.quantity} ₽</div>
      {!readonly ? (
        <div onClick={onDelete} className={classes.product__delete}>
          Удалить
        </div>
      ) : null}
    </div>
  )
}
