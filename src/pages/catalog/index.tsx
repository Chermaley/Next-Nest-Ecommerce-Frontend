import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import styles from './Catalog.module.scss'
import { ProductCard } from '../../components/ProductCard'
import { PageTitle } from '../../components/PageTitle'
import clsx from 'clsx'
import { trpc } from '../../utils/trpc'

const Catalog = () => {
  const [typeId, setTypeId] = React.useState<string | null>(null)
  const { data: products } = trpc.products.getAllProducts.useQuery({ typeId })
  const { data: productTypes } = trpc.products.getAllProductTypes.useQuery()

  const onTypeClick = (id: string | null) => {
    setTypeId(id)
  }

  return (
    <MainLayout title="Каталог">
      <PageTitle>Каталог</PageTitle>
      <div className={styles.catalog}>
        <div className={clsx(styles.catalog__types, styles.types)}>
          <div className={styles.types__title}>Линейки</div>
          <div className={styles.types__content}>
            <div
              className={styles.types__type}
              onClick={() => onTypeClick(null)}
            >
              Все
            </div>
            {productTypes?.map((t) => (
              <div
                key={t.id}
                onClick={() => onTypeClick(t.id)}
                className={styles.types__type}
              >
                {t.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.catalog__products}>
          {products?.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Catalog
