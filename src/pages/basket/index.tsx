import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import classes from './Basket.module.scss'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { WithAuth } from '../../hoc'
import {
  fetchBasket,
  useCreateOrderMutation,
} from '../../services/BasketService'
import { NotificationType } from '../../store/reducers/notificationSlice'
import useNotification from '../../hooks/useNotification'
import { BasketProductList } from '../../components/BasketProductList'

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
      <div className={classes.basket}>
        <WithAuth>
          {data?.products && data?.products.length ? (
            <>
              <BasketProductList products={data.products} />
              <Button
                onClick={onCreateOrder}
                className={classes.basket__button}
                title="Оформить заказ"
              />
            </>
          ) : (
            <div className={classes.basket__empty}>Корзина пуста</div>
          )}
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Index
