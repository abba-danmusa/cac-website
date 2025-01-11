// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4D6C4A] text-white md:pt-6">
      <div className="px-4 md:px-[4rem] flex flex-row mb-[4rem] justify-between items-center">
        <div className="flex flex-col md:flex-col">
          <Image src={'/svg/coat-of-arms.svg'} alt="Coat of Arms" width={100} height={100} />
          <h3 className="font-sans mt-4 text-[13px] text-white md:text-[20px] lg:text-[30px] font-merriweather">Corporate Headquarters</h3>
          <p className="lg:text-[20px] md:text-[13px] text-[10px] text-white">Plot 420, Tigris Crescent, <br /> Off Aguiyi Ironsi Street, <br /> Maitama, Abuja, Nigeria.</p>
        </div>
       <div className="flex flex-col md:flex-row md:justify-between items-center">
       <div className="flex flex-col items-end md:items-baseline text-[12px] md:text-[14px] lg:text-[20px] mt-8 md:mt-4 font-roboto">
          <a href="postis" className="mt-2 hover:cursor-pointer leading-6 text-end md:text-justify  hover:text-[#04E824]">FAQs on customer Registration Portal</a>
          <a href="/revised" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824]">Services</a>
          <a href="/who" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824]">About Us</a>
          <a href="/news" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824]">News</a>
          <a href="/resources" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824]">Resources</a>
          <a href="/foi" className="mt-2 hover:cursor-pointer leading-6 hover:text-[#04E824]">FOI Portal</a>
        </div>
        <div className="mt-4 md:mt-0 text-end  md:text-center">
          <div className="flex flex-col items-end md:items-center">
            <h3 className=" text-white text-[16px] md:text-[20px] lg:text-[24px] font-merriweather">Get in touch with us</h3>
            <a className="text-[13px] text-white  lg:text-[18px] font-roboto" href="mailto:cservice@cac.gov.ng">cservice@cac.gov.ng</a>
            <a className="text-[13px] text-white lg:text-[18px] font-roboto" href="tel:+2348095521924">+2348095521924</a>
          </div>
          <h3 className=" text-white md:text-[20px] lg:text-[30px] leading-4 md:mt-4 font-merriweather">Follow us on Social Media</h3>
          {/* Add icons here if available */}
        </div>
       </div>
      </div>
      <div className="bg-[#E7EFE7] flex md:mt-8 items-center justify-center ">
        <p className="text-center md:text-justify text-xs text-[#4D6C4A] py-2 font-sans font-thin">© Copyright 2019 - 2024 | CAC | All Rights Reserved | Powered by CAC Corporate Affairs Commission</p>
      </div>
    </footer>
  );
};

export default Footer;