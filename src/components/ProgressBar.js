import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ completed }) => {
  return (
    <div className='Bar'>
      <div className='CompletePortion' style={{ width: `${completed}%` }} />
    </div>
  )
}

export default ProgressBar
