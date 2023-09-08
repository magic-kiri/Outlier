import React from 'react'
import Score from './Score'
import QuestionHeader from './Question/QuestionHeader'
import QuestionBoard from './Question/QuestioneBoard'
import { useExam } from '../hooks/useExam'
import CompletedBanner from './CompletedBanner'
import '../styles/Body.css'

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
