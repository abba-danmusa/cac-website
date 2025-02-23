"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = usePathname();

  useEffect(() => {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        gsap.to(header, { boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3 });
      } else {
        // Scrolling up
        gsap.to(header, { boxShadow: "none", duration: 0.3 });
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="CAC Logo"
            width={150}
            height={75}
            className="w-28 h-auto md:w-40 object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 py-6 lg:py-0 shadow-lg lg:shadow-none`}
        >
          <Link href="/" className={`nav-link text-sm ${location === "/" && " border-b-2 border-secondary"}`}>
            Home
          </Link>
          <Link href="/news" className={`nav-link text-sm ${location === "/news" && " border-b-2 border-secondary"}`}>
            News
          </Link>
          <Link href="/who" className={`nav-link text-sm ${location === "/who" && " border-b-2 border-secondary"}`}>
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <button className="flex items-center nav-link text-sm">
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            {dropdownVisible && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                <Link href="/companies" className="dropdown-item">
                  Companies
                </Link>
                <Link href="/business-names" className="dropdown-item">
                  Business Names
                </Link>
                <Link href="/incorporated-trustees" className="dropdown-item">
                  Incorporated Trustees
                </Link>
              </div>
            )}
          </div>

          <Link href="/resources" className={`nav-link text-sm ${location === "/resources" && " border-b-2 border-secondary"}`}>
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

/* Tailwind classes used:
  - nav-link: "text-gray-700 hover:text-green-600 font-medium border-b-2 border-transparent hover:border-green-600 transition-all"
  - dropdown-item: "block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
*/
