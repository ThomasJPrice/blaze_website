import React from 'react'
import './Integrations.css'

import { images } from '../../constants'
import { AiOutlineRight } from 'react-icons/ai'

const Integrations = () => {
  return (
    <section className='integrations__container section__margin' id='Integrations'>
      <div className="integration-top">
        <div className="top-left">
          <h1 className="integration__heading">Integrations</h1>
          <p className="integration__subheading">Blaze.io simplifies the process of providing great integrations to your company, from comprehensive API options.</p>
        </div>
        <button type='button' className='secondary-btn'>See All Integrations <AiOutlineRight /></button>
      </div>

      <div className="integration-bottom">
        <img src={images.IntegrationsImg} alt="" />
      </div>
    </section>
  )
}

export default Integrations