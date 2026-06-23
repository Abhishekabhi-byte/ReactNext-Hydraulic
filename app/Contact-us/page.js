"use client";

import React, { useState } from "react";
import {
  FaLocationDot,
  FaPhone,
  FaArrowRightLong,
} from "react-icons/fa6";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // industrySector: "Energy & Low Carbon",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        alert("Form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          // industrySector: "Energy & Low Carbon",
          message: "",
        });
      } else {
        alert("Something went wrong");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gray-100 min-h-screen pt-20 px-6">

        {/* Blur Orbs */}
        <div className="absolute w-96 h-96 bg-sky-600 rounded-full blur-[100px] opacity-30 top-[-10%] left-[-5%] -z-10"></div>

        <div className="absolute w-80 h-80 bg-sky-900 rounded-full blur-[100px] opacity-30 bottom-[-5%] right-[-5%] -z-10"></div>

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-4 uppercase">
              Connect{" "}
              <span className="bg-gradient-to-r from-sky-500 to-sky-300 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>

            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Let’s discuss your next project. We combine environmental
              expertise with sky-high technical ambition.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* LEFT SIDE (UNCHANGED) */}
            <div className="lg:col-span-2 space-y-4">

              <div className="bg-white border border-sky-100 shadow-lg p-8 rounded-3xl hover:-translate-y-2 transition duration-300">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
                    <FaLocationDot />
                  </div>

                  <h4 className="font-bold uppercase tracking-widest text-sm">
                    Our HQ
                  </h4>
                </div>

                <p className="text-gray-500 leading-relaxed">
                  Plot no. M-50 (P), Phase VI, Adityapur Industrial Area,
                  <br />
                  Gamharia, Jamshedpur, Jharkhand , India- 832108.
                </p>
              </div>

              <div className="bg-white border border-sky-100 shadow-lg p-8 rounded-3xl hover:-translate-y-2 transition duration-300">

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
                    <FaPhone />
                  </div>

                  <h4 className="font-bold uppercase tracking-widest text-sm">
                    Call Us On
                  </h4>
                </div>

                <p className="text-gray-500 mb-2">
                  +91 99559 97659 | +91 95701 95738
                </p>

                <p className="text-sky-500 font-medium">
                  Available 24/7 for partners
                </p>
              </div>

              
            </div>

            {/* RIGHT FORM (FIXED ONLY LOGIC) */}
            <div className="lg:col-span-3">

              <form
                onSubmit={handleSubmit}
                className="bg-white border border-sky-100 shadow-lg p-8 md:p-12 rounded-[2.5rem] space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-6">

                  {/* Name */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2 ml-1">
                      Identity
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="border border-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:border-sky-500"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2 ml-1">
                      Correspondence
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="border border-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:border-sky-500"
                      required
                    />
                  </div>
                </div>

           

                {/* Textarea */}
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2 ml-1">
                    Message Brief
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="How can we assist your sustainability goals?"
                    className="border border-gray-300 px-5 py-4 rounded-xl resize-none focus:outline-none focus:border-sky-500"
                    required
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-black text-white py-5 rounded-xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition duration-300 hover:scale-[1.02]"
                >
                  Inquiry Now
                  <FaArrowRightLong className="text-xs" />
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* Map (UNCHANGED) */}
        <div className=" mx-4 md:mx-20 mb-8 mt-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6206.738065991157!2d86.10333584125662!3d22.8106034906407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e500504e900b%3A0xb22a921efdb36caf!2sRESILIENT%20TECHNICAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1778571351691!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>
        </div>

      </section>
    </>
  );
};

export default Contact;