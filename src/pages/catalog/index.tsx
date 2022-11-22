import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { wrapper } from '../../store/store'
import {
  getProductList,
  getProductTypeList,
} from '../../store/reducers/productSlice'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import { ProductType } from '../../services/models'
import styles from './Catalog.module.scss'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { GetServerSideProps } from 'next'
import { ProductItem } from './ProductItem'

const Catalog = () => {
  const dispatch = useAppDispatch()
  const products = useTypedSelector((state) => state.product.productList)
  const productTypes = useTypedSelector(
    (state) => state.product.productTypeList
  )

  const onTypeClick = (typeId?: number) => {
    dispatch(getProductList({ typeId }))
  }

  return (
    <MainLayout title="Каталог">
      <div className={styles.wrapper}>
        <div className={styles.types}>
          <div className={styles.typeSectionTitle}>Линейки</div>
          <div className={styles.type} onClick={() => onTypeClick()}>
            Все
          </div>
          {productTypes.map((t) => (
            <ProductTypeItem onClick={onTypeClick} type={t} key={t.id} />
          ))}
        </div>
        <div className={styles.productList}>
          {products.map((p) => (
            <ProductItem product={p} key={p.id} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async () => {
    await store.dispatch(getProductList({}))
    await store.dispatch(getProductTypeList())
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
