import { OrderStatus } from '@prisma/client'

export default function translateOrderStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.NEW:
      return 'Новый'
    case OrderStatus.CANCELED:
      return 'Отклоненный'
    case OrderStatus.DELIVERED:
      return 'Доставленный'
    case OrderStatus.IN_PROGRESS:
      return 'В процессе'
  }
}
