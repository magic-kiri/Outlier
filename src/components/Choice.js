import { useState } from 'react'
import '../styles/Choice.css'
import Button from './Button'
import { useExam } from '../hooks/useExam'

const Choice = ({ index, text, alignment = '' }) => {
  const { submitAnswer } = useExam()
  const [isClicked, setIsClicked] = useState(false)
  // let isDisable = false
  // if (text === getSubmittedAnswer(index)) {
  //   isDisable = true
  // }
  const handleClick = () => {
    setIsClicked(true)
    submitAnswer(index, text)
  }
  return (
    <div className={`ChoiceBox ${alignment}`}>
      <Button
        className={`GridButton ${isClicked ? 'Clicked' : ''}`}
        onClick={handleClick}
      >
        {decodeURIComponent(text)}
      </Button>
    </div>
  )
}

export default Choice
