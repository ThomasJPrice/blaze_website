import React from 'react'
import './Features.css'

import { images, data } from '../../constants'
import { FeatureCard } from '../../components'

const Features = () => {
  return (
    <div className='feature__container section__margin' id='Product'>
      <div className="features-left">
        <img src={images.FeatureImg} alt="" />
      </div>

      <div className="features-right">
        <h1 className="feature__heading">All Features</h1>
        <p className="feature__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

        <div className="feature__grid">
          {data.features.map((feature, index) => (
            <FeatureCard
            key={feature + index}
            {...feature} />
          ))}
        </div>
      </div>

      <div className="bg-line" />
    </div>
  )
}

export default Features