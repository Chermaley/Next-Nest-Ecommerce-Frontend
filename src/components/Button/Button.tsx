import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

const Button: React.FC<{
  onClick?: () => void
  title: string
  className?: string
}> = ({ onClick, title, className }) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (onClick) {
      onClick()
    }
  }
  return (
    <button className={clsx(styles.button, className)} onClick={clickHandler}>
      {title}
    </button>
  )
}

export default Button
