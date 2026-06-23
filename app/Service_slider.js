// components/ServicesSection.jsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import './service-slider.css';

const Services_slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);
  const slidesRef = useRef([]);
  
  const services = [
    {
      id: 1,
      title: "Troubleshooting Hydraulic",
      image: "troubleshooting.png",
      link: "/Service/Troubleshootingof_Hydraulic_systems"
    },
    {
      id: 2,
      title: "Testing Pumps Valves & Motors",
      image: "pump-repair-testing.png",
      link: "/Service/Testingof_Pumps_Valves_Motors"
    },
    {
      id: 3,
      title: "Reconditioning Hydraulic",
      image: "reconditioning.png",
      link: "/Service/ReconditioningHydraulic"
    },
    {
      id: 4,
      title: "Design Hydraulic System",
      image: "service-design.png",
      link: "/Service/Design_of_Hydraulic_Systems"
    },
     {
      id: 5,
      title: "Commissioning Hydraulic System",
      image: "commissioning.png",
      link: "/Service/Commissioningof_Hydraulic_Systems"
    }
  ];

  const updateVisibleSlides = useCallback(() => {
    if (window.innerWidth <= 768) {
      setVisibleSlides(1);
    } else if (window.innerWidth <= 1024) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(3);
    }
  }, []);

  const getSlideWidth = useCallback(() => {
    if (trackRef.current && slidesRef.current[0]) {
      return slidesRef.current[0].offsetWidth + 30; // 30px gap
    }
    return 0;
  }, []);

  const moveSlider = useCallback((index) => {
    if (trackRef.current) {
      const slideWidth = getSlideWidth();
      trackRef.current.style.transition = "transform 0.6s ease";
      trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [getSlideWidth]);

  const jumpSlider = useCallback((index) => {
    if (trackRef.current) {
      const slideWidth = getSlideWidth();
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
  }, [getSlideWidth]);

  const nextSlide = useCallback(() => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex(prev => prev + 1);
  }, [isMoving]);

  const prevSlide = useCallback(() => {
    if (isMoving) return;
    setIsMoving(true);
    setCurrentIndex(prev => prev - 1);
  }, [isMoving]);

  // Auto-play functionality
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isMoving) {
        setIsMoving(true);
        setCurrentIndex(prev => prev + 1);
      }
    }, 3000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isMoving]);

  // Handle slide transition end
  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsMoving(false);
      
      if (slidesRef.current.length > 0) {
        const totalSlides = slidesRef.current.length;
        const middleIndex = Math.floor(totalSlides / 3);
        
        if (currentIndex >= totalSlides - visibleSlides) {
          setCurrentIndex(middleIndex);
          jumpSlider(middleIndex);
        } else if (currentIndex < middleIndex) {
          const newIndex = middleIndex + (visibleSlides - 1);
          setCurrentIndex(newIndex);
          jumpSlider(newIndex);
        }
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('transitionend', handleTransitionEnd);
      return () => track.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [currentIndex, visibleSlides, jumpSlider]);

  // Update visible slides on resize
  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => window.removeEventListener('resize', updateVisibleSlides);
  }, [updateVisibleSlides]);

  // Move slider when currentIndex changes
  useEffect(() => {
    if (trackRef.current && slidesRef.current.length > 0) {
      moveSlider(currentIndex);
    }
  }, [currentIndex, moveSlider]);

  // Clone slides for infinite loop
  const getClonedSlides = () => {
    return [...services, ...services, ...services];
  };

  return (
    <section className="aurora-service-slider">
      <div className="aurora-service-overlay"></div>

      <div className="aurora-service-header">
        <div className="aurora-service-badge">Our Services</div>
        <h2 className="aurora-service-heading">
            End-to-end manufacturing
design, engineering,  <br /> production and quality control
        </h2>
      </div>

      <div className="aurora-service-carousel">
        <button className="aurora-service-prev" onClick={prevSlide}>
          ❮
        </button>

        <div className="aurora-service-track" ref={trackRef}>
          {getClonedSlides().map((service, index) => (
            <div 
              key={`${service.id}-${index}`} 
              className="aurora-service-slide"
              ref={el => slidesRef.current[index] = el}
            >
              
                <img 
                  decoding="async" 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                />
              
              <div className="aurora-service-caption">
                <h3>{service.title}</h3>
                <a href={service.link} className="aurora-learn">
                  View More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="aurora-service-next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <div className="aurora-service-btn-wrap">
        <a href="/Service/ReconditioningHydraulic">
          <button className="aurora-service-btn">Know More</button>
        </a>
      </div>
    </section>
  );
};

export default Services_slider;