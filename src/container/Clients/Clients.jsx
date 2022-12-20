import React from 'react'
import './Clients.css'

import { data, images } from '../../constants'
import { ReviewCard } from '../../components'

const Clients = () => {
  return (
    <section className='section__margin clients__container'>
      <div className="clients-top">
        <div className="reviews__tag-div">
          <h4 className="reviews__tag">REVIEWS</h4>
        </div>
        <h1 className="clients__heading">Here’s what our amazing clients are saying</h1>
      </div>

      <div className="clients-bottom">
        <div className="reviews__grid">
          {data.reviews.map((review, index) => (
            <ReviewCard 
              key={review.name + index}
              {...review}
            />
          ))}
          <img src={images.GridBg} alt="bg" className='grid-bg' />
        </div>
      </div>
    </section>
  )
}

export default Clients