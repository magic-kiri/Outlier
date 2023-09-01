import React from 'react'
import { useExam } from '../hooks/useExam'
import '../styles/ProgressBar.css'

const ProgressBar = () => {
  const { currentQuestion, totalQuestionCount } = useExam()

  const currentQuestionIndex = currentQuestion.index
  const completedPercentage = (100 * currentQuestionIndex) / totalQuestionCount

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
