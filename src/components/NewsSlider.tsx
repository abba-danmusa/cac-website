"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface NewsSliderProps {
  items: {
    icon: string;
    caption: string;
    text: string;
    date: string;
  }[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % items.length);
      }, 4000);
    };

    startAutoSlide();

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

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000);
  };

  return (
    <div className="relative w-full flex flex-col items-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Slider Container */}
      <div className="w-full overflow-hidden">
        <div ref={sliderRef} className="flex w-full transition-none">
          {items.map((item, index) => (
            <div key={index} className="w-full min-w-full flex flex-col items-center justify-center p-6 text-center">
              <i className={`text-5xl text-blue-600 ${item.icon}`}></i>
              <h2 className="mt-6 text-xl font-semibold text-gray-800 uppercase">{item.caption}</h2>
              <p className="mt-3 text-gray-600 max-w-md line-clamp-3">{item.text}</p>
              <p>{item.date}</p>
              <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Read More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots (Placed Well Below the Slider) */}
      <div className="mt-10 flex space-x-3">
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
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? "bg-blue-600 scale-110" : "bg-gray-400 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;