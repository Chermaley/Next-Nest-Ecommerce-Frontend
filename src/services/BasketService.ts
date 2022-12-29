import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Basket, Order } from './models'
import { HYDRATE } from 'next-redux-wrapper'
import prepareHeaders from './prepareHeaders'

export const basketServiceAPI = createApi({
  reducerPath: 'basketAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Basket', 'Order'],
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
    fetchOrders: build.query<Order[], void>({
      query: () => ({
        url: `/order`,
      }),
      providesTags: () => ['Order'],
    }),
    fetchOrder: build.query<Order, { id: number }>({
      query: (body) => ({
        url: `/order/${body.id}`,
      }),
    }),
    createOrder: build.mutation<
      Order,
      { basketId: number; phone: string; address: string }
    >({
      query: (body) => ({
        method: 'POST',
        url: `/order`,
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
  useFetchOrderQuery,
  useFetchOrdersQuery,
  useCreateOrderMutation,
} = basketServiceAPI
