import reducers from './reducers'
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import chatMiddleware from './middlewares/chatMiddleware'
import { productServiceAPI } from '../services/ProductService'
import { basketServiceAPI } from '../services/BasketService'

const appReducer = combineReducers({
  ...reducers,
  [productServiceAPI.reducerPath]: productServiceAPI.reducer,
  [basketServiceAPI.reducerPath]: basketServiceAPI.reducer,
})

const reducer: Reducer = (state, action) => {
  return appReducer(state, action)
}

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        chatMiddleware,
        productServiceAPI.middleware,
        basketServiceAPI.middleware,
      ]),
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<typeof appReducer>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore)
