import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { getProducts } from './api'

export default async function Catalog() {
  let products = await getProducts({})
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}
