// components/ServicesSection.tsx
import React from "react";
import Image from "next/image";
import background from '../../public/svg/services.svg'

const services = [
  {
    title: "Business Registration",
    description: "Register your Company, Business name, and incorporated Trustees.",
    icon: "/images/business-registration.png",
  },
  {
    title: "Post Incorporation",
    description: "Change of names, conversion of private companies to public, etc.",
    icon: "/images/post-incorporation.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services"
      className="bg-primary relative"
    >
      <Image
        width={400}
        height={400}
        src={background}
        alt=""
        className="absolute top-10 left-0 z-0"
      />
      <div
        className="container mx-auto p-10 justify-items-center"
      >
        <h2
          className="text-2xl font-bold text-center text-black z-10"
        >
          Services We Offer
        </h2>
        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-24"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="w-64 h-56 rounded border border-secondary p-6 hover:shadow-lg transition duration-300 z-10"
            >
              <Image
                src={service.icon} 
                alt={service.title} 
                width={48}
                height={48}
                className="h-12 w-14 align-middle mx-auto mb-4"
              />
              <div className="hover:cursor-pointer">
                <h3
                  className="text-lg mb-6 font-sans font-semibold text-black"
                >{service.title}</h3>
                <p
                  className="text-black font-sans text-sm"
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection