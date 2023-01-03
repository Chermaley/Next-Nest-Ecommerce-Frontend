import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import { Chat } from '../../components/Chat'
import styles from './Consult.module.scss'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { WithAuth } from '../../hoc'
import { PageTitle } from '../../components/PageTitle'
import { Button } from '../../components/Button'
import { trpc } from '../../utils/trpc'
import { Consultation, ConsultationStatus } from '@prisma/client'

const Consult = () => {
  const session = useSession()
  const user = session.data?.user
  const [activeConsultation, setActiveConsultation] =
    useState<Consultation | null>(null)
  const { mutate: createConsultation } =
    trpc.chat.createConsultation.useMutation()
  const { data: openConsultations } = trpc.chat.getOpenConsultations.useQuery(
    undefined,
    {
      enabled: !!user,
    }
  )
  const { mutate: joinConsultation } = trpc.chat.joinConsultation.useMutation()

  const onCreateNewConsultation = () => {
    if (user) {
      createConsultation()
    }
  }

  const onJoinConsultation = (consultation: Consultation) => {
    setActiveConsultation(consultation)
    joinConsultation({ consultationId: consultation.id })
  }

  return (
    <MainLayout title="Консультация">
      <PageTitle>Консультация</PageTitle>
      <div className={styles.wrapper}>
        <WithAuth>
          <div className={clsx(styles.wrapper__left, styles.consultationList)}>
            <div className={styles.consultationList__title}>Открытые</div>
            {openConsultations?.map((consultation) => (
              <ConsultationItem
                key={consultation.id}
                consultation={consultation}
                onClick={onJoinConsultation}
              />
            ))}
            <div className={styles.consultationList__title}>История</div>
            <div>
              {/*{closedConsultations?.map((consultation) => (*/}
              {/*  <ConsultationItem*/}
              {/*    consultation={consultation}*/}
              {/*    key={consultation.id}*/}
              {/*  />*/}
              {/*))}*/}
            </div>
          </div>
          <div className={styles.wrapper__right}>
            {!activeConsultation && !openConsultations?.length ? (
              <Button
                title="Создать обращение"
                onClick={onCreateNewConsultation}
              />
            ) : null}
            {activeConsultation ? (
              <Chat
                onClose={() => setActiveConsultation(null)}
                activeConsultation={activeConsultation}
              />
            ) : null}
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Consult

const ConsultationItem: React.FC<{
  consultation: Consultation
  onClick: (consultation: Consultation) => void
}> = ({ consultation, onClick }) => {
  return (
    <div
      className={clsx(styles.consultation, {
        [styles.active]: consultation.status === ConsultationStatus.OPEN,
      })}
      onClick={() => onClick(consultation)}
    >
      Консультация {consultation.id}
    </div>
  )
}
