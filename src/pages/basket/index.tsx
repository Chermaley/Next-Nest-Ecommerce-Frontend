import React from 'react'
import { BasketProduct } from '../../services/models'
import MainLayout from '../../layouts/MainLayout'
import classes from './Basket.module.scss'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { WithAuth } from '../../hoc'
import {
  fetchBasket,
  useCreateOrderMutation,
  useDeleteProductFromBasketMutation,
} from '../../services/BasketService'
import { NotificationType } from '../../store/reducers/notificationSlice'
import useNotification from '../../hooks/useNotification'

const Index = () => {
  const { data } = fetchBasket.useQueryState(undefined)
  const [createOrder] = useCreateOrderMutation()
  const showNotification = useNotification()

  const onCreateOrder = async () => {
    if (data?.products.length) {
      try {
        await createOrder({ basketId: data.id }).unwrap()
        showNotification({
          type: NotificationType.Success,
          text: 'Заказ успешно создан',
        })
      } catch (e) {
        showNotification({
          type: NotificationType.Error,
          text: 'Упс, что-то пошло не так',
        })
      }
    }
  }

  return (
    <MainLayout title="Корзина">
      <PageTitle>Корзина</PageTitle>
      <div className={classes.wrapper}>
        <WithAuth>
          {data?.products.length ? (
            <div className={classes.basket}>
              <ul className={classes.basket__fields}>
                <li>Название</li>
                <li>Количество</li>
                <li>Цена за 1 шт.</li>
                <li>Общая цена</li>
                <li />
              </ul>
              <div className={classes.basket__products}>
                {data?.products.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
              <div className={classes.basket__button}>
                <Button onClick={onCreateOrder} title="Оформить заказ" />
              </div>
            </div>
          ) : (
            <div className={classes.basket__empty}>Корзина пуста</div>
          )}
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Index

const Product: React.FC<{ product: BasketProduct }> = ({ product }) => {
  const [deleteProductFromBasket] = useDeleteProductFromBasketMutation()

  const onDelete = () => {
    deleteProductFromBasket({ productId: product.id })
  }

  return (
    <div className={classes.item}>
      <div>{product.name}</div>
      <div>
        <div>{product.quantity}</div>
      </div>
      <div>{product.price} ₽</div>
      <div>{product.price * product.quantity} ₽</div>
      <div onClick={onDelete} className={classes.item__delete}>
        Удалить
      </div>
    </div>
  )
}
