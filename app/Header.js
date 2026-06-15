// components/Header.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import './Header.css';
import { usePathname } from 'next/navigation';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  // Handle window resize - close mobile menu on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000 && isMenuOpen) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close dropdown when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 999 && openDropdown) {
        // Check if click is inside any dropdown
        const dropdowns = document.querySelectorAll('.has-dropdown');
        let clickedInside = false;
        
        dropdowns.forEach((dropdown) => {
          if (dropdown.contains(event.target)) {
            clickedInside = true;
          }
        });
        
        if (!clickedInside) {
          setOpenDropdown(null);
        }
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [openDropdown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();
    // Close other dropdowns first
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div className="header-top"></div>

      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>
            <img src="/resilient.fot-png.png" alt="Hydraulic Services Logo" />
          </a>
        </div>

        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-icon">{'☰'}</span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'menu-open' : ''}`} ref={menuRef}>
          {/* Close button inside menu for mobile */}
          <li className="mobile-close-btn">
            <button onClick={closeMenu} aria-label="Close menu">
              ✕
            </button>
          </li>

          <li className="nav-item">
            <a href="/"  className={pathname === "/" ? "active" : ""}  onClick={closeMenu}>
              Home
            </a>
          </li>

          <li className={`nav-item has-dropdown ${openDropdown === 'company' ? 'open' : ''}`}>
            <div className="dropdown-trigger">
              <a 
                href="" 
                className={pathname === "/About_us"   ? "active" : pathname === "our_client" ? "active" : ""}
                onClick={(e) => {
                  if (window.innerWidth <= 999) {
                    e.preventDefault();
                    toggleDropdown('company', e);
                  }
                }}
              >
                Our Company
              </a>
              <span 
                className="dropdown-arrow" 
                onClick={(e) => toggleDropdown('company', e)}
              >
                ⏷
              </span>
            </div>
            <ul className={`dropdown ${openDropdown === 'company' ? 'dropdown-open' : ''}`}>
              <li><a href="/About_us"  onClick={closeMenu}>About Us</a></li>
              <li><a href="/our_client" onClick={closeMenu}>Our Clients</a></li>
            </ul>
          </li>

   <li className="nav-item">
            <a href="/Parker" className={pathname === "/Parker" ? "active" : ""} onClick={closeMenu}>
              Parker
            </a>
          </li>

{/* 
          <li className="nav-item">
            <a href="/Product" className={pathname === "/Product" ? "active" : ""} onClick={closeMenu}>
              Products
            </a>
          </li> */}

          <li className={`nav-item has-dropdown ${openDropdown === 'services' ? 'open' : ''}`}>
            <div className="dropdown-trigger">
              <a 
                href="" className={pathname === "/Service/ReconditioningHydraulic" ? "active" :  pathname === "/Service/Troubleshootingof_Hydraulic_systems" ? "active" : pathname === "/Service/Design_of_Hydraulic_Systems" ? "active" : pathname === "/Service/Commissioningof_Hydraulic_Systems" ? "active" : pathname === "/Service/Testingof_Pumps_Valves_Motors" ? "active" : "" }
                onClick={(e) => {
                  if (window.innerWidth <= 999) {
                    e.preventDefault();
                    toggleDropdown('services', e);
                  }
                }}
              >
                Services
              </a>
              <span 
                className="dropdown-arrow" 
                onClick={(e) => toggleDropdown('services', e)}
              >
                ⏷
              </span>
            </div>
            <ul className={`dropdown ${openDropdown === 'services' ? 'dropdown-open' : ''}`}>
              
              <li><a href="/Service/ReconditioningHydraulic" onClick={closeMenu}>Reconditioning Hydraulic components & systems</a></li>
              <li><a href="/Service/Troubleshootingof_Hydraulic_systems" onClick={closeMenu}>Troubleshooting Hydraulic systems </a></li>
              <li><a href="/Service/Design_of_Hydraulic_Systems" onClick={closeMenu}>Design of Hydraulic Systems</a></li>
              <li><a href="/Service/Commissioningof_Hydraulic_Systems" onClick={closeMenu}>Commissioning Hydraulic Systems</a></li>
              <li><a href="/Service/Testingof_Pumps_Valves_Motors" onClick={closeMenu}>Testing pumps, valves and motors</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a href="/Internship-training" className={pathname === "/Internship-training" ? "active" : ""} onClick={closeMenu}>
              Internship/Training
            </a>
          </li>

          <li className="nav-item">
            <a href="/Contact-us"  className={pathname === "/Contact-us" ? "active" : ""} onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Backdrop - only show when menu is open */}
      {isMenuOpen && <div className="backdrop" onClick={closeMenu} />}
    </>
  );
};

export default Header;