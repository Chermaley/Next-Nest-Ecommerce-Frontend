import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'
import styles from './Order.module.scss'
import { PageTitle } from '../../components/PageTitle'
import { BasketProductList } from '../../components/BasketProductList'
import { trpc } from '../../utils/trpc'

const OrderPage = () => {
  const router = useRouter()
  const id = router.query.id
  const { data: order } = trpc.order.getOrder.useQuery({ id: id as string })
  return (
    <MainLayout title={`Заказ ${order?.id}`}>
      <PageTitle onBack={router.back}>Заказ {order?.id}</PageTitle>
      <div className={styles.order}>
        {order?.products ? (
          <BasketProductList readonly products={order.products} />
        ) : null}
      </div>
    </MainLayout>
  )
}

export default OrderPage
