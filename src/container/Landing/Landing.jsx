import React from 'react'
import './Landing.css'

import { images } from '../../constants'
import { AiOutlineRight } from 'react-icons/ai'

const Landing = () => {
  return (
    <div className='landing__container section__margin'>
      <div className="landing__content">
        <div className="landing__content-left">
          <h1 className="content__title">Discover your growth with advanced analytics</h1>
          <p className='content__subtitle'>Premium webflow template for your growing SaaS and technology businesses. Win more clients.</p>
          
          <div className="content__buttons">
            <button type='button' className='secondary-btn'>Get Started <AiOutlineRight /></button>
            <a href="">Learn More</a>
          </div>
        </div>

        <div className="landing__content-right">
          <img src={images.LandingImg} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Landing