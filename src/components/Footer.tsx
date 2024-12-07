// components/Footer.tsx
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-black pt-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col md:flex-col max-w-60">
          <Image src={'/svg/coat-of-arms.svg'} alt="Coat of Arms" width={100} height={100} />
          <h3 className="font-sans my-4 font-bold">Corporate Headquarters</h3>
          <p className="mt-2">Plot 420, Tigris Crescent, Off Aguiyi Ironsi Street, Maitama, Abuja, Nigeria.</p>
        </div>
        <div className="flex flex-col mt-40 md:mt-4">
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">FAQs on customer Registration Portal</a>
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">Services</a>
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">About Us</a>
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">News</a>
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">Resources</a>
          <a href="#" className="mt-2 hover:cursor-pointer hover:text-secondary">FOI Portal</a>
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="font-bold">Follow us on Social Media</h3>
          {/* Add icons here if available */}
        </div>
      </div>
      <div className="bg-secondary flex items-center justify-center mt-4">
        <p className="text-sm text-complimentary py-2">© 2024 CAC | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;