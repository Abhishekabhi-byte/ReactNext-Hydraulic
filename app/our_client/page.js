import React from "react";

export default function ClientsPage() {
  const clients = [
    {
   
      image:
        "Adani_power-client.png",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-60   object-contain",
    },

     {
   
      image:
        "Aditya-birla.jpeg",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-90   object-contain",
    },

     {
  
      image:
        "DVC-client.png",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-60   object-contain",
    },
     {
   
      image:
        "Flender_Graffenstaden-client.jpeg",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-60   object-cover",
    },
     {
   
      image:
        "Indian_rail-client.jpeg",
        button: "View Projects",
        link: "/projects/tata-steel",
    },
     {
   
      image:
        "jsw-client.png",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-60  h-auto object-contain",      
    },
     {
   
      image:
        "Jindal-Steel-Logo-client.avif",
        button: "View Projects",
        link: "/projects/tata-steel",
        className: "w-32 sm:w-12 md:w-60  h-auto object-contain",
    },
    {
   
      image:
        "ntpc-client.png",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-60  h-auto object-contain",
    },

     {
   
      image:
        "Sail-client.png",
         button: "View Projects",
         link: "/projects/tata-steel",
    },

     {
  
      image:
        "tata-steel.jpg",
         button: "View Projects",
         link: "/projects/tata-steel",
         className: "w-32 sm:w-12 md:w-80  h-auto object-contain",
    },
     {
   
      image:
        "tata_bluescope.jpeg",
         button: "View Projects",
         link: "/projects/tata-steel",
    },
     {
   
      image:
        "Ultratech_Cement_Logo-client.svg",
        button: "View Projects",
        link: "/projects/tata-steel",
        className: "w-32 sm:w-12 md:w-60 h-auto object-contain",
    },
     
     
  ];

  return (
    <div className="bg-[#f5f7fa] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-[#0a192f] text-white">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="uppercase tracking-[5px] text-blue-400 font-semibold text-sm">
            Trusted Partnerships
          </span>

          <h1 className="text-4xl md:text-7xl font-black mt-5 leading-tight">
            Our <span className="text-blue-400">Clients</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 mt-6 text-lg leading-8">
           Our clients trust us for advanced engineering, 
           reliable parts quality service, and industrial excellence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-black text-blue-600">90%</h2>
            <p className="text-gray-500 mt-3">Customer Satisfaction</p>
          </div>

      

          <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:-translate-y-2 transition duration-300">
            <h2 className="text-5xl font-black text-blue-600">24/7</h2>
            <p className="text-gray-500 mt-3">Support Availability</p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f]">
              Companies We Serve
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Building long-term relationships through innovation and quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 flex items-center justify-center "
              >
                {/* Image */}
                <div className="overflow-hidden  flex items-center justify-center ">
                  <img
                    src={client.image}
                    alt={client.name}
                    className={client.className ? client.className : "w-full h-full object-contain"}
                  />
                </div>

                </div>
             
            ))}
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      {/* <section className="bg-white py-16 border-y">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#0a192f] mb-10">
            Trusted By Leading Brands
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {["TATA", "L&T", "AMAZON", "JSW", "RELIANCE", "ADANI"].map(
              (logo, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl py-6 text-gray-700 font-bold text-lg hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  {logo}
                </div>
              )
            )}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="bg-[#0a192f] text-center py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h3 className="text-4xl md:text-5xl font-black leading-tight mb-6">
            Let’s Build Something Amazing Together
          </h3>

       

          <a
            href="/Contact-us"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition duration-300 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section> */}
    </div>
  );
}
