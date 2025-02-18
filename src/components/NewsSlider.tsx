"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface NewsSliderProps {
  items: {
    icon: string;
    caption: string;
    text: string;
  }[];
}

const NewsSlider: React.FC<NewsSliderProps> = ({ items }) => {
  const sliderInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sliderNavs = document.querySelectorAll<HTMLInputElement>(".slider__nav");

    sliderNavs.forEach((nav, index) => {
      nav.addEventListener("change", () => {
        if (sliderInnerRef.current) {
          gsap.to(sliderInnerRef.current, {
            x: `${-100 * index}%`, // Move the slider horizontally
            duration: 0.4,
            ease: "power2.out",
          });
        }
      });
    });

    // Cleanup event listeners
    return () => {
      sliderNavs.forEach((nav) => {
        nav.removeEventListener("change", () => {});
      });
    };
  }, []);

  return (
    <div className="slider relative h-[400px] overflow-hidden flex flex-col items-center justify-end">
      {/* Radio Buttons for Navigation */}
      <div className="flex space-x-4 mb-4">
        {items.map((_, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            title={`slide${index + 1}`}
            defaultChecked={index === 0}
            className="slider__nav appearance-none w-3 h-3 rounded-full outline outline-6 outline-offset-[-6px] outline-gray-300 cursor-pointer focus:outline-blue-500"
          />
        ))}
      </div>

      {/* Slider Inner Content */}
      <div
        ref={sliderInnerRef}
        className="slider__inner absolute top-0 left-0 w-[400%] h-full flex transition-transform duration-400"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="slider__contents w-full h-full p-8 flex flex-col items-center justify-center text-center"
          >
            <i className={`slider__image text-4xl text-blue-500 ${item.icon}`}></i>
            <h2 className="slider__caption text-2xl font-medium mt-8 mb-4 uppercase">
              {item.caption}
            </h2>
            <p className="slider__txt text-gray-600 max-w-[300px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSlider;