"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesSVG } from "../../public/assests";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Business Registration",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
  },
  {
    title: "Post Incorporation",
    description: "Change of Name, Company Conversion, etc.",
    icon: "/images/post-incorporation.png",
  },
];

const ServicesSection: React.FC = () => {
  const headerRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );

    // Boxes animation
    gsap.fromTo([leftBoxRef.current, rightBoxRef.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: leftBoxRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section id="services" className="bg-primary relative px-4 mt-[2rem] md:mt-0">
      <Image src={servicesSVG} alt="as" className="absolute top-8 left-0 z-0" />
      <div className="container overflow-hidden z-10 mx-auto p-10 pt-0 justify-items-center">
        <h2
          ref={headerRef}
          className="text-2xl md:text-3xl lg:text-5xl font-merriweather font-bold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-[4rem] md:gap-40 mt-10 z-10">
          <div
            ref={leftBoxRef}
            className="flex flex-col items-start hover:border-none h-[280px] w-[250px] p-5 pt-3 border-2 cursor-pointer group gradient-hover bg-secondary border-secondary hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={'/assests/tools2.svg'}
              alt={services[0].title}
              width={30}
              height={30}
              className="h-[80px] w-[80px] hidden group-hover:block self-start text-white mb-4"
            />
            <Image
              src={'/assests/tools1.svg'}
              alt={services[0].title}
              width={30}
              height={30}
              className="h-[80px] w-[80px] self-start block group-hover:hidden text-white mb-4"
            />
            <div className="hover:cursor-pointer">
              <h4 className="text-3xl leading-8 group-hover:text-white font-bold w-full mb-3">
                {services[0].title}
              </h4>
              <p className="leading-6 group-hover:text-white text-lg">
                {services[0].description}
              </p>
            </div>
          </div>
          <div
            ref={rightBoxRef}
            className="flex flex-col items-start hover:border-none h-[280px] w-[250px] p-5 pt-3 border-2 cursor-pointer group gradient-hover bg-secondary border-secondary hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={'/assests/hand2.svg'}
              alt={services[1].title}
              width={30}
              height={30}
              className="h-[80px] w-[80px] self-start hidden group-hover:block text-white mb-4"
            />
            <Image
              src={'/assests/hand1.svg'}
              alt={services[1].title}
              width={30}
              height={30}
              className="h-[80px] w-[80px] self-start block group-hover:hidden text-white mb-4"
            />
            <div className="hover:cursor-pointer">
              <h3 className="text-3xl leading-8 group-hover:text-primary font-bold w-full mb-3">
                {services[1].title}
              </h3>
              <p className="leading-6 group-hover:text-white text-lg">
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