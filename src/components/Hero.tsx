"use client"

import Image from 'next/image';
import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ellipse, rg } from '@/assests';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, TextPlugin);

const newsItems = [
  "“The Registry’s mantra goes here”",
  "CONGRATULATIONS TO THE NEWLY APPOINTED HONORABLE MINISTER INDUSTRY TRADE AND INVESTMENT",
  
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
  className="bg-primary mb-[8rem] py-6 md:py-10 relative overflow-hidden"
>
  <Image
    src={ellipse}
    className="absolute block md:hidden top-[13rem] left-0 object-contain opacity-70"
    alt="Map"
    priority
  />

  <div className=" mx-auto px-4 flex flex-col-reverse md:flex-row items-start md:items-center gap-8 md:gap-20">
    {/* Text Content */}
    <div className="flex-1 text-left z-10">
      <div className="flex gap-2 md:gap-0 md:flex-col ">
      <h1 ref={nigerianRef} className="text-3xl md:text-4xl font-bold text-secondary min-h-[2.5rem]">
        Nigerian
      </h1>
      <h1 ref={corporateRef} className="text-3xl md:text-4xl font-bold text-black min-h-[2.5rem]">
        Corporate
      </h1>
      </div>
      <h1 ref={registryRef} className="text-3xl md:text-4xl font-bold text-black min-h-[2.5rem]">
        Registry
      </h1>
      <p ref={paragraphRef} className="my-4 text-sm md:text-base text-black max-w-prose">
        The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
      </p>
      <Link ref={buttonRef} href="https://pre.cac.gov.ng" className="  md:w-auto mt-[3rem] bg-transparent text-black px-4 md:px-6 py-2 md:py-3 rounded border-2 border-secondary gradient-hover  transition duration-300">
      Start Your Application
      </Link>
     
      {/* <button ref={buttonRef}  className=" md:w-auto mt-6 bg-transparent text-black px-4 md:px-6 py-2 md:py-3 rounded border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300">
       
      </button> */}
    </div>

    {/* Image Section */}
    <div
     
      className="flex-1 rounded-lg overflow-hidden  backl w-full md:w-auto mt-6 md:mt-0 relative"
    >
      <div  ref={imageRef} className=" relative  h-60 md:h-80 lg:h-[300px] w-full">
        <div className="absolute top-0 bottom-0 left-0 right-0  flex items-center z-30">
      
          <div 
            ref={newsRef}
            className="flex-1 text-white text-xs   md:text-base font-thin text-center px-4 py-3"
          >
            <span className='flex  justify-center'>  
            {currentNewsIndex === 0 ? (
            <span className="flex flex-col ml-[1rem] w-full items-start">
            <Image
            src={rg}
            className='lg:w-[150px] w-[150px]'
            alt="Map"
            width={150}
            />
            <p className="text-white lg:text-[20px]">Hussaini Ishaq Magaji, SAN</p>
            <p className="text-[#E7EFE7] text-[10px] lg:text-[14px]">RG/CEO Corporate Affairs Commission</p>
            </span>
            ) : null} 

          <span className={`${currentNewsIndex === 0 ? 'mt-[2rem] lg:-ml-[8rem] text-start text-base lg:text-[25px] text-[#E7EFE7] ' : ''}`}>  {newsItems[currentNewsIndex]}</span> {" "}
            </span>
            <br />
            {currentNewsIndex === 1 ? (
              <button className="
                text-white font-sans font-thin
                text-xs md:text-base
                border border-[accent] rounded-lg
                p-1 mt-4
                "
              >Read More</button>

            ) : null} 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;