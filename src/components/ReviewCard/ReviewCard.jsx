import React from 'react'
import { images } from '../../constants'
import './ReviewCard.css'

const ReviewCard = ({ title, name, imgUrl, stars, content }) => {
  return (
    <div className='review__card'>
        <div className="review__card-top">
            <img src={imgUrl} alt="profile" />
            <div className="review__info">
                <h3 className="review__name">{name}</h3>
                <p className="review__title">{title}</p>
                <img src={stars} alt="" />
            </div>
        </div>

        <div className="review__card-bottom">
            <p className="review__content">
                {content}
            </p>
        </div>
    </div>
  )
}

export default ReviewCard