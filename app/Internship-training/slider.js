"use client"

import { useEffect, useState } from "react"

export default function slider() {

  const slides = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  ]

  const [current, setCurrent] = useState(0)
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="w-full h-[600px] overflow-hidden relative ">

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
            className="w-full h-[600px] object-cover flex-shrink-0"
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
  )
}