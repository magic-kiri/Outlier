import React from 'react'
import Choice from './Choice'
import '../styles/AnswerSheet.css'

const AnswerSheet = ({ index, correctAnswer, incorrectAnswers }) => {
  const choices = incorrectAnswers.map((text, idx) => (
    <Choice
      index={index}
      key={idx}
      text={text}
      alignment={idx % 2 ? 'Right' : 'Left'}
    />
  ))
  choices.push(
    <Choice
      key={choices.length}
      index={index}
      alignment='Right'
      text={correctAnswer}
    />
  )
  return <div className='AnswerBox'>{choices}</div>
}

export default AnswerSheet
