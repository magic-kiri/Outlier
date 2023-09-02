import React from 'react'
import '../styles/Button.css'

const Button = ({ className, children, onClick, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`CustomButton ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
