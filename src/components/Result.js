import React from 'react'
import Button from './Button'
import '../styles/Result.css'
import { useExam } from '../hooks/useExam'

const Result = () => {
  const { gotoNextQuestion } = useExam()

  const onClickHandler = () => {
    gotoNextQuestion()
  }
  const message = 'Sorry!'
  return (
    <div className='ResultBox'>
      <h1 className='Message'>{message}</h1>
      <Button onClick={onClickHandler}>Next Question</Button>
    </div>
  )
}

export default Result
