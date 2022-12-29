'use client'

import React from 'react'
import { Button } from '../../components/Button'
import { Product } from '../../../src/services/models'

const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const addToCart = () => {
    if (product) {
      // addProductToBasket({
      //   productId: product.id,
      //   price: product.price,
      //   name: product.name,
      //   quantity: 1,
      // })
    }
  }
  return <Button title="Добавить в корзину" onClick={addToCart} />
}

export default AddToCartButton
