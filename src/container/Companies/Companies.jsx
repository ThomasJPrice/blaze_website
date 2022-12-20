import React from 'react'
import './Companies.css'

import { images } from '../../constants'

const Companies = () => {
  return (
    <div className='companies__container section__margin'>
      <h1 className="headText-blue">Trusted Companies</h1>

      <div className="companies__list">
        <img src={images.company01} alt="company01" />
        <img src={images.company02} alt="company02" />
        <img src={images.company03} alt="company03" />
        <img src={images.company04} alt="company04" />
        <img src={images.company05} alt="company05" />
      </div>
    </div>
  )
}

export default Companies