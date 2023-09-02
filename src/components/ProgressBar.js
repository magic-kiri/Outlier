import React from 'react'
import { useExam } from '../hooks/useExam'
import '../styles/ProgressBar.css'

const ProgressBar = () => {
  const { completedPercentage } = useExam()

  return (
    <div className='Bar'>
      <div
        className='CompletePortion'
        style={{ width: `${completedPercentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
