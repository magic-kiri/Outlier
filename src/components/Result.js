import React from 'react'
import Button from './Button'
import '../styles/Result.css'
import { useExam } from '../hooks/useExam'

const Result = ({ index, correctAnswer }) => {
  const { gotoNextQuestion, getSubmittedAnswer } = useExam()

  const onClickHandler = () => {
    gotoNextQuestion()
  }
  const submittedAnswer = getSubmittedAnswer(index)

  const message = submittedAnswer === correctAnswer ? 'Correct!' : 'Sorry!'
  if (submittedAnswer) {
  }
  return (
    <div className='ResultBox'>
      {submittedAnswer ? (
        <>
          <h1 className='Message'>{message}</h1>
          <Button onClick={onClickHandler}>Next Question</Button>
        </>
      ) : null}
    </div>
  )
}

export default Result
