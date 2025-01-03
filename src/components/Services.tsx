"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clip2, hand1, hand2, tools1, tools2 } from "../../public/assests";
// import background from '../../public/svg/services.svg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Registration",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
  },
  {
    title: "Post  Incorporation  Services",
    description: "Change of names, conversion of private companies to public, e.t.c.",
    icon: "/images/post-incorporation.png",
  },
];

const ServicesSection: React.FC = () => {
  const headerRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Left box animation
    gsap.fromTo(leftBoxRef.current,
      { 
        opacity: 0, 
        x: -100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: leftBoxRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // Right box animation
    gsap.fromTo(rightBoxRef.current,
      { 
        opacity: 0, 
        x: 100 
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: rightBoxRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });

  const { src: tools1Src } = tools1;
  const { src: tools2Src } = tools2;
  const { src: hand1Src } = hand1;
  const { src: hand2Src } = hand2;

  return (
    <section id="services" className="bg-primary relative  ">
     <Image src={clip2} 
     alt="as"
     className="absolute top-8 left-0 z-0"
     />
      <div className="container overflow-hidden z-10 mx-auto p-10 pt-0 justify-items-center">
        <h2
          ref={headerRef}
          className="text-2xl  font-bold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div 
          ref={leftBoxRef}
          className="flex flex-col items-start hover:border-none h-[284] w-[308px] p-5 pt-3  border-2 cursor-pointer group gradient-hover border-secondary  hover:shadow-lg transition duration-300 z-10">
            <Image
              src={tools2Src} 
              alt={services[0].title} 
              width={48}
              height={48}
              className="h-[101px] w-[105px] hidden group-hover:block self-start text-white mb-4"
            />
            <Image
              src={tools1Src} 
              alt={services[0].title} 
              width={48}
              height={48}
              className="h-[101px] w-[105px] self-start block group-hover:hidden text-white mb-4"
            />
            <div className="hover:cursor-pointer">
              <h3 className="text-[27px] leading-8 font-sans group-hover:text-white font-bold text-black">
                {services[0].title}
              </h3>
              <p className="text-black leading-6 group-hover:text-white font-sans text-[24px]">
                {services[0].description}
              </p>
            </div>
          </div>
          <div 
          ref={rightBoxRef}
          className="flex flex-col items-start h-[284] w-[308px] p-5 pt-3 hover:border-none  border-2 cursor-pointer group gradient-hover border-secondary  hover:shadow-lg transition duration-300 z-10">
             <Image
              src={hand2Src} 
              alt={services[1].title} 
              width={48}
              height={48}
              className="h-[101px] w-[105px] self-start hidden group-hover:block text-white mb-4"
            />
             <Image
              src={hand1Src} 
              alt={services[1].title} 
              width={48}
              height={48}
              className="h-[101px] w-[105px] self-start block group-hover:hidden text-white mb-4"
            />
            <div className="hover:cursor-pointer">
            <h3 className="text-[27px] leading-8 font-sans group-hover:text-white font-bold text-black">
                {services[1].title}
              </h3>
              <p className="text-black leading-6 group-hover:text-white font-sans text-[24px]">
                {services[1].description}
              </p>
            </div>
          </div>
        
          {/* <div
            ref={rightBoxRef}
            className=" h-56 rounded border-2 cursor-pointer group gradient-hover border-secondary  hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={services[1].icon} 
              alt={services[1].title} 
              width={48}
              height={48}
              className="h-12 w-14 align-middle mx-auto mb-4"
            />
            <div className="hover:cursor-pointer">
              <h3 className="text-lg mb-6 font-sans group-hover:text-white font-semibold text-black">
                {services[1].title}
              </h3>
              <p className="text-black group-hover:text-white font-sans text-sm">
                {services[1].description}
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;