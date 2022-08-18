import React, { FormEvent, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import classes from "./auth.module.scss";
import { Input } from "../../components/Input";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { login, register } from "../../store/reducers/authSlice";
import { NotificationManager } from "react-notifications";

const Auth = () => {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      return dispatch(login({ email, password }));
    }
    if (password !== passwordConfirm) {
      return NotificationManager.error('Пароли не совпадают');
    }
    dispatch(register({ email, password }));
  };

  return (
    <form onSubmit={onSubmit} className={classes.wrapper}>
      {isLogin ? (
        <>
          <Input
            className={classes.input}
            value={email}
            onChange={setEmail}
            placeholder='Email'
          />
          <Input
            className={classes.input}
            value={password}
            onChange={setPassword}
            placeholder='Пароль'
          />
          <button>Войти</button>
        </>
      ) : (
        <>
          <Input
            className={classes.input}
            value={email}
            onChange={setEmail}
            placeholder='Email'
          />
          <Input
            className={classes.input}
            value={password}
            onChange={setPassword}
            placeholder='Пароль'
          />
          <Input
            className={classes.input}
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            placeholder='Пароль ещё раз'
          />
          <button>Зарегистрироваться</button>
        </>
      )}
      <div
        onClick={() => setIsLogin(!isLogin)}
        className={classes.changeAuthTypeButton}
      >
        {!isLogin ? "Войти" : "Зарегестрироваться"}
      </div>
    </form>
  );
};

export default Auth;
