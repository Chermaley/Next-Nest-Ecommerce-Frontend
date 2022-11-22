import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import styles from './Personal.module.scss'
import { useSession, signOut } from 'next-auth/react'
import { Auth } from '../../components/Auth'

const Personal = () => {
  const { data: session } = useSession()
  const user = session?.user
  return (
    <MainLayout title="Авторизация">
      {user ? (
        <div>
          <div>Почта {user.email}</div>
          <div>
            Роли:
            {user.roles &&
              user.roles.map((role) => <div key={role.id}>{role.value}</div>)}
          </div>
          <div onClick={() => signOut()} className={styles.logout}>
            Выйти
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </MainLayout>
  )
}

export default Personal
