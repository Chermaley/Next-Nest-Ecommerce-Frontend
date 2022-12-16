import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { useRouter } from 'next/router'
import { useFetchOrderQuery } from '../../services/BasketService'
import styles from './Order.module.scss'
import { PageTitle } from '../../components/PageTitle'
import { BasketProductList } from '../../components/BasketProductList'

const OrderPage = () => {
  const router = useRouter()
  const id = router.query.id
  const { data } = useFetchOrderQuery({ id: Number(id) })
  return (
    <MainLayout title={`Заказ ${data?.id}`}>
      <PageTitle onBack={router.back}>Заказ {data?.id}</PageTitle>
      <div className={styles.order}>
        {data?.products && (
          <BasketProductList readonly products={data.products} />
        )}
      </div>
    </MainLayout>
  )
}

export default OrderPage
