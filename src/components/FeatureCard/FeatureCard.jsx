import React from 'react'
import './FeatureCard.css'

const FeatureCard = ({ key, title, imgUrl }) => {
  return (
    <div className='feature__card'>
      <img src={imgUrl} alt="feature" className='feature__card-img' />
      <h4 className='feature__card-title'>{title}</h4>
    </div>
  )
}

export default FeatureCard