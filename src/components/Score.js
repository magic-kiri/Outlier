import React from 'react'
import ScoreProgressBar from './ScoreProgressBar'
import '../styles/Score.css'

const Score = () => {
  const currentCaseScore = 30
  const bestCaseScore = 90
  return (
    <div className='Score'>
      <div className='TitleBox'>
        <h4>Score: {currentCaseScore}%</h4>
        <h4>Max Score: {bestCaseScore}%</h4>
      </div>
      <ScoreProgressBar
        bestCaseScore={90}
        currentCaseScore={currentCaseScore}
        worstCaseScore={20}
      />
    </div>
  )
}

export default Score
