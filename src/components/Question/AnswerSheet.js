import { useMemo } from 'react'
import Choice from './Choice'
import '../../styles/AnswerSheet.css'
import { randomShuffle } from '../../lib/shuffle'

const AnswerSheet = ({ index, correctAnswer, incorrectAnswers }) => {
  const options = useMemo(() => {
    return randomShuffle([...incorrectAnswers, correctAnswer])
  }, [correctAnswer, incorrectAnswers])

  const choices = options.map((text, idx) => (
    <Choice
      index={index}
      key={idx}
      text={text}
      alignment={idx % 2 ? 'Right' : 'Left'}
    />
  ))

  return <div className='AnswerBox'>{choices}</div>
}

export default AnswerSheet
