"use client";

import React, { useState } from "react";

const features = [
  {
    title: "Pump Performance Testing",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    desc: "Comprehensive hydraulic pump testing for pressure, flow, efficiency, leakage, and overall operational performance.",
  },

  {
    title: "Valve Testing & Calibration",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "Accurate hydraulic valve testing, calibration, pressure setting, and functional analysis for reliable system control.",
  },

  {
    title: "Hydraulic Motor Testing",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    desc: "Professional hydraulic motor testing for torque, speed, efficiency, vibration, and operational reliability.",
  },
];



const faqs = [
  {
    question: "Why is hydraulic testing important?",
    answer:
      "Hydraulic testing helps identify performance issues, pressure losses, leakage, and operational faults before major equipment failure occurs.",
  },

  {
    question: "Which components do you test?",
    answer:
      "We test hydraulic pumps, valves, motors, cylinders, hydraulic power packs, and complete hydraulic systems.",
  },

  {
    question: "Do you provide onsite hydraulic testing?",
    answer:
      "Yes, we provide both onsite and workshop hydraulic testing services for industrial applications.",
  },

  {
    question: "What parameters are checked during testing?",
    answer:
      "We check pressure, flow, leakage, temperature, vibration, efficiency, calibration, and overall hydraulic performance.",
  },
];

const Testingof_Pumps_Valves_Motors = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f5f7fa] overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/index-hero-slider1.webp')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Hydraulic Testing Services
          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-5 leading-tight">
            Testing of Pumps <br />
            Valves & Motors
          </h1>

          <p className="max-w-3xl mt-8 text-lg leading-8 text-gray-300">
           We provide professional testing
            services for hydraulic pumps, valves, and motors to ensure reliable
            industrial performance. Our advanced testing procedures help detect
            faults, improve efficiency, reduce downtime, and ensure safe
            operation of hydraulic equipment.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/Contact-us"
              className="bg-blue-600 hover:bg-blue-800 px-8 py-4 rounded-xl text-white font-semibold transition duration-300 inline-block"
            >
              Get Consultation
            </a>

         

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-[#0a192f]">
              Our Testing Services
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Advanced hydraulic testing solutions for industrial pumps, valves,
              and motors.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                <div className="overflow-hidden h-64">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {feature.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

   
      {/* Process Section */}
      <section className="bg-[#0a192f] py-20 px-6 text-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black">
              Our Testing Process
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              Professional hydraulic testing process for accurate performance
              evaluation and fault analysis.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Inspection",
              "Performance Testing",
              "Analysis & Calibration",
              "Reporting & Support",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center border border-white/10"
              >

                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">
                  {step}
                </h3>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-100">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-5">

            <h2 className="text-4xl md:text-4xl font-black text-[#0a192f]">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Common questions about hydraulic testing services.
            </p>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-[#f8fafc] rounded-3xl shadow-md overflow-hidden transition duration-300"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >

                  <h3 className="text-xl md:text-[16px]  font-semibold text-[#0a192f]">
                    {faq.question}
                  </h3>

                  <span className="text-3xl font-bold text-blue-600">
                    {openIndex === index ? "−" : "+"}
                  </span>

                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    openIndex === index
                      ? "max-h-40 opacity-100 pb-8 px-8"
                      : "max-h-0 opacity-0"
                  }`}
                >

                  <p className="text-gray-600 leading-7">
                    {faq.answer}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-2 px-3">

        <div className="max-w-5xl mx-auto bg-[#123251] rounded-[40px] shadow-2xl p-10 md:p-16">

          <div className="text-center mb-2">

            <h2 className="text-4xl md:text-5xl font-black text-[white]">
              Contact Our Experts
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Get professional hydraulic testing and technical support from our
              experienced engineering team.
            </p>

          </div>

          <form className="grid text-white-900 md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 text-white rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 text-white rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 text-white rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="border border-gray-300 text-white rounded-xl px-5 py-4 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Describe Your Hydraulic Testing Requirement"
              className="md:col-span-2 text-white border border-gray-500 rounded-xl px-5 py-2 outline-none focus:border-blue-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 bg-blue-600 hover:bg-blue-800 text-white py-4 rounded-xl text-lg font-semibold transition duration-300 cursor-pointer"
            >
              Submit Inquiry
            </button>

          </form>
        </div>
      </section>
    </div>
  );
};

export default Testingof_Pumps_Valves_Motors;