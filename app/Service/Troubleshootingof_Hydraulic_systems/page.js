"use client";

import React, { useState } from "react";
import Image from "next/image";



const faqs = [
  {
    question: "What is hydraulic troubleshooting?",
    answer:
      "Hydraulic troubleshooting is the process of diagnosing and resolving issues such as pressure loss, oil leakage, overheating, abnormal noise and component malfunction in hydraulic systems.",
  },

  {
    question: "Do you provide on-site troubleshooting support?",
    answer:
      "Yes, we provide on-site inspection, fault diagnosis, system analysis and troubleshooting support for industrial hydraulic systems and equipment.",
  },

  {
    question: "Which hydraulic components do you troubleshoot?",
    answer:
      "We troubleshoot hydraulic pumps, motors, cylinders, valves, accumulators, hydraulic power packs, filtration systems and complete hydraulic circuits.",
  },

  {
    question: "Can you solve recurring hydraulic failures?",
    answer:
      "Yes, our experts perform root cause analysis to identify recurring hydraulic problems and provide long-term corrective solutions for reliable operation.",
  },
];

const Troubleshootingof_Hydraulic_systems = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  
  return (
    <div className="bg-[#f5f7fa] overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-[85vh] flex items-center bg-top bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/troubleshooting.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Hydraulic Diagnostic Services
          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-5 leading-tight">
            Troubleshooting <br />
            Hydraulic Systems
          </h1>

          <p className="max-w-3xl mt-8 text-lg leading-8 text-gray-300">
            We provides advanced troubleshooting
            solutions for industrial hydraulic systems. Our experts diagnose
            hydraulic pressure loss, leakage, overheating, abnormal vibration,
            valve malfunction and pump failures to restore system performance,
            improve reliability and reduce equipment downtime.
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



       <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row border border-gray-100">

          {/* Image Left */}
          <div className="md:w-1/2 relative h-72 md:h-auto overflow-hidden">
            <Image
              src="/about-hydraulic-banner.png"
              alt="Hydraulic Service"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay badge */}
            <div className="absolute top-5 left-5 bg-blue-600 text-white text-xs px-4 py-2 rounded-full shadow">
              Hydraulic Troubleshooting
            </div>
          </div>

          {/* Content Right */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">

            <h2 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
              Pressure, Flow & Temperature Troubleshooting
            </h2>

            <p className="text-gray-600 leading-8 text-[15px]">
              Pressure, flow and temperature troubleshooting involves checking
              system pressure levels, ensuring proper fluid flow and monitoring
              overheating issues. Inspect pumps, valves, filters and sensors for
              faults. Identify leaks, blockages, or wear. Maintain correct hydraulic
              fluid quality for stable performance.
            </p>

            {/* highlight line */}
            <div className="mt-6 h-1 w-20 bg-blue-600 rounded-full"></div>

          </div>
        </div>

      </div>
    </section>



      {/* Process Section */}
      <section className="bg-[#0a192f] py-20 px-6 text-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black">
              Our Troubleshooting Process
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              Systematic and efficient hydraulic fault diagnosis process.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "System Inspection",
              "Fault Diagnosis",
              "Repair & Testing",
              "Performance Validation",
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
              Common questions about hydraulic troubleshooting services and solutions.
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
              Contact Hydraulic Experts
            </h2>

            <p className="text-gray-500  mt-4 text-lg">
              Get professional hydraulic troubleshooting support and industrial consultation from our experts.
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
              placeholder="Describe Your Troubleshooting Hydraulic Requirement"
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

export default Troubleshootingof_Hydraulic_systems;