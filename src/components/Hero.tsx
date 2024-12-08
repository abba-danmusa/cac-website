"use client"

import Image from 'next/image';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const newsItems = [
  "CAC Introduces 24-hour Company Registration",
  "New Guidelines for Business Name Registration Released",
  "Online Filing System Upgrade Completed",
  "Corporate Affairs Commission Launches Mobile App"
];

const HeroSection: React.FC = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const newsRef = useRef(null);

  const animateNews = useCallback((direction: 'next' | 'prev') => {
    const xOffset = direction === 'next' ? -100 : 100;
    const nextIndex = direction === 'next' 
      ? (currentNewsIndex + 1) % newsItems.length
      : (currentNewsIndex - 1 + newsItems.length) % newsItems.length;

    gsap.timeline()
      .to(newsRef.current, {
        duration: 0.5,
        x: xOffset * -1,
        opacity: 0,
        ease: "power2.inOut"
      })
      .set(newsRef.current, { x: xOffset })
      .call(() => setCurrentNewsIndex(nextIndex))
      .to(newsRef.current, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: "power2.inOut"
      });
  }, [currentNewsIndex]);

  useGSAP(() => {
    gsap.set([paragraphRef.current, buttonRef.current, imageRef.current], {
      opacity: 0
    });

    const tl = gsap.timeline();

    tl.fromTo(headingRef.current, 
      { text: "", opacity: 1 },
      { duration: 2, text: "Nigerian Corporate Registry", ease: "none" }
    )
    .to(paragraphRef.current, {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "+=0.2")
    .to(buttonRef.current, {
      duration: 0.8,
      scale: 1,
      opacity: 1,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .to(imageRef.current, {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.out"
    }, "-=0.8");
  }, { scope: containerRef });

  useEffect(() => {
    // Create an interval for automatic sliding
    const slideInterval = setInterval(() => {
      animateNews('next');
    }, 3000); // Slides every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [animateNews]); // Re-create interval when index changes

  return (
    <section ref={containerRef} className="bg-primary py-6 md:py-10 relative overflow-hidden">
      <div className="bg-accent h-48 w-48 md:h-72 md:w-80 absolute -left-20 md:-left-28 rounded-full"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-20">
        {/* Left content remains the same */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 ref={headingRef} className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary min-h-[2.5rem]">
            Nigerian Corporate Registry
          </h1>
          <p ref={paragraphRef} className="mt-4 text-sm md:text-base text-black max-w-prose">
            The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
          </p>
          <button ref={buttonRef} className="w-full md:w-auto mt-6 bg-transparent text-black px-4 md:px-6 py-2 md:py-3 rounded border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300">
            Start Your Application
          </button>
        </div>

        <div ref={imageRef} className="flex-1 w-full md:w-auto mt-6 md:mt-0 relative">
          <div className="relative h-48 sm:h-60 md:h-72 w-full">
            <Image
              src="/images/cac.png"
              alt="Hero Image"
              className="h-full w-full rounded shadow-md relative z-10 object-cover"
              width={500} 
              height={500}
              priority
            />
            <div className="absolute inset-0 bg-secondary/30 rounded shadow-md z-20" />
            
            {/* News Slider with Navigation */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-secondary/50 flex items-center z-30">
              <button 
                onClick={() => animateNews('prev')}
                className="px-3 py-4 text-white hover:bg-secondary/50 transition-colors z-40"
              >
                ←
              </button>
              <p 
                ref={newsRef}
                className="flex-1 text-white text-xs md:text-base font-medium text-center px-4 py-3"
              >
                {newsItems[currentNewsIndex]} {" "}
                <br />
                <button className="
                  text-white font-medium
                  text-xs md:text-base
                  border border-complimentary
                  p-1 mt-4
                  bg-secondary"
                >Read More</button>
              </p>
              <button 
                onClick={() => animateNews('next')}
                className="px-3 py-4 text-white hover:bg-secondary/50 transition-colors z-40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;