import React from 'react'
import AnswerSheet from './AnswerSheet'
import Result from './Result'
import '../styles/QuestionBoard.css'

const QuestionBoard = ({ question }) => {
  const {
    question: description,
    correct_answer: correctAnswer,
    incorrect_answers: incorrectAnswers,
    index
  } = question

  return (
    <div className='QuestionBoard'>
      <h1 className='Description'>{decodeURIComponent(description)}</h1>
      <AnswerSheet
        index={index}
        correctAnswer={correctAnswer}
        incorrectAnswers={incorrectAnswers}
      />
      <Result />
    </div>
  )
}

export default QuestionBoard
