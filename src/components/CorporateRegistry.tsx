import React from 'react';

const CorporateRegistry: React.FC = () => {
  return (
    <section className="hero-section py-20">
      <div className="mx-auto text-left max-w-xl">
        <h1 className="text-6xl font-bold mb-4"><span className='text-secondary'>Nigerian</span> Corporate Registry</h1>
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