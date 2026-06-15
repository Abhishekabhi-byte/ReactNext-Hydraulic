// components/TextSlideSection.jsx
import React from 'react';
import './text-slider.css';

const TextSlider = () => {
  const text = "Reliable Power, Proven Results";
  
  return (
    <section className="text-slide-section">
      <div className="text-slide-track">
        <span className="text-slide-text">
          {text}
        </span>
        <span className="text-slide-text">
          {text}
        </span>
        <span className="text-slide-text">
          {text}
        </span>
      </div>
    </section>
  );
};

export default TextSlider;