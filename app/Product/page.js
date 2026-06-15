"use client";

import React from "react";

const products = [
  { id: 1, name: "Hydraulic Hose", price: "₹1200", image: "/p1.jpg" },
  { id: 2, name: "Gear Pump", price: "₹8500", image: "/p2.jpg" },
  { id: 3, name: "Hydraulic Valve", price: "₹4200", image: "/p3.jpg" },
  { id: 4, name: "Oil Filter", price: "₹900", image: "/p4.jpg" },
  { id: 5, name: "Motor Assembly", price: "₹15000", image: "/p5.jpg" },
  { id: 6, name: "Cylinder Kit", price: "₹6500", image: "/p6.jpg" },
  { id: 7, name: "Pump Motor", price: "₹9800", image: "/p7.jpg" },
  { id: 8, name: "Accumulator", price: "₹11000", image: "/p8.jpg" },
  { id: 9, name: "Pneumatic Valve", price: "₹3200", image: "/p9.jpg" },
  { id: 10, name: "Hydraulic Oil", price: "₹500", image: "/p10.jpg" },
];

const ProductPage = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black uppercase">
          Our Products
        </h1>
        <p className="text-gray-500 mt-3">
          High quality hydraulic & industrial solutions
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            
            {/* Image */}
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="font-bold text-lg">{product.name}</h2>
              <p className="text-sky-500 font-semibold mt-1">
                {product.price}
              </p>

              <button className="mt-4 w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-black transition">
                <a href="/product1" className="text-white no-underline">
                  View Details
                </a>
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductPage;