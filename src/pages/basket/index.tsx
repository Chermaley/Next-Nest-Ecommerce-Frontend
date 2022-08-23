import React from "react";
import {
  GetServerSideProps,
} from "next";
import { wrapper } from "../../store/store";
import { getBasket } from "../../store/reducers/basketSlice";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import { BasketProduct } from "../../api/models";
import MainLayout from "../../layouts/MainLayout";
import classes from "./Basket.module.scss";
import { getAccessTokenFromCtx } from "../../utils/getAccessFromCtx";

const Index = () => {
  const basket = useTypedSelector((state) => state.basket.basket);
  return (
    <MainLayout title="Корзина">
      <div className={classes.cart}>
        <div>
          <ul className={classes.fields}>
            <li className={classes.fields_name}>Название</li>
            <li className={classes.fields_count}>Количество</li>
            <li className={classes.fields_price}>Цена за 1 шт.</li>
            <li className={classes.fields_allPrice}>Общая цена</li>
            <li />
          </ul>
        </div>
        {basket?.products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <div className={classes.button}>
          <button onClick={console.log}>Оформить заказ</button>
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const accessToken = getAccessTokenFromCtx(ctx);
    if (accessToken) {
      await store.dispatch(getBasket({ accessToken }));
    }
    return { props: {} };
  });

export default Index;

const Product: React.FC<{ product: BasketProduct }> = ({ product }) => {
  return (
    <div className={classes.item}>
      <div className={classes.name}>{product.name}</div>
      <div className={classes.quantity}>
        <div>{product.quantity}</div>
        {/*<Quantity decrement={onDecrementCount} increment={onIncrementCount} quantity={cartItem.count} />*/}
      </div>
      <div className={classes.price}>{product.price} ₽</div>
      <div className={classes.fullPrice}>
        {product.price * product.quantity} ₽
      </div>
      <div onClick={console.log}>
        {/*<DeleteIcon />*/}
        Удалить
      </div>
    </div>
  );
};

