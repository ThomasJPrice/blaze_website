import React from 'react'
import './Dashboard.css'

import { images } from '../../constants'

const Dashboard = () => {
  return (
    <section className='section__margin dashboard__container'>
      <div className="dashboard-top">
        <h1 className="dashboard__heading">Powerful Dashboard to Capture All Your Live Data</h1>
        <p className="dashboard__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
      </div>

      <div className="dashboard-bottom">
        <img src={images.DashboardImg} alt="" />
      </div>
    </section>
  )
}

export default Dashboard