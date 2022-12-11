import React, { FormEvent, useState } from 'react'
import classes from './auth.module.scss'
import { Input } from '../Input'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { NotificationManager } from 'react-notifications'
import { signIn } from 'next-auth/react'
import { Button } from '../Button'
import { singUp } from '../../services/AuthService'

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
    dispatch(singUp.initiate({ email, password }))
  }

  return (
    <div className={classes.wrapper}>
      <form onSubmit={onSubmit} className={classes.form}>
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
              type="password"
            />
            <Button title="Войти" />
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
              type="password"
            />
            <Input
              className={classes.input}
              value={passwordConfirm}
              onChange={setPasswordConfirm}
              placeholder="Пароль ещё раз"
            />
            <Button title="Зарегестрироваться" />
          </>
        )}
        <div
          onClick={() => setIsLogin(!isLogin)}
          className={classes.changeAuthTypeButton}
        >
          {!isLogin ? 'Войти' : 'Зарегестрироваться'}
        </div>
      </form>
    </div>
  )
}

export default Auth
