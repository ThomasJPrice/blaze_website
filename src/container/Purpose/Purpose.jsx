import React from 'react'
import './Purpose.css'

import { images } from '../../constants'

const Purpose = () => {
  return (
    <div className="purpose__container section__margin" id='Company'>
      <div className="purpose__content">
        <img src={images.Squiggle} alt="Squiggle" className='squiggle-purpose' />
        <h1 className="purpose__heading">Purpose built for leading tech business & products.</h1>
        <p className="purpose__subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor</p>
        <button type='button' className='main-btn'>Get Started</button>
      </div>
      
      <img src={images.PurposeImg} alt="map" className='purpose__map' />
    </div>
  )
}

export default Purpose