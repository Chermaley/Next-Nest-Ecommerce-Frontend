import { Product } from './Product'

export type Order = {
  id: number
  createdAt: string
  products: Product[]
  amount: number
  status: OrderStatus
}

export enum OrderStatus {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Delivered = 'Delivered',
  Rejected = 'Rejected',
}
