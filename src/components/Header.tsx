'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
  // const location = usePathname()
    const showDropdown = () => {
      setDropdownVisible(true);
    };
  
    const hideDropdown = () => {
      setDropdownVisible(false);
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    const location = usePathname()

    // console.log(location);
    

  return (
    <header className=" mt-4 flex  justify-center pb-4 w-full ">
      <div className={` bg-accent rounded-[15px] z-50 ${isMenuOpen ? 'h-[23rem]' : 'shadow1 '} ${location === '/' ? "" : "mx-[2rem]"} w-full    lg:px-2`}>
        <div className="flex justify-between w-full items-center px-4 lg:px-0">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="CAC Logo"
              width={300}
              height={150}
              className="w-28 h-16 md:w-[180px] md:h-[100px] object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-black"
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav className={`
            ${isMenuOpen ? 'flex' : 'hidden'} 
            lg:flex
            absolute lg:relative
            top-[5rem] lg:top-0
            left-0 lg:left-auto
            right-0 lg:right-auto
            flex-col lg:flex-row
             p-4 lg:p-0 lg:gap-[16px]
            space-y-4 lg:space-y-0
            items-center
            lg:space-x-6
            lg:items-center
            z-50
          `}>
            <Link
              href="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] font-merriweather hover:border-b-2 pb-4 hover:border-secondary font-sans text-sm lg:text-[23px] ${location == '/' ? 'border-b-[4px] pb-3 text-secondary border-[#4D6C4A]' : ''}`}
            >Home</Link>
            <a
              href="/who"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] font-merriweather hover:border-b-2 pb-3 hover:border-secondary font-sans text-sm lg:text-[23px] ${location === '/who' ? 'border-b-[4px] pb-3 text-secondary border-[#4D6C4A]' : ''}`}
            >About Us</a>
            <li 
            onMouseOver={showDropdown} 
            onMouseOut={hideDropdown}
            className={`text-[#4D6C4A] font-merriweather dropdown hidden lg:block hover:border-b-2 pb-4 hover:border-secondary font-sans text-sm lg:text-[23px] ${location === '/revised' ? 'border-b-[4px] pb-3  text-secondary border-[#4D6C4A]' : ''}`}

          >
            <a href="#"
            >Services</a>
            {dropdownVisible && (
              <ul className="dropdown-menu mt-2">
                <li><a href="/companies">Companies</a></li>
                <li><a href="/business-names">Business Names</a></li>
                <li><a href="/incorporated-trustees">Incorporated Trustees</a></li>
              </ul>
            )}
          </li>
            <a
              href="/resources"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] font-merriweather hover:border-b-2 pb-4 hover:border-secondary font-sans text-sm lg:text-[23px] ${location === '/resources' ? 'border-b-[4px] pb-3  text-secondary border-[#4D6C4A]' : ''}`}
            >Resources</a>
            <a
              href="https://reportgov.ng"
              onClick={() => setIsMenuOpen(false)}
              className="text-[#04E824] bg-secondary px-4 py-2 rounded hover:bg-green-800 font-sans text-sm text-center" 
            >Reportgov.ng</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header