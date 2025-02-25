"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesSVG } from "../../public/assests";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Pre Incorporation",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
    steps: {
      title: "Registration steps",
      description: "Registration on the COMPANY REGISTRATION PORTAL (CRP) is now end-to-end, with electronic certificates and certified extracts available.",
      steps: [
        "Check for availability of the Business Name on the CRP",
        "Complete pre-registration form",
        "Pay filing fee",
        "Submit application",
        "Print certificate",
      ]
    }
  },
  {
    title: "Post Incorporation",
    description: "Change of Name, Company Conversion, etc.",
    icon: "/images/post-incorporation.png",
    steps: {
      title: "Post Incorporation steps",
      description: "Post Incorporation services include Change of Name, Conversion and Re-registration, Filing of Annual Returns, Increase in Share Capital, etc.",
      steps: [
        "Check for availability of proposed Incorporated Trustee name",
        "Complete pre-registration form and upload trelevant registration documents– CAC-IT01",
        "Pay filing fee",
      ]
    }
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
      {/* <Image src={servicesSVG} alt="as" className="absolute top-8 left-0 z-0" /> */}
      <div className="container overflow-hidden z-10 mx-auto p-10 pt-0 justify-items-center">
        <h2
          ref={headerRef}
          className="text-2xl md:text-3xl lg:text-4xl font-merriweather font-semibold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <p className="text-center text-base max-w-screen-md mt-4 z-10 mx-auto">
          We offer a wide range of services to help you start and grow your business. Individuals and proprietors can register business names without needing a legal practitioner, chartered accountant, or secretary.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-[4rem] md:gap-40 mt-32 z-10">
          <div
            ref={leftBoxRef}
            className="flex flex-col items-start hover:border-none h-full w-[250px] p-5 pt-3 border-2 cursor-pointer group gradient-hover bg-secondary border-secondary hover:shadow-lg transition duration-300 z-10"
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
          <div className="flex flex-col items-start gap-4 max-w-md">
            <h1 className="text-8xl leading-8 font-extrabold w-full mb-10 mx-auto">
              01
            </h1>
            <h3 className="text-3xl leading-8 font-bold w-full mb-3">
              {services[0].steps.title}
            </h3>
            <p className="leading-6 text-sm">
              {services[0].steps.description}
            </p>
            <ul className="list-disc list-inside mt-4">
              {services[0].steps.steps.map((step, index) => (
                <li key={index} className="text-sm">{step}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-[4rem] md:gap-40 mt-32 z-10">
          <div className="flex flex-col items-start gap-4 max-w-md">
            <h1 className="text-8xl leading-8 font-extrabold w-full mb-10 mx-auto"> 02 </h1>
            <h3 className="text-3xl leading-8 font-bold w-full mb-3">
              {services[1].steps.title}
            </h3>
            <p className="leading-6 text-sm">
              {services[1].steps.description}
            </p>
            <ul className="list-disc list-inside mt-4">
              {services[1].steps.steps.map((step, index) => (
                <li key={index} className="text-sm">{step}</li>
              ))}
            </ul>
          </div>
          <div
            ref={rightBoxRef}
            className="flex flex-col items-start hover:border-none h-full w-[250px] p-5 pt-3 border-2 cursor-pointer group gradient-hover bg-secondary border-secondary hover:shadow-lg transition duration-300 z-10"
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