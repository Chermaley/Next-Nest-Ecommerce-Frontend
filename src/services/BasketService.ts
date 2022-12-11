import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Basket } from './models'
import config from '../../config'
import { HYDRATE } from 'next-redux-wrapper'
import prepareHeaders from './prepareHeaders'

export const basketServiceAPI = createApi({
  reducerPath: 'basketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
    prepareHeaders,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Basket'],
  endpoints: (build) => ({
    fetchBasket: build.query<Basket, void>({
      query: () => ({
        url: `/basket`,
      }),
      providesTags: () => ['Basket'],
    }),
    addProductToBasket: build.mutation<
      Basket,
      {
        productId: number
        name: string
        quantity: number
        price: number
      }
    >({
      query: (body) => ({
        method: 'POST',
        url: `/basket/add`,
        body,
      }),
      invalidatesTags: ['Basket'],
    }),
    deleteProductFromBasket: build.mutation<
      Basket,
      {
        productId: number
      }
    >({
      query: (body) => ({
        method: 'POST',
        url: `/basket/delete`,
        body,
      }),
      invalidatesTags: ['Basket'],
    }),
  }),
})

export const { fetchBasket } = basketServiceAPI.endpoints
export const {
  useAddProductToBasketMutation,
  useDeleteProductFromBasketMutation,
  useFetchBasketQuery,
} = basketServiceAPI
