import React from 'react'
import Score from './Score'
import QuestionHeader from './QuestionHeader'
import QuestionBoard from './QuestioneBoard'
import { useExam } from '../hooks/useExam'
import '../styles/Body.css'

const Body = () => {
  const { currentQuestion, totalQuestionCount } = useExam()

  return (
    <div className='Body'>
      <QuestionHeader
        category={currentQuestion.category}
        difficulty={currentQuestion.difficulty}
        totalQuestionCount={totalQuestionCount}
        currentQuestionIndex={currentQuestion.index}
      />
      <QuestionBoard question={currentQuestion} />
      <Score />
    </div>
  )
}

export default Body
