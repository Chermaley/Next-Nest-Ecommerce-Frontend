import React from 'react'
import classes from './Input.module.scss'

type InputProps = {
  value: string
  onChange: (value: string) => void
  className?: string
  placeholder?: string
  type?: string
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  type,
  placeholder,
}) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      type={type}
      className={className + ' ' + classes.input}
    />
  )
}

export default Input
