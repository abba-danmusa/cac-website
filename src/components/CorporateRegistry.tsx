import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CorporateRegistry: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const texts = ["Nigerian Corporate Registry", "We Are Everywhere"];
    let currentIndex = 0;

    const animateText = () => {
      if (!textRef.current) return;

      const text = texts[currentIndex];
      textRef.current.innerHTML = ""; // Clear previous text

      // Create individual spans for each letter
      text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0"; // Hide initially
        textRef.current?.appendChild(span);
      });

      // Animate each letter in sequence
      gsap.to(textRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05, // Stagger effect for each letter
        ease: "power2.out",
      });

      // Switch text every 3 seconds
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length;
        animateText();
      }, 3000);
    };

    animateText();
  }, []);

  return (
    <section className="hero-section py-20">
      <div className="mx-auto text-left max-w-xl">
        <h1 className="text-6xl font-bold mb-4 flex gap-2">
          <div ref={textRef} className="inline-block"></div>
        </h1>
        <p className="text-sm mb-8 max-w-md">
          The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
        </p>
        <button className="bg-white text-secondary font-semibold py-2 px-6 rounded-full shadow-lg border border-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-complimentary hover:text-primary transition duration-300 transform hover:scale-105">
          Start Your Application
        </button>
      </div>
    </section>
  );
};

export default CorporateRegistry;
