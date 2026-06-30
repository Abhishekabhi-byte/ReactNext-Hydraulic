// components/AboutSection.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about-top-line"></div>
      
      <section className="about-section">
        {/* LEFT IMAGE */}
        <div className="about-images">
          <div className="about-card">
            <img 
              src="about-hydraulic-banner.png" 
              alt="About Image"
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <div className="about-badge ">About us</div>
          
          <h2 className="about-heading">
            Resilient delivering, efficient <br /> solutions with innovation, quality.
          </h2>
          
          <p className="about-text text-aligns">
           Founded by Mr. R. A. Agarwal, a mechanical engineer with extensive expertise in Hydraulics and filtration systems, RESILIENT has built a strong reputation for delivering reliable industrial solutions.

With a long-standing association with Parker Hannifin since 1997, Mr. Agarwal was among the first distributors of Parker products in India. This experience provided deep industry insight and helped shape the company’s technical foundation.

Over the years, it became clear that industries required more than just Hydraulic and pneumatic products — they needed dependable technical partners capable of offering complete engineering and service solutions.
<br/>
RESILIENT was established to fulfill this growing demand by combining product expertise, technical support, and solution-driven services under one roof. Today, the company stands as one of the pioneering technical solution providers in Eastern India.
          </p>
          
          <div className="about-feature-box">
            <h3>Our Key Features</h3>
            <ul>
              <li>All-in-one industrial solutions</li>
              <li>Advanced precision engineering</li>
              <li>Reliable manufacturing systems</li>
              <li>End-to-end production services</li>
            </ul>
          </div>
          
          <a href="About_us" className="about-btn">Know More</a>
        </div>
      </section>
    </>
  );
};

export default About;