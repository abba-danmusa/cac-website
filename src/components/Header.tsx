"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownAboutVisible, setDropdownAboutVisible] = useState(false);
  const [dropdownServicesVisible, setDropdownServicesVisible] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        gsap.to(header, { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3 });
      } else {
        gsap.to(header, { boxShadow: "none", duration: 0.3 });
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isAboutActive = [
    "/who",
    "/board-member",
    "/head-of-department",
    "/head-of-section"
  ].includes(location || '');

  const isServicesActive = [
    "/companies",
    "/business-names",
    "/incorporated-trustees",
    "/summary-of-fees",
    "/service-timeline",
    "/timeline"
  ].includes(location || '');

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="mx-auto md:mx-0 md:w-full px-6 md:px-[1rem] lg:px-12 flex justify-between items-center py-4">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="CAC Logo"
            width={150}
            height={75}
            className="w-28 h-auto md:w-40 object-contain"
          />
        </Link>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute md:relative px-4 md:px-0 top-full left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-6 md:py-0 shadow-lg md:shadow-none`}
        >
          <Link 
            href="/" 
            className={`nav-link text-sm text-black ${location === "/" && " border-b-2 font-bold border-secondary"}`}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            Home
          </Link>

         

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => !isMenuOpen && setDropdownAboutVisible(true)}
            onMouseLeave={() => !isMenuOpen && setDropdownAboutVisible(false)}
          >
            <button 
              className={`flex w-full items-center nav-link text-sm text-black ${isAboutActive && " border-b-2 font-bold border-secondary"}`}
              onClick={() => isMenuOpen && setDropdownAboutVisible(!dropdownAboutVisible)}
            >
              About Us <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownAboutVisible && (
              <div className={`${isMenuOpen ? 'relative w-full' : 'absolute left-0 mt-1 w-48'} bg-white md:border md:shadow-md  flex-col flex rounded-md  py-2`}>
                <Link 
                  href="/who" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Who we are
                </Link>
                <Link 
                  href="/board-member" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Board member
                </Link>
                <Link 
                  href="/hod" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Head of department/ Units and State Office
                </Link>
                <Link 
                  href="/video" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Organizational Structure
                </Link>
              </div>
            )}
          </div>


          <Link 
            href="/news" 
            className={`nav-link text-sm text-black ${location === "/news" && " border-b-2 font-bold border-secondary"}`}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            News
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => !isMenuOpen && setDropdownServicesVisible(true)}
            onMouseLeave={() => !isMenuOpen && setDropdownServicesVisible(false)}
          >
            <button 
              className={`flex items-center w-full nav-link text-sm text-black ${isServicesActive && " border-b-2 font-bold border-secondary"}`}
              onClick={() => isMenuOpen && setDropdownServicesVisible(!dropdownServicesVisible)}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownServicesVisible && (
              <div className={`${isMenuOpen ? 'relative w-full' : 'absolute left-0 mt-1 w-48'} bg-white md:border md:shadow-md flex-col flex rounded-md  py-2`}>
                <Link 
                  href="/companies" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Companies
                </Link>
                <Link 
                  href="/business" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Business Names
                </Link>
                <Link 
                  href="/tr" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Incorporated Trustees
                </Link>
                <Link 
                  href="/fees" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Summary of fees
                </Link>
                <Link 
                  href="/revised" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Service Timeline
                </Link>
                <Link 
                  href="/timeline" 
                  className="dropdown-item text-sm md:text-base text-black hover:bg-gray-100 px-4 py-2"
                  onClick={() => isMenuOpen && setIsMenuOpen(false)}
                >
                  Timeline
                </Link>
              </div>
            )}
          </div>

          <Link 
            href="/resources" 
            className={`nav-link text-black text-sm ${location === "/resources" && " border-b-2 font-bold border-secondary"}`}
            onClick={() => isMenuOpen && setIsMenuOpen(false)}
          >
            Resources
          </Link>
          
          <a
            href="https://reportgov.ng"
            className="text-white px-5 py-2 rounded-md text-sm bg-gradient-to-r from-secondary to-complimentary hover:bg-gradient-to-r hover:from-complimentary hover:to-secondary"
          >
            ReportGov.ng
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;