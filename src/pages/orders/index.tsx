import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { useGetOrdersQuery } from '../../services/BasketService'
import MainLayout from '../../layouts/MainLayout'
import { WithAuth } from '../../hoc'
import styles from './Orders.module.scss'
import clsx from 'clsx'
import { PageTitle } from '../../components/PageTitle'

const Index = () => {
  const skip = useTypedSelector((state) => state.auth.skip)
  const { data: orders } = useGetOrdersQuery(undefined, {
    skip,
  })

  return (
    <MainLayout title="История заказов">
      <PageTitle>История заказов</PageTitle>
      <WithAuth>
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <thead>
              <tr className={clsx(styles.table__row, styles.table__row_head)}>
                <th>Номер</th>
                <th className="font-weight-bold py-2 border-0 quantity">
                  Статус
                </th>
                <th className="font-weight-bold py-2 border-0 ">Сумма</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr className={styles.table__row} key={order.id}>
                  <td className={styles.table__column}>Заказ N#{order.id}</td>
                  <td className={styles.table__column}>{order.status}</td>
                  <td className={styles.table__column}>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </WithAuth>
    </MainLayout>
  )
}

export default Index
