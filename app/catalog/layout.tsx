import React from 'react'
import styles from './Catalog.module.scss'
import { PageTitle } from '../components/PageTitle'
import clsx from 'clsx'
import Link from 'next/link'
import { getProductTypes } from './api'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const productTypes = await getProductTypes()
  return (
    <>
      <PageTitle>Каталог</PageTitle>
      <div className={styles.catalog}>
        <div className={clsx(styles.catalog__types, styles.types)}>
          <div className={styles.types__title}>Линейки</div>
          <div className={styles.types__content}>
            <Link href={`/catalog`} className={styles.types__type}>
              Все
            </Link>
            {productTypes?.map((t) => (
              <Link
                href={`/catalog/${t.id}`}
                key={t.id}
                className={styles.types__type}
              >
                {t.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.catalog__products}>{children}</div>
      </div>
    </>
  )
}
