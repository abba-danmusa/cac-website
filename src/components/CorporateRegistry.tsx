import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CorporateRegistry: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

    // Paragraph Animation (Fade in from below)
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1, ease: "power2.out" }
    );

    // Button Animation (Pop-in + Bounce + Glow Effect)
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1.2, // Slightly larger initially
        duration: 0.8,
        delay: 1.5,
        ease: "elastic.out(1, 0.5)", // Bouncy effect
        onComplete: () => {
          gsap.to(buttonRef.current, {
            scale: 1, // Settle to normal size
            duration: 0.3,
          });
        },
      }
    );

    // Button Glow Effect (after animation completes)
    gsap.to(buttonRef.current, {
      boxShadow: "0px 0px 15px rgba(255, 165, 0, 0.6)", // Glowing effect
      duration: 0.8,
      delay: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="hero-section py-20">
      <div className="mx-auto text-left max-w-xl">
        <h1 className="text-6xl font-bold mb-4 flex gap-2 text-secondary">
          <div ref={textRef} className="inline-block"></div>
        </h1>
        <p ref={paragraphRef} className="text-sm mb-8 max-w-md">
          The Commission is responsible for managing all aspects of company operations, including formation, incorporation, management, and winding up. It maintains company registries across all states, ensuring they are well-equipped to handle their duties.
        </p>
        <button
          ref={buttonRef}
          className="bg-white text-secondary font-semibold py-2 px-6 rounded-full shadow-lg border border-secondary hover:bg-gradient-to-r hover:from-secondary hover:to-complimentary hover:text-primary transition duration-300 transform hover:scale-105"
        >
          Start Your Application
        </button>
      </div>
    </section>
  );
};

export default CorporateRegistry;
