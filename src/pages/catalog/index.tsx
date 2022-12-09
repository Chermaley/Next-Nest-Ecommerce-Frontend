import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import { setCurrentProductTypeId } from '../../store/reducers/productSlice'
import { ProductType } from '../../services/models'
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
      <div className={styles.wrapper}>
        <div className={styles.types}>
          <div className={styles.typeSectionTitle}>Линейки</div>
          <div className={styles.typesContent}>
            <div className={styles.type} onClick={() => onTypeClick(null)}>
              Все
            </div>
            {productTypes?.map((t) => (
              <ProductTypeItem onClick={onTypeClick} type={t} key={t.id} />
            ))}
          </div>
        </div>
        <div className={styles.productList}>
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

const ProductTypeItem: React.FC<{
  type: ProductType
  onClick: (typeId: number) => void
}> = ({ type, onClick }) => {
  return (
    <div onClick={() => onClick(type.id)} className={styles.type}>
      {type.name}
    </div>
  )
}
