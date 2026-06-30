"use client";

import React, { useState, useEffect } from "react";

const testimonials = [


  {
    id: 1,
    name: "N.R. Saifi",
    designation: "Sr Manager - Help Desk Centre",
    organisation: "Tata Steel",
    description:
      "Providing support in delivery of Filter Element for their Blast Furnace.",
  },

  {
    id: 4,
    name: "Kaushlendra Singh Chauhan",
    designation: "Dy GM (Mechanical)",
    organisation: "SAIL - Bolani",
    description:
      "Solved Hydraulic power pack issues of Long Travel Unit of Stacker.",
  },

 

  {
    id: 6,
    name: "P.K. Singh",
    designation: "AGM (Mechanical)",
    organisation: "SAIL - Bolani",
    description:
      "Support during commissioning of Slew & LT of FLSmidth Reclaimer.",
  },

  {
    id: 7,
    name: "Chandan Kumar",
    designation: "Sr Manager, Maintenance",
    organisation: "Tata Motors Limited",
    description:
      "Successfully trained personnel on Parker products.",
  },

  {
    id: 8,
    name: "Dharmendra Kumar",
    designation: "Dy Manager, CED",
    organisation: "Heavy Engg Corpn Ltd.",
    description:
      "Ensured quickest delivery of Pipe & Pipe fittings during Covid-19.",
  },

  {
    id: 9,
    name: "Ujjwal Kr Bhadra",
    designation: "Asst Manager",
    organisation: "Timken India Ltd.",
    description:
      "Appreciation for excellent Parker Air Dryer performance.",
  },

  {
    id: 10,
    name: "Dayanand Uppoor",
    designation: "Technical Head",
    organisation: "Parker Hannifin India Pvt. Ltd.",
    description:
      "Successfully replaced Rexroth fittings with Parker fittings.",
  },

  {
    id: 11,
    name: "Nishant",
    designation: "Sr Manager - Blast Furnace",
    organisation: "Tata Steel",
    description:
      "Ensured Seal Kit delivery before scheduled delivery date.",
  },

  {
    id: 13,
    name: "Lopamudra Tripathy",
    designation: "Sr Manager - Procurement",
    organisation: "Tata Steel - TSK",
    description:
      "Ensured quickest delivery of materials to Tata Steel Kalinganagar.",
  },

  {
    id: 14,
    name: "Sudhansu Mohan Swain",
    designation: "Asst Manager",
    organisation: "Tata Bluescope Steel Pvt. Ltd.",
    description:
      "Quick pneumatic valve supply for breakdown maintenance.",
  },

  {
    id: 15,
    name: "Malay Kr Behera",
    designation: "Sr Manager (E&I)",
    organisation: "JSW-BPSL",
    description:
      "Support on fine tuning of new PQ Controller.",
  },

  {
    id: 16,
    name: "Shubhash Kumar",
    designation: "Dy General Manager",
    organisation: "NTPC - Barh",
    description:
      "Replaced Russian-made valves with Parker alternatives.",
  },

  {
    id: 17,
    name: "Santosh Thakur",
    designation: "BGU Mechanical",
    organisation: "Shree Cement",
    description:
      "Supply of Parker Axial Piston Pump replacing Hydac Pump.",
  },

  {
    id: 18,
    name: "Rajkishore Naik",
    designation: "Project Lead",
    organisation: "Jindal Steel & Power Ltd.",
    description:
      "Successfully executed Hydraulic cylinder supply project.",
  },

  {
    id: 19,
    name: "Tapas Ranjan Prusty",
    designation: "Maintenance Specialist",
    organisation: "Brahmani River Pellets Ltd.",
    description:
      "Successfully repaired high-pressure Hydraulic cylinder.",
  },

  {
    id: 20,
    name: "Manoj Pathak",
    designation: "Head P&C SMLP",
    organisation: "Tata Steel - KPO",
    description:
      "Reverse engineered and supplied Hydraulic cylinder within 10 days.",
  },

  {
    id: 21,
    name: "Bismay Kr Behera",
    designation: "Head MED",
    organisation: "Tata Steel - KPO",
    description:
      "Resolved recurring Hydraulic cylinder failures through redesign.",
  },

  {
    id: 22,
    name: "Raja Raman",
    designation: "Operations Engineer",
    organisation: "Tata Steel - Combo Mills",
    description:
      "Repair of Hydraulic Bolt Tensioner under breakdown condition.",
  },

  {
    id: 23,
    name: "Jagat Narayan",
    designation: "Maintenance Team",
    organisation: "Ultratech Cement Limited",
    description:
      "Successfully refurbished Hydraulic cylinder of Wagon Tippler.",
  },

  {
    id: 24,
    name: "General Manager",
    designation: "Plant Head",
    organisation: "HPC Biofuels Ltd.",
    description:
      "Successfully refurbished Hydraulic cylinder of Cainless Diffuser.",
  },

  {
    id: 25,
    name: "Arbind Kumar Shukla",
    designation: "Asst Workshop Manager",
    organisation: "Rail Wheel Plant, Bela",
    description:
      "Advanced Hydraulic training and vibration issue resolution.",
  },

  {
    id: 26,
    name: "Ajit Kumar Sharma",
    designation: "Manager - Procurement",
    organisation: "Ramkrishna Forgings Ltd.",
    description:
      "Tube & hose assemblies performing successfully on Vande Bharat train.",
  },

];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  // RESPONSIVE CARDS
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, visibleCards]);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(testimonials.length - visibleCards);
    }
  };

  return (
    <section className="w-full py-14 sm:py-16 md:py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-10">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left">
            Our Customers{" "}
            <span className="text-blue-600">
              Appreciation 
            </span>
          </h2>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-full
                bg-black
                text-white
                text-xl
                hover:bg-blue-600
                transition
              "
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="
                w-11 h-11 sm:w-12 sm:h-12
                rounded-full
                bg-black
                text-white
                text-xl
                hover:bg-blue-600
                transition
              "
            >
              ❯
            </button>
          </div>
        </div>

  {/* Slider */}
<div className="overflow-hidden w-full">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
    }}
  >
    {testimonials.map((item) => (
      <div
        key={item.id}
        className="
          flex-shrink-0
          w-full
          sm:w-1/2
          lg:w-1/3
          px-2
          box-border
        "
      >
        <div
          className="
            bg-white
            rounded-3xl
            shadow-xl
            border border-gray-200
            p-5 sm:p-6 md:p-7
            flex flex-col
            h-full
            min-h-[40px]
            hover:-translate-y-2
            transition-all
            duration-300
          "
        >
          {/* Top */}
          <div className="flex flex-col items-center text-center flex-1">

            {/* Image */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="person"
              className="
                w-16 h-16
                sm:w-20 sm:h-20
                rounded-full
                border-4 border-blue-500
                shadow-md
              "
            />

            {/* Stars */}
            <div className="flex text-yellow-400 text-lg sm:text-xl mt-4">
              ★★★★★
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-bold mt-4 text-gray-800">
              {item.name}
            </h3>

            {/* Designation */}
            <p className="text-blue-600 font-semibold mt-2 text-sm sm:text-base">
              {item.designation}
            </p>

            {/* Organisation */}
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              {item.organisation}
            </p>

            {/* Description */}
            <p
              className="
                text-gray-600
                leading-7
                text-center
                mt-6
                text-sm
                sm:text-base
                flex-1
              "
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    
      </div>
    </section>
  );
};

export default TestimonialSlider;