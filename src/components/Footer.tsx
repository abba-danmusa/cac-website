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
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-primary md:text-lg lg:text-lg leading-4 md:mt-4 font-merriweather">
            Follow us on Social Media
          </h3>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#04E824] transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#04E824] transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#04E824] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#04E824] transition-colors"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
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