"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { BsCashCoin } from "react-icons/bs";


export default function page() {

  const slides = [
    "https://hydraulic-eta.vercel.app/_next/image?url=%2Fr6.jpg&w=1920&q=75",
    "https://hydraulic-eta.vercel.app/_next/image?url=%2Fr2.jpg&w=1920&q=75",
    "	https://hydraulic-eta.vercel.app/_next/image?url=%2Fr3.jpg&w=1920&q=75",
    "	https://hydraulic-eta.vercel.app/_next/image?url=%2Fr5.jpg&w=1920&q=75"
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])


    const features = [
    {
      id: 1,
      icon: "💰",
      title: "Easy Education Loan",
      description:
        "Easy education loan support for career-focused technical courses."
    },
    {
      id: 2,
      icon: "🏠",
      title: "Acommodation Available",
      description:
        "Comfortable accommodation facilities available for outstation students."
    },
    {
      id: 3,
      icon: "🪙",
      title: "Learn & Earn",
      description:
        "Learn while you earn with practical industrial training programs."
    },
    {
      id: 4,
      icon: "🏭",
      title: "Industrial Visits",
      description:
        "Industrial visits provide real-world exposure and practical experience."
    },
    {
      id: 5,
      icon: "🤝",
      title: "Placement Support",
      description:
        "Dedicated placement support with career guidance and job assistance."
    },
    {
      id: 6,
      icon: "✅",
      title: "Customer Commitment",
      description:
        "Committed to customer satisfaction through trust, quality, and support."
    }
  ];




  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What courses do we offer?",
      answer:
        "We offer short term training courses for corporates and diploma courses for freshers."
    },
    {
      id: 2,
      question:"What aspects of hydraulics do we cover?",
      answer: "We cover industrial and mobile hydraulics basics, construction , design, maintenance, troubleshooting and practical training."
    },
    {
      id: 3,
      question: "Is practical training included in the course?",
      answer:
        "Yes, our training programs include hands-on practical sessions with industrial hydraulic equipment."
    },
    {
      id: 4,
      question: "Who can join the hydraulic training program?",
      answer:
        "Diploma holders, ITI students, engineers, technicians, and industry professionals can join."
    },
    {
      id: 5,
      question: "Do we provide certificates after course completion?",
      answer:
        "Yes, certificates are provided after successful completion of the training program."
    },

    {
      id: 6,
      question: "Does the institute help with job opportunities?",
      answer: "We provide industry guidance and support for skill development and career opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (

<>

{/* slider-start */}

    <div className="w-full lg:h-[600px] md:h-[500px] sm:h-[400px] h-[350px] overflow-hidden relative ">

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >

        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt="slider"
            className="w-full lg:h-[600px] md:h-[500px] sm:h-[400px] h-[350px] object-cover flex-shrink-0"
          />
        ))}

      </div>

      {/* Dots */}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">

        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}

      </div>

      

    </div>

{/* slider-end */}


{/* about */}
<section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-3 items-center">

  {/* LEFT IMAGE */}
    <div>
    
    {/* Heading */}
    <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-tight mb-6">
      Resilient delivering, efficient <br />
      solutions with innovation, quality.
    </h2>

    {/* Paragraph */}
    <p className="text-gray-600 text-lg leading-8 mb-8">
      Resilient Manufacturing is a forward-thinking company focused on
      delivering durable, high-quality industrial solutions.
      With strong engineering expertise and adaptive processes,
      it ensures efficiency even in changing market conditions.
      The company emphasizes innovation, reliability,
      and long-term performance.
    </p>
<button className="bg-blue-500 rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href="https://resilient-institute.vercel.app">Visit Website</a>
    </button>
  </div>

  

  {/* RIGHT CONTENT */}
 <div className="flex justify-center">

    <div className="overflow-hidden rounded-3xl shadow-xl">
     <div className="overflow-hidden rounded-3xl shadow-xl">

      <video
        autoPlay
        muted
        loop
        controls
       className="w-3xl h-[360px]  object-cover"
      >
        <source src="v (1).mp4" type="video/mp4" />
      </video>
    </div>

  </div>

    </div>
  
