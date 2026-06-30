"use client";

import React, { useState } from "react";

const features = [
  {
    title: "Hydraulic System Installation",
    // image:
    //   " ",
    desc: "Professional installation and commissioning of Hydraulic systems, power packs, pipelines, valves, and industrial Hydraulic equipment.",
  },

  {
    title: "System Testing & Calibration",
    // image:
    //   " ",
    desc: "Complete Hydraulic pressure testing, calibration, performance analysis, and operational verification for reliable system performance.",
  },

  {
    title: "Startup & Technical Support",
    // image:
    //   " ",
    desc: "Expert startup assistance, troubleshooting, operator guidance, and technical support for smooth Hydraulic system commissioning.",
  },
];


const faqs = [
  {
    question: "What is Hydraulic system commissioning?",
    answer:
      "Hydraulic system commissioning is the process of inspecting, testing, calibrating, and starting Hydraulic systems to ensure safe and efficient industrial operation.",
  },

  {
    question: "Do you provide onsite commissioning support?",
    answer:
      "Yes, we provide complete onsite Hydraulic system commissioning, installation supervision, startup assistance, and technical support.",
  },

  {
    question: "Which Hydraulic systems do you commission?",
    answer:
      "We commission Hydraulic power packs, cylinders, pumps, valves, Hydraulic circuits, industrial machinery systems.",
  },

  {
    question: "Do you provide operator training?",
    answer:
      "Yes, we provide operator guidance and training to ensure proper Hydraulic system handling, maintenance, and safe operation.",
  },
];

const Commissioningof_Hydraulic_Systems = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f5f7fa] overflow-hidden">

      {/* Hero Section */}
      <section
        className="relative h-[95vh] flex items-center bg-cover bg-top bg-center"
        style={{
          backgroundImage:
            "url('../commissioning.png')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
Commissioning of Hydraulic Systems

          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-5 leading-tight">
            Commissioning of <br />
            Hydraulic Systems
          </h1>

          <p className="max-w-3xl mt-8 text-lg leading-8 text-gray-300">
            We provide professional
            commissioning services for industrial Hydraulic systems. We ensure
            proper installation, testing, calibration, startup and operational
            verification of Hydraulic equipment for safe, efficient and
            reliable industrial performance.
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
              Our Commissioning Services
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Professional Hydraulic system commissioning and startup solutions
              for industrial applications.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
              >

                {/* <div className="overflow-hidden h-64">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                  />

                </div> */}

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
              Our Commissioning Process
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              Professional Hydraulic startup and commissioning process for
              reliable industrial performance.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Installation Inspection",
              "Testing & Calibration",
              "System Startup",
              "Support & Training",
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
              Common questions about Hydraulic commissioning services.
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
              Get professional Hydraulic commissioning and startup support from
              our experienced engineers.
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
              placeholder="Describe Your Commissioning Hydraulic Requirement"
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

export default Commissioningof_Hydraulic_Systems;