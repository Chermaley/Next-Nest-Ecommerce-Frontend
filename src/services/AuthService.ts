import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { Basket } from './models'
import config from '../../config'

export const authServiceAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
  }),
  endpoints: (build) => ({
    singUp: build.mutation<Basket, { email: string; password: string }>({
      query: (body) => ({
        method: 'POST',
        url: `/auth/local/signup`,
        body,
      }),
    }),
  }),
})

export const { singUp } = authServiceAPI.endpoints
