import React from 'react'
import { GetServerSideProps } from 'next'
import { wrapper } from '../../store/store'
import {
  createOrder,
  deleteProductFromBasket,
  getBasket,
} from '../../store/reducers/basketSlice'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { BasketProduct } from '../../services/models'
import MainLayout from '../../layouts/MainLayout'
import classes from './Basket.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { getSession, useSession } from 'next-auth/react'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { WithAuth } from '../../hoc'

const Index = () => {
  const dispatch = useAppDispatch()
  const basket = useTypedSelector((state) => state.basket.basket)

  const onOrder = () => {
    dispatch(createOrder())
  }

  return (
    <MainLayout title="Корзина">
      <PageTitle>Корзина</PageTitle>
      <div className={classes.wrapper}>
        <WithAuth>
          <ul className={classes.fields}>
            <li>Название</li>
            <li>Количество</li>
            <li>Цена за 1 шт.</li>
            <li>Общая цена</li>
            <li />
          </ul>
          <div className={classes.products}>
            {basket?.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>

          <div className={classes.button}>
            <Button onClick={onOrder} title="Оформить заказ" />
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const session = await getSession({ req: ctx.req })
    await store.dispatch(getBasket({ accessToken: session?.user.accessToken }))
    return { props: {} }
  })

export default Index

const Product: React.FC<{ product: BasketProduct }> = ({ product }) => {
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user
  const accessToken = user?.accessToken
  const onDelete = () => {
    if (accessToken) {
      dispatch(deleteProductFromBasket({ productId: product.id, accessToken }))
    }
  }
  return (
    <div className={classes.item}>
      <div>{product.name}</div>
      <div>
        <div>{product.quantity}</div>
      </div>
      <div>{product.price} ₽</div>
      <div>{product.price * product.quantity} ₽</div>
      <div onClick={onDelete} className={classes.delete}>
        Удалить
      </div>
    </div>
  )
}
