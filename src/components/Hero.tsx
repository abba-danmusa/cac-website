// components/HeroSection.tsx
import Image from 'next/image';
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(useGSAP,TextPlugin);

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary py-10 relative">
      <div className="bg-accent h-72 w-80 absolute -left-28 rounded-full mx-auto"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl font-bold text-secondary">Nigerian Corporate Registry</h1>
          <p className="mt-4 text-black">
            The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
          </p>
          <button className="mt-6 bg-transparent text-black px-6 py-3 rounded border-2 border-secondary hover:bg-secondary hover:text-white transition duration-300">
            Start Your Application
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0 relative">
          <div className="relative h-72 w-full">
            <Image
              src="/images/cac.png"
              alt="Hero Image"
              className="h-72 w-full rounded shadow-md relative z-10"
              width={500} 
              height={500}
            />
            <div className="absolute inset-0 bg-secondary/30 rounded shadow-md z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;