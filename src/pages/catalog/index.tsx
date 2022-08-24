import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {Product} from "../../api/models";
import config from "../../../config/config";
import {wrapper} from "../../store/store";
import {getProductList, getProductTypeList} from "../../store/reducers/productSlice";
import {useTypedSelector} from "../../hooks/useTypedSelectors";
import {ProductType} from "../../api/models";
import styles from './Catalog.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import { addProductToBasket } from "../../store/reducers/basketSlice";

const Catalog = () => {
    const dispatch = useAppDispatch()
    const products = useTypedSelector(state => state.product.productList)
    const productTypes = useTypedSelector(state => state.product.productTypeList)

    const onTypeClick = (typeId: number) => {
        dispatch(getProductList({typeId}))
    }

    return (
        <MainLayout title='Каталог'>
            <div className={styles.wrapper}>
                <div className={styles.types}>
                    <div className={styles.typeSectionTitle}>Линейки</div>
                    <div className={styles.type}>Все</div>
                    {productTypes.map((t) => <ProductTypeItem onClick={onTypeClick} type={t} key={t.id}/>)}
                </div>
                <div className={styles.productList}>
                    {products.map(p => <ProductItem product={p} key={p.id}/>)}
                </div>
            </div>
        </MainLayout>
    )
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) => async () => {
        await store.dispatch(getProductList({}))
        await store.dispatch(getProductTypeList())
        return {props: {}}
    }
);

export default Catalog;

const ProductItem: React.FC<{ product: Product }> = ({product}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const addToCart = () => {
        dispatch(addProductToBasket({
            productId: product.id,
            price: product.price,
            name: product.name,
            quantity: 1,
        }))
    }

    return <div className={styles.product}>
        <p>{product.name}</p>
        <img style={{width: 100}} src={`${config.apiUrl}/${product.image1}`} alt=""/>
        <p>{product.description}</p>
        <p>По цене в {product.price} рублей</p>
        <button onClick={() => router.push(`/catalog/${product.id}`)}>Подробнее</button>
        <button onClick={addToCart}>Добавить в корзину</button>
    </div>
}

const ProductTypeItem: React.FC<{ type: ProductType; onClick: (typeId: number) => void }> = ({type, onClick}) => {
    return <div onClick={() => onClick(type.id)} className={styles.type}>
        {type.name}
    </div>
}