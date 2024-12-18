"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import background from '../../public/svg/services.svg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Registration",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
  },
  {
    title: "Post Incorporation",
    description: "Change of names, conversion of private companies to public, etc.",
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

  return (
    <section id="services" className="bg-primary relative overflow-hidden">
     
      <div className="container mx-auto p-10 justify-items-center">
        <h2
          ref={headerRef}
          className="text-2xl font-bold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div
            ref={leftBoxRef}
            className="w-64 h-56 rounded border-2 border-secondary p-6 hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={services[0].icon} 
              alt={services[0].title} 
              width={48}
              height={48}
              className="h-12 w-14 align-middle mx-auto mb-4"
            />
            <div className="hover:cursor-pointer">
              <h3 className="text-lg mb-6 font-sans font-semibold text-black">
                {services[0].title}
              </h3>
              <p className="text-black font-sans text-sm">
                {services[0].description}
              </p>
            </div>
          </div>
          <div
            ref={rightBoxRef}
            className="w-64 h-56 rounded border-2 border-secondary p-6 hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={services[1].icon} 
              alt={services[1].title} 
              width={48}
              height={48}
              className="h-12 w-14 align-middle mx-auto mb-4"
            />
            <div className="hover:cursor-pointer">
              <h3 className="text-lg mb-6 font-sans font-semibold text-black">
                {services[1].title}
              </h3>
              <p className="text-black font-sans text-sm">
                {services[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;