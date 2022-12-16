import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Product, ProductType } from './models'
import { HYDRATE } from 'next-redux-wrapper'
import prepareHeaders from './prepareHeaders'

export const productServiceAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  tagTypes: ['Products', 'Product', 'ProductTypes', 'ProductsByTerm'],
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
      providesTags: () => ['ProductsByTerm'],
    }),
    fetchProductTypes: build.query<ProductType[], void>({
      query: () => ({
        url: `/products/types`,
      }),
      providesTags: () => ['ProductTypes'],
    }),
    fetchProduct: build.query<Product, { productId: number }>({
      query: ({ productId }) => ({
        url: `/products/p/${productId}`,
      }),
      providesTags: (result) => {
        return [{ type: 'Product', id: Number(result?.id) }]
      },
    }),
    leaveComment: build.mutation<
      Product,
      { productId: number; text: string; rating: number }
    >({
      query: ({ productId, ...body }) => ({
        method: 'POST',
        url: `/products/p/${productId}/comment`,
        body,
      }),
      invalidatesTags: (result, error, { productId }) => {
        return [{ type: 'Product', id: productId }]
      },
    }),
  }),
})

export const {
  fetchAllProducts,
  fetchProductTypes,
  fetchProduct,
  fetchProductsByTerm,
} = productServiceAPI.endpoints

export const { useLeaveCommentMutation } = productServiceAPI
