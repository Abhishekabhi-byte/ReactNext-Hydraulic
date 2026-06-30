"use client";

import React from 'react';
import './Why-choose-us.css';


const WhychooseUs = () => {
  const features = [
    {
      id: 1,
      icon: "⚙️",
      title: "Technical Expertise",
      description: "We have skilled engineers and technicians with strong knowledge of Hydraulic systems, components, design, troubleshooting and maintenance."
    },
    {
      id: 2,
      icon: "🛠️",
      title: "Quality Products & Services",
      description: "We use high-quality Hydraulic pumps, valves, cylinders, hoses and seals etc. that ensure durability and performance."
    },
    {
      id: 3,
      icon: "🏭",
      title: "Industry Experience",
      description: "We understand industrial requirements and can provide proven solutions for different applications and machinery."
    },
    {
      id: 4,
      icon: "✏️",
      title: "Customization Capability",
      description: "We can design and modify systems according to customer-specific requirements."
    },
    {
      id: 5,
      icon: "✅",
      title: "Use of Modern Technology",
      description: "We use advanced diagnostic tools, automation, updated Hydraulic technologies to improve system efficiency and reliability."
    },
    {
      id: 6,
      icon: "🤝",
      title: "Reliable After-Sales Support",
      description: "Our quick service support, maintenance assistance, spare parts availability reduce downtime and improve operational efficiency."
    }
  ];

  return (
    <section className="aurora-why-section">
      <div className="aurora-why-container">
        <div className="aurora-why-header">
          <span className="aurora-why-badge">Why Choose Us</span>
          <h2>Why Resilient Technical Solutions?</h2>
          <p>Delivering precision engineering, durability and trusted service across all industries.</p>
        </div>

        <div className="aurora-why-grid">
          {features.map((feature) => (
            <div key={feature.id} className="aurora-why-card">
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhychooseUs;