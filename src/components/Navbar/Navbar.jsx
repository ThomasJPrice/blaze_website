import React, {useState} from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

import './Navbar.css'
import { images } from '../../constants'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="nav__container">
      <div className="nav__logo">
        <img src={images.Logo} alt="logo" />
      </div>

      <div className="nav__links">

        <ul className="nav__links-list">
          <li className="nav__link"><a href="#Product">Product</a></li>
          <li className="nav__link"><a href="#Company">Company</a></li>
          <li className="nav__link"><a href="#Integrations">Integrations</a></li>
          <li className="nav__link"><a href="#Pricing">Pricing</a></li>
        </ul>

      </div>

      <div className="nav__contact">

        <button type='button' className='nav__contact-btn main-btn'>Contact</button>

      </div>

      {/* FOR SMALL SCREENS */}

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' style={{cursor: 'pointer'}} fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />

            <ul className="nav__links-list_smallscreen">
              <li className="nav__link"><a href="">Product</a></li>
              <li className="nav__link"><a href="">Company</a></li>
              <li className="nav__link"><a href="">Integrations</a></li>
              <li className="nav__link"><a href="">Pricing</a></li>
            </ul>
          </div>
        )}


      </div>

      {/* <img src={images.Gradient} alt="" className="gradient" /> */}
    </nav>
  )
}

export default Navbar