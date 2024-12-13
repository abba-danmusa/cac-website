// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-black md:pt-6">
      <div className="container px-4 md:px-auto flex flex-row md:justify-between items-center">
        <div className="flex flex-col md:flex-col">
          <Image src={'/svg/coat-of-arms.svg'} alt="Coat of Arms" width={100} height={100} />
          <h3 className="font-sans mt-4 text-[#2D3B30] md:text-[30px]">Corporate Headquarters</h3>
          <p className="md:text-[20px] text-secondary">Plot 420, Tigris Crescent, <br /> Off Aguiyi Ironsi Street, <br /> Maitama, Abuja, Nigeria.</p>
        </div>
       <div className="flex flex-col md:flex-row md:justify-between">
       <div className="flex flex-col items-end md:items-baseline mt-8 md:mt-4">
          <a href="postis" className="mt-2 hover:cursor-pointer text-end md:text-justify  hover:text-secondary">FAQs on customer Registration Portal</a>
          <a href="/revised" className="mt-2 hover:cursor-pointer hover:text-secondary">Services</a>
          <a href="/who" className="mt-2 hover:cursor-pointer hover:text-secondary">About Us</a>
          <a href="/news" className="mt-2 hover:cursor-pointer hover:text-secondary">News</a>
          <a href="/resources" className="mt-2 hover:cursor-pointer hover:text-secondary">Resources</a>
          <a href="/foi" className="mt-2 hover:cursor-pointer hover:text-secondary">FOI Portal</a>
        </div>
        <div className="mt-4 md:mt-0 text-end md:text-center">
          <div className="flex flex-col items-end md:items-center">
            <h3 className=" text-[#2D3B30] text-[25px] md:text-[30px]">Get in touch with us</h3>
            <a href="mailto:cservice@cac.gov.ng">cservice@cac.gov.ng</a>
            <a href="tel:+2348095521924">+2348095521924</a>
          </div>
          <h3 className=" text-[#2D3B30] md:text-[30px] md:mt-4">Follow us on Social Media</h3>
          {/* Add icons here if available */}
        </div>
       </div>
      </div>
      <div className="bg-secondary flex items-center justify-center mt-4">
        <p className="text-xs text-complimentary py-2 font-sans font-thin">© Copyright 2019 - 2024 | CAC | All Rights Reserved | Powered by CAC Corporate Affairs Commission</p>
      </div>
    </footer>
  );
};

export default Footer;