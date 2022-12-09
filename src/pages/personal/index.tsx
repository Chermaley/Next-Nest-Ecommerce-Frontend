import React from "react";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Personal.module.scss";
import { signOut, useSession } from "next-auth/react";
import { PageTitle } from "../../components/PageTitle";
import WithAuth from "../../hoc/WithAuth";

const Personal = () => {
  const { data: session } = useSession()
  const user = session?.user

  return (
    <MainLayout title="Личный кабинет">
      <PageTitle>Личный кабинет</PageTitle>
      <div className={styles.wrapper}>
        <WithAuth>
          <div>Почта {user?.email}</div>
          <div>
            Роли:
            {user?.roles &&
              user.roles.map((role) => <p key={role.id}>{role.value}</p>)}
          </div>
          <div onClick={() => signOut()} className={styles.logout}>
            Выйти
          </div>
        </WithAuth>
      </div>
    </MainLayout>
  )
}

export default Personal
