// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-4 text-white md:pt-6 flex flex-col items-center">
      <div className="px-4 md:px-[4rem] flex flex-col md:flex-row mb-[2rem] justify-between items-center w-full max-w-screen-xl">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <Image src={'/svg/coat-of-arms.svg'} alt="Coat of Arms" width={100} height={100} />
        <h3 className="mt-4 text-lg text-white md:text-xl lg:text-2xl font-bold">Corporate Headquarters</h3>
        <p className="lg:text-sm md:text-xs text-xs text-primary text-center md:text-left">Plot 420, Tigris Crescent, <br /> Off Aguiyi Ironsi Street, <br /> Maitama, Abuja, Nigeria.</p>
      </div>
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <h3 className="text-primary text-[16px] md:text-[20px] font-bold leading-4 lg:text-2xl">Get In Touch</h3>
        <a className="text-xs text-primary lg:text-sm font-roboto leading-4" href="mailto:cservice@cac.gov.ng">cservice@cac.gov.ng</a>
        <a className="text-xs text-primary lg:text-sm" href="tel:+2348095521924">+2348095521924</a>
        {/* Add icons here if available */}
      </div>
      <div>
        <h3 className="text-primary md:text-lg lg:text-lg leading-4 md:mt-4 font-merriweather">Follow us on Social Media</h3>
        {/* Add the social media icons please */}
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="flex flex-col items-center md:items-start text-[12px] md:text-[14px] lg:text-[20px] font-roboto">
        <a href="postis" className="mt-2 hover:cursor-pointer leading-6 text-center md:text-left hover:text-[#04E824] text-sm">FAQs</a>
        <a href="/revised" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824] text-sm">Services</a>
        <a href="/who" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824] text-sm">About Us</a>
        <a href="/news" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824] text-sm">News</a>
        <a href="/resources" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824] text-sm">Resources</a>
        <a href="/foi" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824] text-sm">FOI Portal</a>
        </div>
      </div>
      </div>
      <div className="bg-secondary flex items-center justify-center w-full">
      <p className="text-center text-xs text-primary py-2 font-sans font-thin">© Copyright 2019 - 2024 | CAC | All Rights Reserved | Powered by CAC Corporate Affairs Commission</p>
      </div>
    </footer>
  );
};

export default Footer;