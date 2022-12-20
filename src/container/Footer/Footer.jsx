import React from 'react'
import './Footer.css'

import { data, images } from '../../constants'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className="footer-content">
        <div className="footer-top">
          <div className="left-side">
            {data.footerLinks.map((footerLink) => (
              <div className="footerLink__container" key={footerLink.key}>
                <h4 className='footerLink-title caps-styling'>{footerLink.title}</h4>

                <ul className="footerLink-list">
                  {footerLink.links.map((link, index) => (
                    <li
                      key={link.name}
                      className='footerLink-item'
                    >
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="right-side">
            <img src={images.FooterLogo} alt="" />
            <h4 className='caps-styling newsletter-head'>Subscribe to our newsletter</h4>
            <p className="newsletter-content">The latest news, articles, and resources, sent to your inbox weekly.</p>

            <div className="newsletter-form">
              <input type="email" className='email-input' placeholder='Enter your email' />
              <button type='button' className='button-input'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider" />
          <p className="footer-copyright">© 2020 Flowbase.<br />Made by Thomas Price</p>
        </div>
      </div>
    </div>
  )
}

export default Footer