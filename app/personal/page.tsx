'use client'

import React from 'react'
import styles from './Personal.module.scss'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { PageTitle } from '../components/PageTitle'
import { WithAuth } from '../../src/hoc'

const Personal = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <>
      <PageTitle>Личный кабинет</PageTitle>
      <WithAuth>
        <div className={styles.user}>
          <div className={styles.user__content}>
            <div className={styles.user__info}>
              <div>Почта {user?.email}</div>
              <div>
                Роли:
                {user?.roles
                  ? user.roles.map((role) => <p key={role.id}>{role.value}</p>)
                  : null}
              </div>
              <div onClick={() => signOut()} className={styles.user__logout}>
                Выйти
              </div>
            </div>
            <Link href="/orders" className={styles.user__orders}>
              Заказы
            </Link>
          </div>
        </div>
      </WithAuth>
    </>
  )
}

export default Personal
