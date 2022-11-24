import React from 'react'
import styles from './Button.module.scss'

const Button: React.FC<{ onClick?: () => void; title: string }> = ({
  onClick,
  title,
}) => {
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (onClick) {
      onClick()
    }
  }
  return (
    <button className={styles.button} onClick={clickHandler}>
      {title}
    </button>
  )
}

export default Button
