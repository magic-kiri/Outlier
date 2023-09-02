import React from 'react'
import ScoreProgressBar from './Bar/ScoreProgressBar'
import '../styles/Score.css'
import { useExam } from '../hooks/useExam'

const Score = () => {
  const { getCurrentScore, getBestPossibleScore, getWorstPossibleScore } =
    useExam()
  const currentCaseScore = getCurrentScore()
  const bestCaseScore = getBestPossibleScore()
  const worstCaseScore = getWorstPossibleScore()
  return (
    <div className='Score'>
      <div className='TitleBox'>
        <h4>Score: {currentCaseScore}%</h4>
        <h4>Max Score: {bestCaseScore}%</h4>
      </div>
      <ScoreProgressBar
        bestCaseScore={bestCaseScore}
        currentCaseScore={currentCaseScore}
        worstCaseScore={worstCaseScore}
      />
    </div>
  )
}

export default Score
