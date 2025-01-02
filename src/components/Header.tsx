'use client';

import React, { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
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

    console.log(location);
    

  return (
    <header className=" mt-4 flex justify-center pb-8 w-full">
      <div className="container bg-accent rounded-[15px] shadow1 w-[83.0625rem] mx-auto px-2">
        <div className="flex justify-between items-center">
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
            className="md:hidden text-black"
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
            md:flex
            absolute md:relative
            top-16 md:top-0
            left-0 md:left-auto
            right-0 md:right-auto
            flex-col md:flex-row
            bg-accent md:bg-accent
            p-4 md:p-0
            space-y-4 md:space-y-0
            items-center
            md:space-x-6
            z-50
          `}>
            <Link
              href="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] hover:border-b-2 hover:border-secondary font-sans text-[27px] ${location == '/' ? 'border-b-2 p-1 text-secondary border-[#04E824]' : ''}`}
            >Home</Link>
            <a
              href="/who"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] hover:border-b-2 hover:border-secondary font-sans text-[27px] ${location === '/who' ? 'border-b-2 p-1 text-secondary border-[#04E824]' : ''}`}
            >About Us</a>
            <li 
            onMouseOver={showDropdown} 
            onMouseOut={hideDropdown}
            className="dropdown"
          >
            <a href="#"
            className={`text-[#4D6C4A] hover:border-b-2 hover:border-secondary font-sans text-[27px] ${location === '/revised' ? 'border-b-2 p-1 text-secondary border-[#04E824]' : ''}`}
            >Services</a>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><a href="/companies">Companies</a></li>
                <li><a href="/business-names">Business Names</a></li>
                <li><a href="/incorporated-trustees">Incorporated Trustees</a></li>
              </ul>
            )}
          </li>
            {/* <a
              href="/revised"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-black hover:border-b-2 hover:border-secondary font-sans text-sm ${location === '/revised' ? 'border-b-2 p-1 text-secondary border-secondary' : ''}`}
            >Services</a> */}
            <a
              href="/resources"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`text-[#4D6C4A] hover:border-b-2 hover:border-secondary font-sans lg:text-[27px] ${location === '/resources' ? 'border-b-2 p-1 text-secondary border-[#04E824]' : ''}`}
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