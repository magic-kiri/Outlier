import { useState, createContext } from 'react'
import Questions from '../questions.json'

const ExamContext = createContext({})

const ExamProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState({})

  const totalQuestionCount = Questions.length

  const scorePerQuestion = 100 / totalQuestionCount
  console.log({ scorePerQuestion })
  const submitAnswer = (index, answer) => {
    if (answers[index]) {
      return
    }

    setAnswers((prevAns) => ({ ...prevAns, [index]: answer }))
    setScore(
      (previousScore) =>
        previousScore +
        (Questions[index].correct_answer === answer) * scorePerQuestion
    )
  }
  const gotoNextQuestion = () => {
    if (answers[currentQuestionIndex]) {
      setCurrentQuestionIndex((idx) => idx + 1)
    }
  }
  const currentQuestion = {
    ...Questions[currentQuestionIndex],
    index: currentQuestionIndex
  }
  const getSubmittedAnswer = (index) => {
    return answers[index]
  }
  const values = {
    score,
    currentQuestion,
    submitAnswer,
    totalQuestionCount,
    gotoNextQuestion,
    getSubmittedAnswer
  }
  return <ExamContext.Provider value={values}>{children}</ExamContext.Provider>
}

export { ExamContext, ExamProvider }
