import { useState } from 'react'
import ProgressBar from './ProgressBar'
import Body from './Body'
import questions from '../questions.json'

const Page = () => {
  const [currentQuestionIndex] = useState(2)
  const totalQuestionCount = questions.length

  const completedPercentage = (100 * currentQuestionIndex) / totalQuestionCount

  return (
    <>
      <ProgressBar completed={completedPercentage} />
      <Body
        question={questions[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestionCount={totalQuestionCount}
      />
    </>
  )
}

export default Page
