import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './Faqs.css';

const Faqs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows you to return products within 30 days of purchase with a full refund, provided they are in their original condition."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, we will send you an email with the tracking information. You can also track your order in your account section on our website."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support. You can reach us via phone, email, or live chat on our website."
    },
    {
      question: "Can I change my shipping address?",
      answer: "You can change your shipping address before your order is shipped. Please contact our customer support team for assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit cards, PayPal, and bank transfers."
    }
  ];

  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className='faq-header'>
      <div className='sub-faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Here are answers to some of our frequently asked questions</p>
      </div>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleAnswer(index)}>
              {faq.question}
              <FontAwesomeIcon 
                icon={openQuestion === index ? faChevronUp : faChevronDown} 
                className='faq-icon'
              />
            </div>
            {openQuestion === index && (
              <div className='faq-answer'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
