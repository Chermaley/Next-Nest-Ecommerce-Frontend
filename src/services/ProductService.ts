import { AxiosResponse } from 'axios'
import { Product } from './models'
import { $api } from './api'
import { ProductType } from './models'
import { buildRequestParams } from '../utils'

export default class ProductService {
  static async getProductListByTerm({
    term,
  }: {
    term?: string
  }): Promise<AxiosResponse<Product[]>> {
    const reqParams = buildRequestParams({
      term,
    })
    return $api.get<Product[]>(`/products/?${reqParams}`)
  }

  static async getProductList({
    term,
    typeId,
  }: {
    typeId?: number
    term?: string
  }): Promise<AxiosResponse<Product[]>> {
    const reqParams = buildRequestParams({
      typeId,
      term,
    })
    return $api.get<Product[]>(`/products/?${reqParams}`)
  }

  static async getProduct({
    productId,
  }: {
    productId?: number
  }): Promise<AxiosResponse<Product>> {
    return $api.get<Product>(`/products/p/${productId}`)
  }

  static async getProductTypeList(): Promise<AxiosResponse<ProductType[]>> {
    return $api.get<ProductType[]>('/products/types')
  }
}
