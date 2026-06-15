// app/video_section/page.js
'use client';

import React, { useRef, useState } from 'react';
import { Play, Settings, Droplets, Activity, Phone, Mail, MapPin, Pause, Maximize2 } from 'lucide-react';

const Productsection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            Resilient Technical Solution Pvt. Ltd
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Advanced Hydraulic Systems, Industrial Automation & Professional Technical Training.
          </p>
        </div>

        {/* Center the video and increase width */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
            <video
              className="w-full h-auto object-cover"
              controls
              poster="home_page_slider1.png" // Optional: Add a poster image
            >
              <source src="resilient_institute.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productsection;