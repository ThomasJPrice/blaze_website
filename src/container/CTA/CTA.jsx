import React from 'react'
import './CTA.css'

import { AiOutlineRight } from 'react-icons/ai'
import { images } from '../../constants'

const CTA = () => {
  return (
    <div className='cta__container'>
      <h1 className="cta__title">Build a beatiful site.</h1>
      <h1 className="cta__title">Grab the Blaze template today!</h1>
      <button type='button' className='secondary-btn'>Purchase Template <AiOutlineRight /></button>
      <img src={images.CTA} alt="" />
    </div>
  )
}

export default CTA