// components/ParkerSection.jsx
"use client";

import React from 'react';
import './Parker-section.css';

const Parkersection = () => {
  return (
    <section className="about-parkr-section">
      <div className="about-parkr-wrapper">
        {/* IMAGE CARD */}
        <div className="about-parkr-image-card">
          <img 
            src="/parker-product.png" 
            alt="Parker Hydraulic Products"
            loading="lazy"
          />
        </div>

        {/* CONTENT CARD */}
        <div className="about-parkr-content-card">
          <span className="about-parkr-badge">Parker Hydraulics</span>

          <h2 className="about-parkr-title">
            Parker Reliable <span style={{ color: '#007bff' }}>Hydraulic Solutions</span>
          </h2>

          <p className="about-parkr-text">
            We are a trusted distributor of Parker Hydraulic products, offering complete solutions including system assembly, reconditioning, fabrication and maintenance services.
          </p>

          <ul className="about-parkr-list">
            <li> Reliable Hydraulic systems for diverse industries.</li>
            <li> High-performance components ensure efficiency.</li>
            <li> Engineered for durability and long service life.</li>
            <li> Global support and Hydraulic expertise worldwide.</li>
          </ul>

          <a href="/Parker" className="about-parkr-btn">
            Explore Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Parkersection;