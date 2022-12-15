import { useAppDispatch } from './useAppDispatch'
import {
  notificationActions,
  NotificationType,
} from '../store/reducers/notificationSlice'

export default function useNotification() {
  const dispatch = useAppDispatch()
  return ({ type, text }: { type: NotificationType; text: string }) => {
    dispatch(notificationActions.show({ type, text }))
  }
}
