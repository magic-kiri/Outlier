import React from 'react'
import '../styles/Rating.css'

const Rating = ({ difficulty }) => {
  let rating = 5
  switch (difficulty) {
    case 'easy':
      rating = 1
      break
    case 'medium':
      rating = 2
      break
    case 'hard':
      rating = 3
      break
    default:
      break
  }

  const ratingStars = []
  for (let index = 0; index < 5; index++) {
    ratingStars.push(
      <span key={index} className={`Star ${index < rating ? 'filled' : ''}`} />
    )
  }
  return <div>{ratingStars}</div>
}

export default Rating
