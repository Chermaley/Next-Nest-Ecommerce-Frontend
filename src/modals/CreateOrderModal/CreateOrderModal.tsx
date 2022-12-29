import React, { useState } from 'react'
import {
  fetchBasket,
  useCreateOrderMutation,
} from '../../services/BasketService'
import useNotification from '../../hooks/useNotification'
import { NotificationType } from '../../store/reducers/notificationSlice'
import classes from './CreateOrderModal.module.scss'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import BaseModal from '../BaseModal'

const CreateOrderModal: React.FC<{
  toggleModal: () => void
  isOpen: boolean
}> = ({ isOpen, toggleModal }) => {
  const [createOrder] = useCreateOrderMutation()
  const { data } = fetchBasket.useQueryState(undefined)
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const showNotification = useNotification()

  const onCreateOrder = async () => {
    if (data?.products.length && phone && address) {
      try {
        await createOrder({ basketId: data.id, phone, address }).unwrap()
        toggleModal()
        showNotification({
          type: NotificationType.Success,
          text: 'Заказ успешно создан',
        })
      } catch (e) {
        showNotification({
          type: NotificationType.Error,
          text: 'Упс, что-то пошло не так',
        })
      }
    }
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className={classes.createOrderModal}
    >
      <div className={classes.createOrderModal__title}>Создать заказ</div>
      <div className={classes.createOrderModal__formGroup}>
        <label className={classes.createOrderModal__label}>Телефон</label>
        <Input
          value={phone}
          onChange={setPhone}
          className={classes.createOrderModal__input}
        />
      </div>
      <div className={classes.createOrderModal__formGroup}>
        <label className={classes.createOrderModal__label}>Адрес</label>
        <Input
          value={address}
          onChange={setAddress}
          className={classes.createOrderModal__input}
        />
      </div>
      <Button
        title="Создать заказ"
        onClick={onCreateOrder}
        className={classes.createOrderModal__button}
      />
    </BaseModal>
  )
}

export default CreateOrderModal
