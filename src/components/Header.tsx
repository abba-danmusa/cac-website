'use client';

import React from "react";

import Image from 'next/image';

const Header: React.FC = () => {

  const [activeTab, setActiveTab] = React.useState('home');

  const isActive = 'border-b-2 border-secondary';

  return (
    <header
      className="bg-accent shadow h-16 flex items-center my-3"
    >
      <div
        className="container mx-auto flex justify-between items-center"
      >
        <Image
          src="/images/logo.png"
          alt="CAC Logo"
          width={150}
          height={100}
        />
        <nav className="flex space-x-6 items-center">
          <a
            href="#"
            onClick={() => setActiveTab('home')}
            className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'home' ? isActive : ''}`}
          >Home</a>
          <a
            href="#about"
            onClick={() => setActiveTab('about')}
            className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'about' ? isActive : ''}`}
          >About Us</a>
          <a
            href="#services"
            onClick={() => setActiveTab('services')}
            className={`text-black hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'services' ? isActive : ''}`}
          >Services</a>
          <a
            href="#resources"
            onClick={() => setActiveTab('resources')}
            className={`text-black hover:text-green-700 hover:border-b-2 hover:border-secondary font-sans ${activeTab == 'resources' ? isActive : ''}`}
          >Resources</a>
          <a
            href="#report"
            className="text-white bg-green-700 px-4 py-2 rounded hover:bg-green-800 font-sans" 
          >Reportgov.ng</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;