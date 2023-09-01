import React from 'react'
import '../styles/ScoreProgressBar.css'

const ScoreProgressBar = ({
  bestCaseScore,
  currentCaseScore,
  worstCaseScore
}) => {
  return (
    <div className='ScoreBar'>
      <div className='BestCase' style={{ width: `${bestCaseScore}%` }} />
      <div className='Current' style={{ width: `${currentCaseScore}%` }} />
      <div className='WorstCase' style={{ width: `${worstCaseScore}%` }} />
    </div>
  )
}

export default ScoreProgressBar
