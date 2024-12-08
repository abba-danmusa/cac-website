'use client';

import React from "react";
import Image from 'next/image';
import Link from "next/link";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = 'border-b-2 border-secondary';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-accent shadow py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="CAC Logo"
              width={100}
              height={60}
              className="w-20 h-12 md:w-24 md:h-20 object-contain"
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
            bg-secondary md:bg-secondary
            p-4 md:p-0
            space-y-4 md:space-y-0
            md:space-x-6
            z-50
          `}>
            <a
              href="#"
              onClick={() => {
                setActiveTab('home');
                setIsMenuOpen(false);
              }}
              className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'home' ? isActive : ''}`}
            >Home</a>
            <a
              href="#about"
              onClick={() => {
                setActiveTab('about');
                setIsMenuOpen(false);
              }}
              className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'about' ? isActive : ''}`}
            >About Us</a>
            <a
              href="#services"
              onClick={() => {
                setActiveTab('services');
                setIsMenuOpen(false);
              }}
              className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'services' ? isActive : ''}`}
            >Services</a>
            <a
              href="#resources"
              onClick={() => {
                setActiveTab('resources');
                setIsMenuOpen(false);
              }}
              className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'resources' ? isActive : ''}`}
            >Resources</a>
            <a
              href="#report"
              onClick={() => setIsMenuOpen(false)}
              className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-800 font-sans text-center" 
            >Reportgov.ng</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header