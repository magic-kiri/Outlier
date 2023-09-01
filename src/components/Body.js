import React from 'react'
import Score from './Score'
import QuestionHeader from './QuestionHeader'
import QuestionBoard from './QuestioneBoard'
import '../styles/Body.css'

const Body = ({ totalQuestionCount, currentQuestionIndex, question }) => {
  return (
    <div className='Body'>
      <QuestionHeader
        category={question.category}
        difficulty={question.difficulty}
        totalQuestionCount={totalQuestionCount}
        currentQuestionIndex={currentQuestionIndex}
      />
      <QuestionBoard question={question.question} />
      <Score />
    </div>
  )
}

export default Body
