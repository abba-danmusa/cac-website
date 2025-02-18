"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface NewsSliderProps {
  items: {
    icon: string;
    caption: string;
    text: string;
  }[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const slide = () => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    };

    intervalRef.current = setInterval(slide, 4000); // Change slide every 4 seconds

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  useEffect(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: `${-activeIndex * 100}%`,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-xl shadow-lg">
      {/* Slider Container */}
      <div ref={sliderRef} className="flex w-full transition-none">
        {items.map((item, index) => (
          <div key={index} className="w-full min-w-full flex flex-col items-center justify-center p-8 text-center">
            <i className={`text-5xl text-blue-600 ${item.icon}`}></i>
            <h2 className="mt-6 text-2xl font-semibold text-gray-800 uppercase">{item.caption}</h2>
            <p className="mt-3 text-gray-600 max-w-md">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = setInterval(() => {
                  setActiveIndex((prev) => (prev + 1) % items.length);
                }, 4000);
              }
            }}
            className={`w-4 h-4 rounded-full transition-all ${
              activeIndex === index ? "bg-blue-600 scale-110" : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider