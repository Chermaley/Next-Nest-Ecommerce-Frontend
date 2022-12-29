'use client'

import React from 'react'
import { useWebsocketStore } from '../../websocket/WebsocketContextProvider'
import { useSession } from 'next-auth/react'
import { PageTitle } from '../components/PageTitle'
import { WithAuth } from '../../src/hoc'
import styles from './Consult.module.scss'
import clsx from 'clsx'
import { Button } from '../components/Button'
import { Chat } from '../components/Chat'
import {
  Consultation,
  ConsultationStatus,
  ConsultationType,
} from '../../src/services/models'

const Consult = () => {
  const session = useSession()
  const user = session.data?.user
  const [websocketStore] = useWebsocketStore()
  const {
    activeConsultation,
    closedConsultations,
    openConsultations,
    messages,
    isConnected,
    isEstablishingConnection,
    isLoading,
    createNewConsultation,
  } = websocketStore

  const onCreateNewConsultation = () => {
    if (user) {
      createNewConsultation({
        creatorId: user.id,
        type: ConsultationType.Cosmetic,
      })
    }
  }

  return (
    <>
      <PageTitle>Консультация</PageTitle>
      <div className={styles.wrapper}>
        <WithAuth>
          <div className={clsx(styles.wrapper__left, styles.consultationList)}>
            <div className={styles.consultationList__title}>Открытые</div>
            {openConsultations?.map((consultation) => (
              <ConsultationItem
                key={consultation.id}
                consultation={consultation}
              />
            ))}
            <div className={styles.consultationList__title}>История</div>
            <div>
              {closedConsultations?.map((consultation) => (
                <ConsultationItem
                  consultation={consultation}
                  key={consultation.id}
                />
              ))}
            </div>
          </div>
          <div className={styles.wrapper__right}>
            {!openConsultations?.length && !activeConsultation ? (
              <Button
                title="Создать обращение"
                onClick={onCreateNewConsultation}
              />
            ) : null}
            {activeConsultation ? <Chat /> : null}
          </div>
        </WithAuth>
      </div>
    </>
  )
}

export default Consult

const ConsultationItem: React.FC<{
  consultation: Consultation
}> = ({ consultation }) => {
  const session = useSession()
  const user = session.data?.user
  const [websocketStore] = useWebsocketStore()
  const { joinConsultation } = websocketStore
  const onClick = () => {
    if (user) {
      joinConsultation({ consultation, userId: user.id })
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
