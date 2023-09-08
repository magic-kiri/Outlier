import { useEffect, useState } from 'react'
import Button from '../Button'
import { useExam } from '../../hooks/useExam'
import '../../styles/Choice.css'

const Choice = ({ index, text, alignment = '' }) => {
  const { submitAnswer, getAnswer, getSubmittedAnswer } = useExam()
  const [isClicked, setIsClicked] = useState(false)
  const submittedAnswer = getSubmittedAnswer(index)

  const handleClick = () => {
    setIsClicked(true)
    submitAnswer(index, text)
  }

  useEffect(() => {
    setIsClicked(false)
  }, [index])
  const isCorrectAnswer =
    text === getAnswer(index) && !isClicked && submittedAnswer

  return (
    <div className={`ChoiceBox ${alignment}`}>
      <Button
        className={`GridButton ${isClicked ? 'Clicked' : ''} ${
          isCorrectAnswer ? 'Visible' : ''
        }`}
        onClick={handleClick}
        disabled={!!submittedAnswer}
      >
        {decodeURIComponent(text)}
      </Button>
    </div>
  )
}

export default Choice
