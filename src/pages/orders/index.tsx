import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { useFetchOrdersQuery } from '../../services/BasketService'
import MainLayout from '../../layouts/MainLayout'
import { WithAuth } from '../../hoc'
import styles from './Orders.module.scss'
import clsx from 'clsx'
import { PageTitle } from '../../components/PageTitle'
import Link from 'next/link'
import Image from 'next/image'
import { OrderStatus } from '../../services/models'

const translateStatus = (status: OrderStatus) => {
  switch (status) {
    case OrderStatus.Confirmed:
      return 'Подтвержденный'
    case OrderStatus.Delivered:
      return 'Доставленный'
    case OrderStatus.Pending:
      return 'Ожидает подтверждения'
    case OrderStatus.Rejected:
      return 'Отклоненный'
  }
}

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
                  <td className={styles.table__column}>
                    {translateStatus(order.status)}
                  </td>
                  <td className={styles.table__column}>{order.amount}</td>
                  <Link
                    className={styles.table__column}
                    href={`/orders/${order.id}`}
                  >
                    <Image
                      className={styles.back}
                      src={'/rightIcon.svg'}
                      alt="right"
                      width={16}
                      height={16}
                    />
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Index
