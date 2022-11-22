import React, { FormEvent, useState } from 'react'
import classes from './auth.module.scss'
import { Input } from '../Input'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { signUp } from '../../store/reducers/authSlice'
import { NotificationManager } from 'react-notifications'
import { signIn } from 'next-auth/react'

const Auth = () => {
  const dispatch = useAppDispatch()
  const [isLogin, setIsLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      return signIn('credentials', { email, password, redirect: false })
    }
    if (password !== passwordConfirm) {
      return NotificationManager.error('Пароли не совпадают')
    }
    dispatch(signUp({ email, password }))
  }

  return (
    <form onSubmit={onSubmit} className={classes.wrapper}>
      {isLogin ? (
        <>
          <Input
            className={classes.input}
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <Input
            className={classes.input}
            value={password}
            onChange={setPassword}
            placeholder="Пароль"
          />
          <button>Войти</button>
        </>
      ) : (
        <>
          <Input
            className={classes.input}
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <Input
            className={classes.input}
            value={password}
            onChange={setPassword}
            placeholder="Пароль"
          />
          <Input
            className={classes.input}
            value={passwordConfirm}
            onChange={setPasswordConfirm}
            placeholder="Пароль ещё раз"
          />
          <button>Зарегистрироваться</button>
        </>
      )}
      <div
        onClick={() => setIsLogin(!isLogin)}
        className={classes.changeAuthTypeButton}
      >
        {!isLogin ? 'Войти' : 'Зарегестрироваться'}
      </div>
    </form>
  )
}

export default Auth
