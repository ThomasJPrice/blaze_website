import React from 'react'
import './Insights.css'

import { images } from '../../constants'
import { AiOutlineRight } from 'react-icons/ai'

const Insights = () => {
  return (
    <section className='section__margin insights__container'>
      <div className="insights-left">
        <img src={images.Squiggle} alt="squiggle" className='squiggle__insights' />
        <h1 className='insights__heading'>Get insights that help your business grow</h1>

        <div className="ticks__container">
          <div className="tick">
            <img src={images.OrangeTick} alt="tick" />
            <p>Live Visitor Count shows the number of people</p>
          </div>

          <div className="tick">
            <img src={images.OrangeTick} alt="tick" />
            <p>How much was entered from which device</p>
          </div>

          <div className="tick">
            <img src={images.OrangeTick} alt="tick" />
            <p>Percentage of refferal sites</p>
          </div>
        </div>

        <button type='button' className='secondary-btn'>Get Started <AiOutlineRight /></button>
      </div>

      <div className="insights-right">
        <img src={images.InsightsImg} alt="insights" />
      </div>
    </section>
  )
}

export default Insights