import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { useFetchOrdersQuery } from '../../services/BasketService'
import MainLayout from '../../layouts/MainLayout'
import { WithAuth } from '../../hoc'
import styles from './Orders.module.scss'
import { PageTitle } from '../../components/PageTitle'
import Link from 'next/link'
import Image from 'next/image'
import { translateOrderStatus } from '../../utils'
import { Order } from '../../services/models'

const Index = () => {
  const skip = useTypedSelector((state) => state.auth.skip)
  const { data: orders } = useFetchOrdersQuery(undefined, {
    skip,
  })
  return (
    <MainLayout title="История заказов">
      <PageTitle>История заказов</PageTitle>
      <div className={styles.wrapper}>
        <WithAuth>
          <div className={styles.orders}>
            <ul className={styles.orders__fields}>
              <li>Номер</li>
              <li>Статус</li>
              <li>Сумма</li>
              <li className={styles.back}></li>
            </ul>
            <div className={styles.orders__list}>
              {orders?.map((order) => (
                <OrderItem key={order.id} order={order} />
              ))}
            </div>
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Index

const OrderItem: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div className={styles.order}>
      <div>Заказ N#{order.id}</div>
      <div>{translateOrderStatus(order.status)}</div>
      <div>{order.amount}</div>
      <Link href={`/orders/${order.id}`}>
        <Image
          className={styles.back}
          src={'/rightIcon.svg'}
          alt="right"
          width={16}
          height={16}
        />
      </Link>
    </div>
  )
}
