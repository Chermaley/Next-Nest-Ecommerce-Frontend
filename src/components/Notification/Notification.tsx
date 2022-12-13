import React, { useEffect } from 'react'
import {
  Notification,
  notificationActions,
  NotificationType,
} from '../../store/reducers/notificationSlice'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import classes from './Notification.module.scss'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import clsx from 'clsx'

const NotificationComponent: React.FC<{
  notification: Notification
}> = ({ notification }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(notificationActions.hide(notification.id))
    }, 3000)
    return () => clearTimeout(timer)
  })

  return (
    <div
      className={clsx(classes.notification, {
        [classes.success]: notification.type === NotificationType.Success,
      })}
    >
      {notification.text}
    </div>
  )
}

const NotificationContainer = () => {
  const notifications = useTypedSelector(
    (state) => state.notifications.notifications
  )
  return (
    <div className={classes.container}>
      {notifications.map((notification) => (
        <NotificationComponent
          key={notification.id}
          notification={notification}
        />
      ))}
    </div>
  )
}

export default NotificationContainer
