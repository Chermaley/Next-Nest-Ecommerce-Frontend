import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import {wrapper} from "../../store/store";
import {getProduct} from "../../store/reducers/productSlice";
import {useTypedSelector} from "../../hooks/useTypedSelectors";
import config from "../../config";
import styles from './Product.module.scss'

const ProductPage = () => {
    const product = useTypedSelector(state => state.product.currentProduct)

    return (
        <MainLayout
            title={'Страница продукта'}
        >
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <img src={`${config.apiUrl}/${product?.image}`} alt=""/>
                </div>
                <div className={styles.right}>
                    <div>Название: {product?.name}</div>
                    <div>Описание: {product?.description}</div>
                    <div>Цена: {product?.price}</div>
                </div>
            </div>
        </MainLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({params}) => {
        if (params?.id) {
            await store.dispatch(getProduct({productId: Number(params.id)}))
        }
        return {props: {}}
    }
);

export default ProductPage;


