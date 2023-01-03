import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import classes from './Basket.module.scss'
import { Button } from '../../components/Button'
import { PageTitle } from '../../components/PageTitle'
import { WithAuth } from '../../hoc'
import { BasketProductList } from '../../components/BasketProductList'
import { CreateOrderModal } from '../../modals/CreateOrderModal'
import { trpc } from '../../utils/trpc'

const Index = () => {
  const { data: basket } = trpc.basket.getBasket.useQuery()
  const [isCreateOrderModalShown, setIsCreateOrderModalShown] = useState(false)
  const toggleCreateOrderModal = () =>
    setIsCreateOrderModalShown(!isCreateOrderModalShown)

  return (
    <MainLayout title="Корзина">
      <PageTitle>Корзина</PageTitle>
      <div className={classes.basket}>
        <WithAuth>
          {basket?.products && basket?.products.length ? (
            <>
              <BasketProductList products={basket.products} />
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
