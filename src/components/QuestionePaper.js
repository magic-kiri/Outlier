import React from 'react'

const QuestionPaper = ({ question }) => {
  return (
    <div>
      <h1>{decodeURIComponent(question)}</h1>
    </div>
  )
}

export default QuestionPaper
