import React from 'react'
import Score from './Score'
import QuestionHeader from './QuestionHeader'
import QuestionBoard from './QuestioneBoard'
import { useExam } from '../hooks/useExam'
import '../styles/Body.css'
import CompletedBanner from './CompletedBanner'

const Body = () => {
  const { currentQuestion, totalQuestionCount } = useExam()

  return (
    <div className='Body'>
      {currentQuestion ? (
        <>
          <QuestionHeader
            category={currentQuestion.category}
            difficulty={currentQuestion.difficulty}
            totalQuestionCount={totalQuestionCount}
            currentQuestionIndex={currentQuestion.index}
          />
          <QuestionBoard question={currentQuestion} />
        </>
      ) : (
        <CompletedBanner />
      )}
      <Score />
    </div>
  )
}

export default Body
