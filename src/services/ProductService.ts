import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Product, ProductType } from './models'
import config from '../../config'
import { HYDRATE } from 'next-redux-wrapper'

export const productServiceAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: [],
  endpoints: (build) => ({
    fetchAllProducts: build.query<Product[], number | undefined>({
      query: (typeId) => ({
        url: `/products`,
        params: {
          typeId,
        },
      }),
    }),
    fetchProductsByTerm: build.query<Product[], string>({
      query: (term) => ({
        url: `/products`,
        params: {
          term,
        },
      }),
    }),
    fetchProduct: build.query<Product, { productId: number }>({
      query: ({ productId }) => ({
        url: `/products/p/${productId}`,
      }),
    }),
    fetchProductTypes: build.query<ProductType[], void>({
      query: () => ({
        url: `/products/types`,
      }),
    }),
  }),
})

export const {
  fetchAllProducts,
  fetchProductTypes,
  fetchProduct,
  fetchProductsByTerm,
} = productServiceAPI.endpoints
