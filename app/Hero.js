// components/HeroSection.jsx
 "use client";

import { useState, useEffect } from 'react';
import './Hero.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([
    {
      id: 1,
      image: 'home_page_slider1.png',
      badge: 'Resilient Technical Solution Pvt. Ltd',
      title: 'Your Hydraulics Solution Partner',
      description: ''
    },
    {
      id: 2,
      image: 'home_page_slider.png',
      badge: 'Resilient Technical Solution Pvt. Ltd',
      title: 'Engineering Reliability into Motion',
      description: ''
    },
    {
      id: 3,
      image: 'index-hero-slider3.png',
      badge: 'Resilient Technical Solution Pvt. Ltd',
      title: 'Precision. Performance. Progress',
      description: ''
    },
     {
      id: 4,
      image: 'home_page_slider (2).png',
      badge: 'Resilient Technical Solution Pvt. Ltd',
      title: 'Strong Solutions and Reliable Results',
      description: '',
      className:"contain"
    }
  ]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getSlideClass = (index) => {
    if (index === currentSlide) return 'heroAurora-slide active ';
    if (index === (currentSlide - 1 + slides.length) % slides.length) return 'heroAurora-slide prev';
    return 'heroAurora-slide';
  };

  return (
    <div className="vce-row-container">
      <div 
        className="vce-row vce-row--col-gap-30 vce-row-equal-height vce-row-content--top" 
        data-vce-full-width="true" 
        data-vce-stretch-content="true" 
        id="el-7055be79"
      >
        <div className="vce-content-background-container"></div>
        <div className="vce-row-content" data-vce-element-content="true">
          <div 
            className="vce-col vce-col--md-auto vce-col--xs-1 vce-col--xs-last vce-col--xs-first vce-col--sm-last vce-col--sm-first vce-col--md-last vce-col--lg-last vce-col--xl-last vce-col--md-first vce-col--lg-first vce-col--xl-first" 
            id="el-e02a1ef8"
          >
            <div className="vce-col-inner">
              <div className="vce-col-content">
                <div className="vce-raw-html">
                  <div className="vce-raw-html-wrapper" id="el-09a85a62">
                    <div className="heroAurora-slider">
                      {slides.map((slide, index) => (
                        <div
                          key={slide.id}
                          className={getSlideClass(index)}
style={{
  backgroundImage: `url('${slide.image}')`,
  backgroundSize: `${slide.className} ? contain : cover `,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
}}
                      
                        >
                          <div className="heroAurora-overlay"></div>
                          <div className="heroAurora-content">
                            <div className="heroAurora-badge">{slide.badge}</div>
                            <h1 className="heroAurora-title">{slide.title}</h1>
                            <p className="heroAurora-text">{slide.description}</p>
                            <div className="heroAurora-buttons">
                             
                           
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="heroAurora-nav heroAurora-prev" onClick={prevSlide}>
                        ❮
                      </div>
                      <div className="heroAurora-nav heroAurora-next" onClick={nextSlide}>
                        ❯
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;