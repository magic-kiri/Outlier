import React from 'react'
import Button from './Button'
import { useExam } from '../hooks/useExam'
import '../styles/Result.css'

const Result = ({ index, correctAnswer }) => {
  const { gotoNextQuestion, getSubmittedAnswer } = useExam()

  const onClickHandler = () => {
    gotoNextQuestion()
  }
  const submittedAnswer = getSubmittedAnswer(index)

  const message = submittedAnswer === correctAnswer ? 'Correct!' : 'Sorry!'

  return (
    <div className='ResultBox'>
      {submittedAnswer ? (
        <>
          <h1 className='Message' data-testid='result-message'>
            {message}
          </h1>
          <Button onClick={onClickHandler}>Next Question</Button>
        </>
      ) : null}
    </div>
  )
}

export default Result
