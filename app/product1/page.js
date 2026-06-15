"use client";
import React, { useState } from 'react';

const Page = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    companyGstNo: '',
    personName: '',
    phoneNo: '',
    quantity: 1,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Our team will contact you shortly.');
    setIsPopupOpen(false);
    setFormData({
      companyName: '',
      companyAddress: '',
      companyGstNo: '',
      personName: '',
      phoneNo: '',
      quantity: 1,
      message: ''
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen text-[#0F1111]">
      <div className="py-6 md:py-10 px-4">

        {/* Main Product Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* Left Column (Sticky Image Container) */}
<div className=" lg:sticky overflow-y-auto lg:top-5 mt-[220px] w-full flex justify-center items-center">
              <img
              src="https://rexrothdistributor.in/wp-content/uploads/2022/06/internal-gear-pumps-16x9_640x360-removebg-preview.png"
              alt="Product"
              className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-lg mix-blend-multiply"
            />
          </div>

          {/* Right Column */}
          <div>
            {/* Breadcrumb */}
            <nav className="text-xs md:text-sm text-gray-500 mb-2">
              Hydraulic › Machine Supplies › Motors
            </nav>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="text-[#0094ff]">
                Product Description
              </span>
            </h1>

            {/* Product Title */}
            <h3 className="text-lg md:text-xl font-semibold leading-tight md:leading-6 mb-4">
              VOLTURI Non Scratch Wire Cloth (Pack of 10),
              Steel Scrubber for Utensils Cleaning,
              Multipurpose Wet and Dry Cleaning
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, accusamus quasi voluptatem ea reiciendis
              necessitatibus consectetur sit culpa repudiandae asperiores
              corporis porro quam commodi reprehenderit.
            </p>

            {/* Features */}
            <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-1 mb-6">
              <li>Multipurpose: Wet and Dry use</li>
              <li>Non-scratch technology</li>
              <li>Durable steel wire mesh</li>
              <li>Pack of 10 for long-lasting value</li>
            </ul>

            {/* Price Section */}
            <div className="border-t border-gray-300 pt-4 mb-6">
              <div className="text-3xl md:text-4xl font-bold">
                ₹199.00
              </div>
              <p className="text-gray-500 text-sm mt-1">
                M.R.P:
                <del className="ml-2">
                  ₹999.00
                </del>
              </p>
            </div>

            {/* Buy Box */}
            <div className="border border-gray-300 rounded-2xl p-4 w-full sm:max-w-[350px] bg-white shadow-md">
              <div className="text-2xl md:text-3xl font-bold mb-1">
                ₹199.00
              </div>
              <div className="text-green-700 text-lg font-medium mb-4">
                In stock
              </div>

              {/* Action Button */}
              <div className="mb-4">
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-orange-400 hover:bg-orange-500 active:scale-[0.98] text-gray-900 transition py-3 rounded-full font-semibold text-center shadow-sm"
                >
                  Enquiry Now
                </button>
              </div>

              {/* Info Table */}
              <table className="w-full text-xs md:text-sm text-gray-600">
                <tbody>
                  <tr className="border-b border-gray-100 last:border-none">
                    <td className="py-2 font-medium text-gray-400 w-1/3">Ships from</td>
                    <td className="py-2 text-gray-800">Parker Group</td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-none">
                    <td className="py-2 font-medium text-gray-400">Sold by</td>
                    <td className="py-2 text-gray-800">Abhishek</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-gray-400">Payment</td>
                    <td className="py-2 text-gray-800">Secure transaction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Product Specification Section */}
        <div className="max-w-7xl mx-auto mt-12 md:mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#0094ff]">
              Product Specification
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nulla, temporibus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nulla, temporibus.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-gray-700 space-y-1">
            <li>Multipurpose: Wet and Dry use</li>
            <li>Non-scratch technology</li>
            <li>Durable steel wire mesh</li>
            <li>Long-lasting performance</li>
          </ul>
        </div>
      </div>

      {/* Popup Modal Window */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 md:p-6 flex-shrink-0">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">Place Your Order</h2>
                  <p className="text-blue-100 text-xs md:text-sm mt-0.5">Please fill in the details below</p>
                </div>
                <button 
                  onClick={() => setIsPopupOpen(false)}
                  className="text-white/80 hover:text-white text-3xl p-1 transition leading-none rounded-lg hover:bg-white/10"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Modal Body (Scrollable form content for mobile safety) */}
            <form onSubmit={handleSubmit} className="p-5 md:p-6 overflow-y-auto dynamic-scrollbar">
              
              {/* Row 1: Company Name & Company Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-5">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Company Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Company Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter company address"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Company GST No & Person Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-5">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Company GST No. *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="companyGstNo"
                      value={formData.companyGstNo}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter GST number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Person Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="personName"
                      value={formData.personName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter contact person name"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Phone Number & Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-5">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number"
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                    Quantity *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6M4 3h16"></path>
                      </svg>
                    </div>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      max="100"
                      required
                      className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Message (Full Width) */}
              <div className="mb-5">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Message
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
                    <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Any special requests or questions?"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition py-3 rounded-lg font-semibold text-white shadow-md active:scale-[0.99]"
                >
                  Submit Order Enquiry
                </button>
              </div>

              <p className="text-[10px] md:text-xs text-gray-400 text-center mt-4 max-w-md mx-auto leading-normal">
                By submitting this form, you agree to our terms and conditions.
                Our team will contact you within 24 hours to confirm your order.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;