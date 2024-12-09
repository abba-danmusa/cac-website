"use client"

import Image from 'next/image';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
// import mapURL from '../../public/svg/map.svg?url';
// import MapSVG from './MapSVG';

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
  const nigerianRef = useRef(null);
  const corporateRef = useRef(null);
  const registryRef = useRef(null);
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

    tl.fromTo(imageRef.current,
      { x: -100, opacity: 0 },
      { duration: 1, x: 0, opacity: 1, ease: "power2.out" }
    )

    tl.fromTo(nigerianRef.current, 
      { text: "", opacity: 1 },
      { duration: .5, text: "Nigerian", ease: "none" }
    )
    .fromTo(corporateRef.current, 
      { text: "", opacity: 1 },
      { duration: .5, text: "Corporate", ease: "none" }
    )
    .fromTo(registryRef.current, 
      { text: "", opacity: 1 },
      { duration: .5, text: "Registry", ease: "none" }
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
    // .to(imageRef.current, {
    //   duration: 1,
    //   x: 0,
    //   opacity: 1,
    //   ease: "power2.out"
    // }, "-=0.8");
  }, { scope: containerRef });

  useEffect(() => {
    // Create an interval for automatic sliding
    const slideInterval = setInterval(() => {
      animateNews('next');
    }, 3000); // Slides every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, [animateNews]); // Re-create interval when index changes

  // Pointer Breathing Animation
  useEffect(() => {
    const pointers = document.querySelectorAll(".state-pointer");

    // Apply GSAP breathing animation to all pointers
    gsap.to(pointers, {
      scale: 1.2,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
  ref={containerRef}
  className="bg-secondary min-h-dvh py-6 md:py-10 relative overflow-hidden"
>
  {/* Map Section */}
  {/* <div
    className="absolute left-0 top-0 h-[100%] w-[100%] md:w-1/2 lg:w-[40%] z-0 overflow-hidden"
  >
  </div> */}
  <Image
    src={'/svg/map.svg'}
    // objectFit='fill'
    className="absolute -top-20 left-20 object-contain opacity-70"
    width={500}
    height={400}
    alt="Map"
    priority
  />

  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-20">
    {/* Text Content */}
    <div className="flex-1 text-center md:text-left z-10">
      <h1 ref={nigerianRef} className="text-3xl md:text-4xl font-bold text-secondary min-h-[2.5rem]">
        Nigerian
      </h1>
      <h1 ref={corporateRef} className="text-3xl md:text-4xl font-bold text-black min-h-[2.5rem]">
        Corporate
      </h1>
      <h1 ref={registryRef} className="text-3xl md:text-4xl font-bold text-black min-h-[2.5rem]">
        Registry
      </h1>
      <p ref={paragraphRef} className="mt-4 text-sm md:text-base text-black max-w-prose">
        The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
      </p>
      <button ref={buttonRef} className="w-full md:w-auto mt-6 bg-transparent text-black px-4 md:px-6 py-2 md:py-3 rounded border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300">
        Start Your Application
      </button>
    </div>

    {/* Image Section */}
    <div
      ref={imageRef}
      className="flex-1 w-full md:w-auto mt-6 md:mt-0 relative"
    >
      <div className="bg-secondary relative h-60 md:h-80 lg:h-[300px] w-full">
        <Image
          src="/images/cac.png"
          alt="Hero Image"
          className="h-full w-full rounded shadow-md relative z-10 object-cover"
          width={500}
          height={500}
          priority
        />
        <div className="absolute inset-0 bg-secondary/30 rounded shadow-md z-20" />
        
        {/* News Slider */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-secondary/50 flex items-center z-30">
          <button 
            onClick={() => animateNews('prev')}
            className="px-3 py-4 text-white hover:bg-secondary/50 transition-colors z-40"
          >
            ←
          </button>
          <p 
            ref={newsRef}
            className="flex-1 text-white text-xs md:text-base font-thin text-center px-4 py-3"
          >
            {newsItems[currentNewsIndex]} {" "}
            <br />
            <button className="
              text-white font-sans font-thin
              text-xs md:text-base
              border border-accent
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