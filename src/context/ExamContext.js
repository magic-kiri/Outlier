import { useState, createContext } from 'react'
import Questions from '../questions.json'

const ExamContext = createContext({})

const ExamProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const totalQuestionCount = Questions.length

  const submittedChoices = Object.entries(answers)
  const totalSubmissionCount = submittedChoices.length
  let currentQuestion = null
  if (currentQuestionIndex < totalQuestionCount) {
    currentQuestion = {
      ...Questions[currentQuestionIndex],
      index: currentQuestionIndex
    }
  }

  const completedPercentage = Math.min(
    (100 * currentQuestionIndex) / totalQuestionCount,
    100
  )

  const submitAnswer = (index, answer) => {
    if (answers[index]) {
      return
    }

    setAnswers((prevAns) => ({ ...prevAns, [index]: answer }))
  }
  const gotoNextQuestion = () => {
    if (answers[currentQuestionIndex]) {
      setCurrentQuestionIndex((idx) => idx + 1)
    }
  }
  const getSubmittedAnswer = (index) => {
    return answers[index]
  }
  const getAnswer = (index) => {
    return Questions[index].correct_answer
  }

  const getCorrectSubmissionCount = () => {
    return submittedChoices.reduce(
      (sum, [key, value]) => sum + (Questions[key].correct_answer === value),
      0
    )
  }

  const getBestPossibleScore = () => {
    const totalSubmissionCount = submittedChoices.length
    const conrrectSubmissionCount = getCorrectSubmissionCount()
    const remainingSubmissionCount = totalQuestionCount - totalSubmissionCount

    const score =
      (100 * (conrrectSubmissionCount + remainingSubmissionCount)) /
      totalQuestionCount
    return Math.round(score)
  }
  const getWorstPossibleScore = () => {
    const conrrectSubmissionCount = getCorrectSubmissionCount()
    const score = 100 * (conrrectSubmissionCount / totalQuestionCount)
    return Math.round(score)
  }

  const getCurrentScore = () => {
    const correctSubmitionCount = getCorrectSubmissionCount()
    let score = 0
    if (totalSubmissionCount) {
      score = (100 * correctSubmitionCount) / totalSubmissionCount
    }
    return Math.round(score)
  }

  const values = {
    currentQuestion,
    completedPercentage,
    submitAnswer,
    getAnswer,
    totalQuestionCount,
    gotoNextQuestion,
    getSubmittedAnswer,
    getBestPossibleScore,
    getCurrentScore,
    getWorstPossibleScore
  }
  return <ExamContext.Provider value={values}>{children}</ExamContext.Provider>
}

export { ExamContext, ExamProvider }
