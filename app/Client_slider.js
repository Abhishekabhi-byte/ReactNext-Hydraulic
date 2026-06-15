// components/BrandsSlider.jsx
'use client';

import React, { useEffect, useRef } from 'react';
import './Client-slider.css';

const Client_slider = () => {
  const trackRef = useRef(null);
  
  const brands = [
    { id: 1, name: "Brand 1", image: "/Aditya-birla.jpeg" },
    { id: 2, name: "Brand 2", image: "/Adani_power-client.png" },
    { id: 3, name: "Brand 3", image: "/DVC-client.png" },
    { id: 4, name: "Brand 4", image: "/Flender_Graffenstaden-client.jpeg" },
    { id: 5, name: "Brand 5", image: "/HP-client.jpg" },
    { id: 6, name: "Brand 6", image: "/Indian_rail-client.jpeg" },
    { id: 7, name: "Brand 7", image: "/Jindal-Steel-Logo-client.avif" },
    { id: 8, name: "Brand 8", image: "jsw-client.png" },
    { id: 9, name: "Brand 9", image: "/ntpc-client.png" },
    { id: 10, name: "Brand 10", image: "/OPGC-client.webp" },
    { id: 11, name: "Brand 11", image: "/RKFL-client.png" },
    { id: 12, name: "Brand 12", image: "/shree_cement-client.jpeg" },
    { id: 13, name: "Brand 13", image: "/Sail-client.png" },
    { id: 14, name: "Brand 14", image: "/Tata_motor-client.png" },
    { id: 15, name: "Brand 15", image: "/Tata_power-client.jpeg" },
    { id: 16, name: "Brand 16", image: "/tata_bluescope.jpeg" },
    { id: 17, name: "Brand 17", image: "/tata-steel.jpg" },
       { id: 18, name: "Brand 18", image: "/Ultratech_Cement_Logo-client.svg" },
    
    
  ];

  // Duplicate logos for seamless infinite scroll
  useEffect(() => {
    if (trackRef.current) {
      // Clone the inner HTML for infinite scroll effect
      const originalContent = trackRef.current.innerHTML;
      trackRef.current.innerHTML = originalContent + originalContent;
    }
  }, []);

  return (
    <section className="aurora-logo-slider">
      <h2 className="aurora-logo-title">
        Our <span>Clients</span>
      </h2>
      <div className="aurora-logo-wrapper">
        <div className="aurora-logo-track" ref={trackRef}>
          {brands.map((brand) => (
            <div key={brand.id} className="aurora-logo-slide">
              <img 
                src={brand.image} 
                alt={brand.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client_slider;