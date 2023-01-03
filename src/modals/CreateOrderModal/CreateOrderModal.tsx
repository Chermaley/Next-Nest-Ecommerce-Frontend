import React, { useState } from 'react'
import { NotificationType } from '../../store/reducers/notificationSlice'
import classes from './CreateOrderModal.module.scss'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import BaseModal from '../BaseModal'
import { trpc } from '../../utils/trpc'

const CreateOrderModal: React.FC<{
  toggleModal: () => void
  isOpen: boolean
}> = ({ isOpen, toggleModal }) => {
  const [phoneNumber, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const { mutate: createOrder } = trpc.order.createOrder.useMutation()
  const onCreateOrder = async () => {
    if (phoneNumber && address) {
      try {
        await createOrder({
          phoneNumber,
          address,
          city: 'Москва',
          country: 'Россия',
          zipCode: '123456',
        })
        toggleModal()
        // showNotification({
        //   type: NotificationType.Success,
        //   text: 'Заказ успешно создан',
        // })
      } catch (e) {
        // showNotification({
        //   type: NotificationType.Error,
        //   text: 'Упс, что-то пошло не так',
        // })
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
          value={phoneNumber}
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
