"use client"

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesSVG } from "../../public/assests";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Registration steps for Business Names",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
  },
  {
    title: "Registration steps for registration of Incorportated Trustee",
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
    <section id="services" className="bg-primary relative md:px-4 mt-[2rem] md:mt-0">
      <Image src={servicesSVG} alt="as" className="absolute top-8 left-0 z-0" />
      <div className=" overflow-hidden z-10 mx-0 md:mx-auto md:p-10 pt-0 justify-items-center">
        <h2
          ref={headerRef}
          className="text-2xl md:text-3xl lg:text-5xl font-merriweather font-bold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <div className="flex flex-col w-full gap-[4rem]   mt-10 z-10">
          <div
            ref={leftBoxRef}
            className="flex md:grid grid-cols-2 gap-8 rounded-xl flex-col justify-between items-center hover:border-none  w-full p-5 pt-8 cursor-pointer group gradient-hover bg-secondary  hover:shadow-lg transition duration-300 z-10"
          >
            <Image
              src={'/assests/tools2.svg'}
              alt={services[0].title}
              width={30}
              height={30}
              className=" h-fit object-cover w-full hidden group-hover:block  text-white "
            />
            <Image
              src={'/assests/tools1.svg'}
              alt={services[0].title}
              width={30}
              height={30}
              className=" h-fit object-cover w-full  block group-hover:hidden text-white "
            />
            <div className="hover:cursor-pointer">
              <h4 className="text-3xl leading-8 text-center group-hover:text-white font-bold w-full mb-3">
                {services[0].title}
              </h4>
             <div className="flex flex-col gap-2 my-2">
             <p className="leading-6 group-hover:text-white text-base">
               1-Check for availability of the Business Name (click here). Read more about name reservationand Reserve a new Name   (click here)
              </p>
              <p className="leading-6 group-hover:text-white text-base">
               2-Complete pre-registration form – CAC-BNo1 and upload relevant registration documents(Online using Company Registration Portal)
              </p>
              <div className="flex flex-col gap-1">
              <p className="leading-6 group-hover:text-white text-base">
               3-Pay filing fee  Check the Fees for our Services here
              </p>
              <p className="leading-6 ml-4 group-hover:text-white text-base">
              -Now registration is end-to-end on the COMPANY REGISTRATION PORTAL (CRP) with electronic Certificate of Registration and Certified Extract of registration information
              </p>
              </div>
              <p className="leading-6  group-hover:text-white text-base">
              Note: Individual/Proprietors can register business names without the services of the legal practitioner, chartered Accountant or Chartered Secretary.
              </p>
             </div>
             <div className="">
              <button className="px-4 py-2 border mt-[2rem] rounded-xl">Register</button>
             </div>
            </div>
          </div>
          <div
            ref={rightBoxRef}
            className="flex md:grid grid-cols-2 gap-8 md:h-[40rem] rounded-xl flex-col justify-between items-center hover:border-none  w-full p-5 pt-3 cursor-pointer group gradient-hover bg-secondary  hover:shadow-lg transition duration-300 z-10"
          >
            
            <div className="hover:cursor-pointer">
            <h4 className="text-3xl leading-8 text-center group-hover:text-white font-bold w-full mb-3">
                {services[1].title}
              </h4>
              <div className="flex flex-col gap-2 my-2">
             <p className="leading-6 group-hover:text-white text-base">
               1-Check for availability of proposed Incorporated Trustee name (click here). Read more about name reservation and Reserve a new Name   (click here)
              </p>
              <p className="leading-6 group-hover:text-white text-base">
               2-Complete pre-registration form and upload trelevant registration documents– CAC-IT01 (Online using Company Registration Portal)
              </p>
              <p className="leading-6 group-hover:text-white text-base">
               3-Pay filing fee  Check the Fees for our Services here
              </p>
              <p className="leading-6  group-hover:text-white text-base">
              Registration is now end-to-end with electronic Certificate of Incorporation and Certified Extract of Registration Information.
              </p>
             </div>
             <div className="">
              <button className="px-4 py-2 border mt-[2rem]  rounded-xl">Register</button>
             </div>
            </div>
            <Image
              src={'/assests/hand2.svg'}
              alt={services[1].title}
              width={30}
              height={30}
              className=" h-fit object-cover w-full hidden group-hover:block  text-white "
              
              />
            <Image
              src={'/assests/hand1.svg'}
              alt={services[1].title}
              width={30}
              height={30}
              className=" h-fit object-cover w-full  block group-hover:hidden text-white "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;