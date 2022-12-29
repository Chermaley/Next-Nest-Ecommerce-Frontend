import React from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../api'

type PageParams = {
  params?: {
    typeId: number
  }
}

export default async function Catalog({ params }: PageParams) {
  let products = await getProducts({ typeId: params?.typeId ?? null })
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  )
}
