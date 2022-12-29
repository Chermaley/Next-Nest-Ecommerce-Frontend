import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import classes from './Basket.module.scss'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { WithAuth } from '../../hoc'
import { fetchBasket } from '../../services/BasketService'
import { BasketProductList } from '../../components/BasketProductList'
import { CreateOrderModal } from '../../modals/CreateOrderModal'

const Index = () => {
  const { data } = fetchBasket.useQueryState(undefined)
  const [isCreateOrderModalShown, setIsCreateOrderModalShown] = useState(false)
  const toggleCreateOrderModal = () =>
    setIsCreateOrderModalShown(!isCreateOrderModalShown)

  return (
    <MainLayout title="Корзина">
      <PageTitle>Корзина</PageTitle>
      <div className={classes.basket}>
        <WithAuth>
          {data?.products && data?.products.length ? (
            <>
              <BasketProductList products={data.products} />
              <Button
                onClick={toggleCreateOrderModal}
                className={classes.basket__button}
                title="Оформить заказ"
              />
            </>
          ) : (
            <div className={classes.basket__empty}>Корзина пуста</div>
          )}
          <CreateOrderModal
            isOpen={isCreateOrderModalShown}
            toggleModal={toggleCreateOrderModal}
          />
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Index
