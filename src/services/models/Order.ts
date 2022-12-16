import { BasketProduct } from './Basket'

export type Order = {
  id: number
  createdAt: string
  products: BasketProduct[]
  amount: number
  status: OrderStatus
}

export enum OrderStatus {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Delivered = 'Delivered',
  Rejected = 'Rejected',
}
