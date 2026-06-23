// components/FAQSection.jsx
"use client";

import React, { useState } from 'react';
import './FAQ-section.css';

const FAQ_section = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What services does our company provide ?",
      answer: "We provide hydraulic system design, repair, maintenance, troubleshooting, installation, training and supply of hydraulic components and systems."
    },
    {
      id: 2,
      question: "Which industries do we serve ?",
      answer: "We serve industries such as steel, mining, manufacturing, construction, power plants, automotive and heavy equipment."
    },
    {
      id: 3,
      question: "Do we provide onsite hydraulic repair services ?",
      answer: "Yes, we offer onsite inspection, troubleshooting, maintenance and breakdown support services."
    },
    {
      id: 4,
      question: "What hydraulic components do we repair or supply ?",
      answer: "We work with hydraulic pumps, motors, cylinders, valves, hoses, power packs, filters and sealing systems."
    },
    {
      id: 5,
      question: "Do we offer emergency breakdown support ?",
      answer: "Yes, we provide quick-response breakdown and maintenance support to minimize downtime."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">
        <span style={{ color: 'rgb(248, 244, 244)' }}></span> FAQs
      </h2>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id}
            className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {faq.question}
              <span className="faq-arrow">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ_section;