</section>


{/* cources-start */}
<section className="bg-[#04214f] py-12 px-6">
<h1 className="text-4xl font-bold text-white text-center mb-9">Industry-focused training with Learn & Earn model</h1>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

        <img
    src="https://hydraulic-eta.vercel.app/_next/image?url=%2Fr5.jpg&w=3840&q=75"
    alt="Curriculum"
    className="w-full h-52 object-cover rounded-xl mb-5"
  />

      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        CURRICULUM
      </h2>

      <p className="text-gray-700 leading-6 text-justify text-center">
      Hydraulic technician certificate course
One year full time course
Eligibility : 10 + 2 / ITI
Approved by IISSSC(NCVET/NSQF)
Recognized By PARKAR HANNIFIN INDIA PVT. LTD
A multinational company Pioneer in the field of Hydraulics
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
      <img 
      src="https://hydraulic-eta.vercel.app/_next/image?url=%2Fr3.jpg&w=3840&q=75"
      alt="CORPORATE TRAININGS"
      className="w-full h-52 object-cover rounded-xl mb-5"
      />

      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        CORPORATE TRAININGS
      </h2>

      <p className="text-gray-700 leading-6 text-justify text-center">
        Enhance your team's expertise with professionals
Hands-on training programs in Industrial Hydraulics
Basic Industrial Hydraulics - 03 Days
Advanced Industrial Hydraulics - 05 Days
Hydraulics Fluids - 02 Days
Troubleshooting Hydraulics - 03 Days
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
  <img 
      src="https://hydraulic-eta.vercel.app/_next/image?url=%2Fr4.jpg&w=3840&q=75"
      alt="CORPORATE TRAININGS"
      className="w-full h-52 object-cover rounded-xl mb-5"
      />

      <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Learn And Earn Scheme
      </h2>

      <p className="text-gray-700 leading-6 text-justify text-center">
    Four Module Training
Eligible for Learn & Earn Scheme from third module
50% Fee Reimbursement
Subject to qulifing a test, he gets a reimbursement of 50% of the course fee for that module in lieu of working for4 hours a day
Hands-on Experiences
Hands-on working experience, real life working conditions
      </p>

    </div>

  </div>

</section>
{/* cources-end */}


{/* features-start */}
    <section className="bg-gray-100 py-12 px-4">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">

      

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-4">
         Our Key <span className="text-blue-500">Features</span>
        </h2>

        <p className="text-gray-600 text-lg leading-7">
         Our features combine advanced engineering, quality training, industry expertise,
          and reliable support to deliver efficient industrial solutions.
        </p>

      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {features.map((feature) => (

          <div
            key={feature.id}
            className="bg-[#4498dc] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >

            {/* Icon */}
            <div className="text-5xl mb-3">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-6">
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>
{/* features-end */}


  <section className="bg-[linear-gradient(135deg,_#061026,_#0d1f3c)] py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-4xl md:text-5xl font-bold text-white">

          <span className="text-gray-300">
            OUR
          </span>{" "}
          
          FAQS

        </h2>

      </div>

      {/* FAQ Container */}
      <div className="max-w-4xl mx-auto space-y-5">

        {faqs.map((faq, index) => (

          <div
            key={faq.id}
            onClick={() => toggleFAQ(index)}
            className={`cursor-pointer rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-6 transition duration-300 hover:bg-white/20 ${
              activeIndex === index ? "bg-white/20" : ""
            }`}
          >

            {/* Question */}
            <div className="flex justify-between items-center">

              <h3 className="text-lg md:text-xl font-semibold text-white">
                {faq.question}
              </h3>

              <span className="text-3xl text-white font-bold">
                {activeIndex === index ? "−" : "+"}
              </span>

            </div>

            {/* Answer */}
            {activeIndex === index && (

              <p className="text-gray-300 leading-7 mt-5">
                {faq.answer}
              </p>

            )}

          </div>

        ))}

      </div>



    </section>


    </>

    
  )
}