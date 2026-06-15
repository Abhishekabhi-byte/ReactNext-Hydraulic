// components/ContactSection.jsx
'use client';

import React, { useState } from 'react';
import './Form-section.css';

const Form_section = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using BACKEND_URL from .env file
      const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000/api/';
      const endpoint = `${BACKEND_URL}contact`; // Results in: http://localhost:5000/api/contact
      
      console.log('Sending to:', endpoint); // For debugging
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        console.error('Server error:', data);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT: FORM */}
        <div className="contact-left">
          <div className="contact-overlay"></div>
          <div className="contact-content">
            <h2>Get In Touch!</h2>
            <p>
              "We respond quickly, work transparently, and focus on long-term partnerships."
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Name..." 
                value={formData.name}
                onChange={handleChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email..." 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="message"
                placeholder="Message..." 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Contact Our Team'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="contact-success-message">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="contact-error-message">
                  ✗ Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* RIGHT: MAP */}
        <div className="contact-right">
          <h2>Our Location!</h2>

          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6206.738065991157!2d86.10333584125662!3d22.8106034906407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e500504e900b%3A0xb22a921efdb36caf!2sRESILIENT%20TECHNICAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1778571351691!5m2!1sen!2sin"
              title="Our Location Map"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form_section;