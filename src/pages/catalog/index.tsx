import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import { setCurrentProductTypeId } from '../../store/reducers/productSlice'
import styles from './Catalog.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { GetServerSideProps } from 'next'
import { ProductCard } from '../../components/ProductCard'
import { PageTitle } from '../../components/PageTitle'
import {
  fetchAllProducts,
  fetchProductTypes,
} from '../../services/ProductService'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import clsx from 'clsx'

const Catalog = () => {
  const dispatch = useAppDispatch()
  const typeId = useTypedSelector((state) => state.product.currentProductTypeId)
  const { data: products } = fetchAllProducts.useQuery(typeId ?? undefined)
  const { data: productTypes } = fetchProductTypes.useQueryState(undefined)

  const onTypeClick = (id: number | null) => {
    dispatch(setCurrentProductTypeId(id))
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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await Promise.all([
      store.dispatch(fetchAllProducts.initiate(undefined)),
      store.dispatch(fetchProductTypes.initiate()),
    ])
    return { props: {} }
  })

export default Catalog
