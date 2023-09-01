import React from 'react'
import Rating from './Rating'
import '../styles/QuestionHeader.css'

const QuestionHeader = ({
  currentQuestionIndex,
  totalQuestionCount,
  category,
  difficulty
}) => {
  return (
    <div className='QuestionHeader'>
      <h1 className='Serial'>
        Question {currentQuestionIndex} of {totalQuestionCount}
      </h1>
      <h3 className='Category'>{decodeURIComponent(category)}</h3>
      <Rating difficulty={difficulty} />
    </div>
  )
}

export default QuestionHeader
