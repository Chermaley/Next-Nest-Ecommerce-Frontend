import { router } from '../trpc'
import { authRouter } from './auth'
import { productsRouter } from './products'
import { chatRouter } from './chat'
import { basketRouter } from './basket'
import { orderRouter } from './order'

export const appRouter = router({
  auth: authRouter,
  products: productsRouter,
  basket: basketRouter,
  chat: chatRouter,
  order: orderRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
