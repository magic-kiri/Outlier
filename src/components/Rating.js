import React from 'react'
import './Rating.css'

const Rating = ({ difficulty }) => {
  let rating = 3
  switch (difficulty) {
    case 'easy':
      rating = 1
      break
    case 'medium':
      rating = 2
      break
  }

  const ratingStars = []
  for (let index = 0; index < 5; index++) {
    ratingStars.push(
      <span id={index} className={`Star ${index < rating ? 'filled' : ''}`} />
    )
  }
  return <div>{ratingStars}</div>
}

export default Rating
