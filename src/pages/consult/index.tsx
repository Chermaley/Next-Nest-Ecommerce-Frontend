import React, { useEffect } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { useTypedSelector } from '../../hooks/useTypedSelectors'
import {
  Consultation,
  ConsultationStatus,
  ConsultationType,
} from '../../services/models'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {
  chatActions,
  getClosedConsultations,
  getOpenConsultation,
} from '../../store/reducers/chatSlice'
import { Chat } from '../../components/Chat'
import styles from './Consult.module.scss'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { WithAuth } from '../../hoc'
import { PageTitle } from '../../components/PageTitle'
import { Button } from '../../components/Button'

const Consult = () => {
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user
  const accessToken = user?.accessToken
  const openConsultations = useTypedSelector(
    (state) => state.chat.openConsultations
  )
  const closedConsultations = useTypedSelector(
    (state) => state.chat.closedConsultations
  )
  const activeConsultation = useTypedSelector(
    (state) => state.chat.activeConsultation
  )

  useEffect(() => {
    if (accessToken) {
      dispatch(getOpenConsultation({ accessToken }))
      dispatch(getClosedConsultations({ accessToken }))
    }
  }, [dispatch, accessToken])

  const onCreateNewConsultation = () => {
    if (user) {
      dispatch(
        chatActions.createNewConsultation({
          userId: user.id,
          type: ConsultationType.Cosmetic,
        })
      )
    }
  }

  return (
    <MainLayout title="Консультация">
      <PageTitle>Консультация</PageTitle>
      <div className={styles.wrapper}>
        <WithAuth>
          <div className={styles.left}>
            <div className={styles.consultType}>Открытые</div>
            {openConsultations.map((consultation) => (
              <ConsultationItem
                key={consultation.id}
                consultation={consultation}
              />
            ))}
            <div className={styles.consultType}>История</div>
            <div>
              {closedConsultations.map((consultation) => (
                <ConsultationItem
                  consultation={consultation}
                  key={consultation.id}
                />
              ))}
            </div>
          </div>
          <div className={styles.right}>
            {!openConsultations.length && !activeConsultation && (
              <Button
                title="Создать обращение"
                onClick={onCreateNewConsultation}
              />
            )}
            {activeConsultation && <Chat />}
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Consult

const ConsultationItem: React.FC<{
  consultation: Consultation
}> = ({ consultation }) => {
  const dispatch = useAppDispatch()
  const session = useSession()
  const user = session.data?.user
  const onClick = () => {
    if (user) {
      dispatch(chatActions.joinConsultation({ consultation, userId: user.id }))
    }
  }
  return (
    <div
      className={clsx(styles.consultation, {
        [styles.active]: consultation.status === ConsultationStatus.Open,
      })}
      onClick={onClick}
    >
      Консультация {consultation.id}
    </div>
  )
}
