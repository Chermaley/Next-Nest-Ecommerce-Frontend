import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import styles from './Personal.module.scss'
import { signOut, useSession } from 'next-auth/react'
import { PageTitle } from '../../components/PageTitle'
import WithAuth from '../../hoc/WithAuth'
import Link from 'next/link'

const Personal = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <MainLayout title="Личный кабинет">
      <PageTitle>Личный кабинет</PageTitle>
      <div className={styles.user}>
        <WithAuth>
          <div className={styles.user__content}>
            <div className={styles.user__info}>
              <div>Почта {user?.email}</div>
              <div>
                Роли:
                {user?.roles &&
                  user.roles.map((role) => <p key={role.id}>{role.value}</p>)}
              </div>
              <div onClick={() => signOut()} className={styles.user__logout}>
                Выйти
              </div>
            </div>
            <Link href="/orders" className={styles.user__orders}>
              Заказы
            </Link>
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Personal
