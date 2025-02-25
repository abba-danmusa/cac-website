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
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#04E824] transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
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
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-[#04E824] transition-colors"
      aria-label="Instagram"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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