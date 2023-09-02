import { useState, createContext, useEffect, useMemo } from 'react'

const ExamContext = createContext({})

const loadQuestions = async (setQuestions) => {
  try {
    const response = await fetch('http://localhost:4000/questions')
    const data = await response.json()
    setQuestions(data)
  } catch (error) {
    console.log(error)
    alert('Make sure the backend server is running on port 4000')
  }
}

const ExamProvider = ({ children }) => {
  const [questions, setQuestions] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    loadQuestions(setQuestions)
  }, [])

  const submittedChoices = useMemo(() => Object.entries(answers), [answers])
  const totalSubmissionCount = useMemo(
    () => submittedChoices.length,
    [submittedChoices]
  )

  let totalQuestionCount = useMemo(
    () => (questions === null ? null : questions.length),
    [questions]
  )
  let currentQuestion = useMemo(() => {
    if (
      totalQuestionCount === null ||
      totalQuestionCount <= currentQuestionIndex
    ) {
      return null
    }

    return {
      ...questions[currentQuestionIndex],
      index: currentQuestionIndex
    }
  }, [totalQuestionCount, currentQuestionIndex, questions])

  const isLoading = useMemo(() => questions === null, [questions])

  const completedPercentage = useMemo(
    () => Math.min((100 * currentQuestionIndex) / totalQuestionCount, 100),
    [currentQuestionIndex, totalQuestionCount]
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
    return questions[index].correct_answer
  }

  const getCorrectSubmissionCount = () => {
    return submittedChoices.reduce(
      (sum, [key, value]) => sum + (questions[key].correct_answer === value),
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
    isLoading,
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
