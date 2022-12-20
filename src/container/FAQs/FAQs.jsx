import React from 'react'
import './FAQs.css'

import { AiOutlinePlus } from 'react-icons/ai'

const FAQs = () => {
  return (
    <div className='section__margin faqs__container'>
      <div className="faqs__title">
        <div className="faqs__tag-div">
          <h4 className="faqs__tag">FAQS</h4>
        </div>
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="faqs__content">
        <div className="faq">
          <h4>When will Blaze.io be available?</h4>
          <AiOutlinePlus color='var(--color-darkBlue)' fontSize={24} cursor='pointer' />
        </div>

        <div className="faq">
          <h4>What do I need to get started?</h4>
          <AiOutlinePlus color='var(--color-darkBlue)' fontSize={24} cursor='pointer' />
        </div>

        <div className="faq">
          <h4>How can I use Blaze.io?</h4>
          <AiOutlinePlus color='var(--color-darkBlue)' fontSize={24} cursor='pointer' />
        </div>

        <div className="faq">
          <h4>What can I use Blaze.io for?</h4>
          <AiOutlinePlus color='var(--color-darkBlue)' fontSize={24} cursor='pointer' />
        </div>

        <div className="faq">
          <h4>How do I reset my password?</h4>
          <AiOutlinePlus color='var(--color-darkBlue)' fontSize={24} cursor='pointer' />
        </div>
      </div>
    </div>
  )
}

export default FAQs