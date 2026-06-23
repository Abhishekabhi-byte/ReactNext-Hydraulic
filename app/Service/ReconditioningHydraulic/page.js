"use client";

import React, { useState } from "react";


const features = [
  {
    title: "Pump Reconditioning",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    desc: "Complete repair and performance restoration of hydraulic pumps for industrial applications.",
  },

  {
    title: "Cylinder Repair Reconditioning",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    desc: "Precision hydraulic cylinder rebuilding with seal replacement and pressure testing.",
  },

  {
    title: "Piping & Accessories",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    desc: "Piping and Accessories condition assessment and correction action implementation",
  },
];



const faqs = [
  {
    question: "What is hydraulic reconditioning?",
    answer:
      "Hydraulic reconditioning is the process of repairing and restoring hydraulic equipment to improve performance and extend lifespan.",
  },

  {
    question: "Do you provide emergency support?",
    answer:
      "Yes, we provide 24/7 emergency technical support for industrial hydraulic systems.",
  },

  {
    question: "Which industries do you serve?",
    answer:
      "We serve manufacturing, construction, mining, agriculture, and industrial sectors.",
  },

  {
    question: "Do you use genuine components?",
    answer:
      "Yes, we use high-quality and genuine hydraulic components for reliability and durability.",
  },
  
];



const ReconditioningHydraulic = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  }
  return (

    
    
    <div className="bg-[#f5f7fa] overflow-hidden">

      {/* Hero Section */}
    <section
  className="relative min-h-screen pt-24 flex items-center bg-cover bg-top"
  style={{
    backgroundImage: "url('/reconditioning.png')",
  }}
>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          <span className="uppercase tracking-[4px] text-blue-400 font-semibold">
            Industrial Hydraulic Services
          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-5 leading-tight">
           Reconditioning Hydraulic  <br />
           components & systems
          </h1>

          <p className="max-w-3xl mt-8 text-lg leading-8 text-gray-300">
           We specialize in restoring hydraulic
            systems with advanced repair, rebuilding, testing and maintenance
            solutions. We help industries improve efficiency, reduce downtimeS
            and extend equipment life using precision engineering and reliable
            hydraulic technology.
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
              Our Reconditioning Services
            </h2>

            <p className="text-gray-500 mt-5 text-lg">
              Advanced hydraulic repair and rebuilding solutions for industries.
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
              Our Working Process
            </h2>

            <p className="text-gray-300 mt-5 text-lg">
              Simple and efficient hydraulic servicing process.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Intake",
              "Diagnostics",
              "Dissassembly",
              "Inspection",
              "Repair",
              "Reassembly",
              "Testing",
              "Dispatch",
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
        Common questions about hydraulic reconditioning services.
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
              Get professional hydraulic consultation and industrial support.
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
              placeholder="Describe Your Reconditioning Hydraulic Requirement"
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

export default ReconditioningHydraulic;