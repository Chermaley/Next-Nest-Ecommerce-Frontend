import { OrderStatus } from '../services/models'

export default function (status: OrderStatus) {
  switch (status) {
    case OrderStatus.Confirmed:
      return 'Подтвержденный'
    case OrderStatus.Delivered:
      return 'Доставленный'
    case OrderStatus.Pending:
      return 'Ожидает подтверждения'
    case OrderStatus.Rejected:
      return 'Отклоненный'
  }
}
