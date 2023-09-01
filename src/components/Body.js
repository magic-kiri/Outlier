import React from 'react'
import Score from './Score'
import QuestionHeader from './QuestionHeader'
import './Body.css'
import QuestionPaper from './QuestionePaper'

const Body = ({ totalQuestionCount, currentQuestionIndex, question }) => {
  return (
    <div className='Body'>
      <QuestionHeader
        category={question.category}
        difficulty={question.difficulty}
        totalQuestionCount={totalQuestionCount}
        currentQuestionIndex={currentQuestionIndex}
      />
      <QuestionPaper question={question.question} />
      <Score />
    </div>
  )
}

export default Body
