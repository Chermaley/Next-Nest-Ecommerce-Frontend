import { Product, ProductType } from '../../src/services/models'
import { buildRequestParams } from '../../src/utils'

export async function getProducts({
  typeId,
}: {
  typeId?: number | null
}): Promise<Product[]> {
  const params = buildRequestParams({
    typeId,
  })
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?${params}`
  )
  return await res.json()
}

export async function getProduct({ id }: { id?: number }): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/p/${id}`)
  return await res.json()
}

export async function getProductTypes(): Promise<ProductType[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/types`)
  return await res.json()
}
