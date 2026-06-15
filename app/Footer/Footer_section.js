// components/Footer.jsx
import React from 'react';
import './Footer_section.css';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";






const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="aurora-footer">
      <div className="footer-container">
        {/* Left Logo Section */}
        <div className="footer-col footer-brand">
          <img 
            src="/resilient.fot-png.png" 
            alt="Resilient Hydraulic Logo" 
            className="footer-logo" 
          />
          <b className='font-bold '>Fast, Reliable, Resilient </b>
          <p className='text-justify'>
            We are a forward-thinking company focused on delivering durable, high-quality industrial solutions. 
            With strong engineering expertise and adaptive processes, we ensures efficiency even in changing market conditions.
          </p>
     <div className="flex justify-center lg:justify-start items-center gap-4 text-xl mt-1">
  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookSquare />
  </a>

  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X (Twitter)"
  >
    <FaSquareXTwitter />
  </a>
</div>
       
     
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About_us">About us</a></li>
            <li><a href="/Parker">Parker</a></li>
            <li><a href="/Service/ReconditioningHydraulic">Services</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/Contact-us">Contact us</a></li>
          </ul>
        </div>


        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="/Service/ReconditioningHydraulic">Reconditioning Hydraulic components & systems</a></li>
            <li><a href="/Service/Troubleshootingof_Hydraulic_systems">Troubleshooting Hydraulic systems</a></li>
            <li><a href="/Service/Design_of_Hydraulic_Systems">Design of Hydraulic Systems</a></li>
            <li><a href="/Service/Commissioningof_Hydraulic_Systems">Commissioning Hydraulic Systems</a></li>
             <li><a href="/Service/Testingof_Pumps_Valves_Motors">Testing pumps, valves and motors</a></li>
          </ul>
        </div>

        {/* Explore Our Products */}
        <div className="footer-col">
          <h4>Explore Our Products</h4>
          <ul>
            <li><a href="/Contact-us">Hose assemblies</a></li>
            <li><a href="/Contact-us">Rigid Tube Assemblies</a></li>
            <li><a href="/Contact-us">Hydraulic Power Packs...</a></li>
            <li><a href="/Parker">Parker Products</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact us</h4>
          <ul className="footer-contact-list">
            <li>
              
            <p className='flex items-center justify-center gap-2'><IoCallOutline size={20}  />  <a href="tel:+91 99559 97659">+91 99559 97659 | +91 95701 95738</a></p>
            </li>
            <li>
              <p className='flex text-justify gap-2'><MdOutlineMail size={23} />  Email:- <a href="mailto:Info@resilientt.in"> mr@resilientts.in  Info@resilientt.in </a></p>
            </li>
            <li>
              {/* Fixed: Changed 'flex' to 'flex-start' and removed items-center */}
              <p className='flex items-start gap-2'>
                <IoLocationSharp size={20} className="flex-shrink-0" />  
                <a>Head office:- Plot no. M-50 (P), Phase VI, Adityapur Industrial Area, Gamharia, Jamshedpur, Jharkhand , India- 832108</a>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p>© {currentYear} Resilient, All Right Reserved</p>
          <p>Designed and Developed by <a href= "https://venturingdigitally.com/">Venturing Digitally Pvt Ltd.</a> </p>
        
      </div>
      </div>
    </footer>
  );
};

export default Footer;