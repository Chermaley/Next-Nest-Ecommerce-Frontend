import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import MainLayout from "../../layouts/MainLayout";
import { Auth } from "../../components/Auth";
import { GetServerSideProps } from "next";
import { wrapper } from "../../store/store";
import { getAccessTokenFromCtx } from "../../utils/getAccessFromCtx";
import { getUser } from "../../store/reducers/userSlice";
import styles from "./Personal.module.scss";
import { logoutThunk } from "../../store/reducers/authSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const Personal = () => {
  const dispatch = useAppDispatch();
  const user = useTypedSelector((state) => state.user.user);

  const onLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <MainLayout title="Авторизация">
      {user ? (
        <div>
          <div>Почта {user.email}</div>
          <div>
            Роли:{" "}
            {user.roles &&
              user.roles.map((role) => <div key={role.id}>{role.value}</div>)}
          </div>

          <div onClick={onLogout} className={styles.logout}>
            Выйти
          </div>

        </div>
      ) : (
        <Auth />
      )}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const accessToken = getAccessTokenFromCtx(ctx);
    if (accessToken) {
      await store.dispatch(getUser({ accessToken })).unwrap();
    }
    return { props: {} };
  });

export default Personal;
