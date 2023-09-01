import React from 'react'
import '../styles/Button.css'

const Button = ({ className, children, onClick }) => {
  return (
    <button className={`CustomButton ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
