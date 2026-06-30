import React from "react";
import { FaMicrochip, FaGlobeAmericas, FaTools } from "react-icons/fa";

const About_us = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[80vh] flex items-center text-white bg-cover bg-center bg-top bg-fixed"
        style={{
          backgroundImage:
            "url('troubleshooting.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/90 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12">
          <span className="uppercase tracking-[3px] font-bold text-blue-400 block mb-4">
            Engineering the Future
          </span>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            <span className="text-blue-400"> ABOUT  </span>  US
            
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">             
               Engineering Precision & Industrial Excellence
            </h2>

            <p className="text-gray-700 mb-5 leading-7">
              Founded by Mr. R. A. Agarwal, a mechanical engineer with extensive expertise in Hydraulics and filtration systems, RESILIENT has built a strong reputation for delivering reliable industrial solutions.
With a long-standing association with Parker Hannifin since 1997, Mr. Agarwal was among the first distributors of Parker products in India. This experience provided deep industry insight and helped shape the company’s technical foundation.
Over the years, it became clear that industries required more than just Hydraulic and pneumatic products — they needed dependable technical partners capable of offering complete engineering and service solutions.
            </p>

            <p className="text-gray-700 mb-5 leading-7">           
RESILIENT was established to fulfill this growing demand by combining product expertise, technical support, and solution-driven 
services under one roof. Today, the company stands as one of the pioneering technical solution providers in Eastern India.
            </p>

           

         
          </div>

          {/* Right Image */}
          <div className="relative">

          

            {/* Image */}
            <img
              src="service1.png"
              alt="Engineering"
              className="w-full h-[250px] sm:h-[220px] md:h-[300px] lg:h-[400px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-[#f0f4f8] py-16 px-5 md:px-12">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Resilient Solution Advantage
            </h2>

            <p className="text-gray-600">
              Why industry leaders choose us for their most critical operations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl hover:-translate-y-4 hover:shadow-2xl transition duration-300 border hover:border-blue-400">

              <div className="w-16 h-16 bg-blue-100 text-blue-500 flex items-center justify-center rounded-xl text-2xl mb-6">
                <FaMicrochip />
              </div>

              <h3 className="text-2xl font-bold mb-4">
               Advanced Hydraulic Solutions
              </h3>

              <p className="text-gray-600 leading-7">
                Delivering reliable and high-performance Hydraulic systems for modern industries.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl hover:-translate-y-4 hover:shadow-2xl transition duration-300 border hover:border-blue-400">

              <div className="w-16 h-16 bg-blue-100 text-blue-500 flex items-center justify-center rounded-xl text-2xl mb-6">
                <FaGlobeAmericas />
              </div>

              <h3 className="text-2xl font-bold mb-4">
               Skilled Technical Expertise
              </h3>

              <p className="text-gray-600 leading-7">
                Experienced engineers providing smart automation and precision-based solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl hover:-translate-y-4 hover:shadow-2xl transition duration-300 border hover:border-blue-400">

              <div className="w-16 h-16 bg-blue-100 text-blue-500 flex items-center justify-center rounded-xl text-2xl mb-6">
                <FaTools />
              </div>

              <h3 className="text-2xl font-bold mb-4">
               Customer-Focused Service
              </h3>

              <p className="text-gray-600 leading-7">
                Ensuring fast support, quality engineering, and long-term industrial partnerships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a192f] text-white text-center py-20 px-5">

        <div className="max-w-4xl mx-auto">

          <h3 className="text-4xl md:text-5xl font-bold mb-6">
           Ready to get cutting edge Hydraulics supplies and support
          </h3>

          

          <a
            href="Contact-us"
            className="inline-block bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition duration-300"
          >
            Connect with an Expert
          </a>

        </div>
      </section>
    </>
  );
};

export default About_us;