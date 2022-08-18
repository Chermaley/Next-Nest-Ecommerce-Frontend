import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelectors";
import MainLayout from "../../layouts/MainLayout";
import { Auth } from "../../components/Auth";

const Personal = () => {
  const user = useTypedSelector((state) => state.auth.user);
  return (
    <MainLayout title="Авторизация">
      {user ? (
        <div>
          <div>Почта {user.email}</div>
          <div>
            Роли:{" "}
            {user.roles.map((role) => (
              <div key={role.id}>{role.value}</div>
            ))}
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </MainLayout>
  );
};

export default Personal;
