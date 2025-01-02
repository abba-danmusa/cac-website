"use client";
import React, { useState } from 'react';



const CustomButton = ({ children, onClick, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        border: 'none',
        outline: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: isClicked ? '#4D6C4A' : 'transparent',
        color: isClicked ? '#fff' : '#000',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
        backgroundImage: !isClicked
          ? 'linear-gradient(244.04deg, #2BC016 32.35%, #37A229 47.37%, #418838 61.44%, #4D6C4A 82.24%)'
          : 'none',
        backgroundClip: 'text',
        WebkitBackgroundClip: !isClicked ? 'text' : 'none',
        textFillColor: !isClicked ? 'transparent' : 'initial',
        WebkitTextFillColor: !isClicked ? 'transparent' : '#fff',
      }}
      onMouseEnter={(e) => {
        if (!isClicked) {
          e.target.style.backgroundImage =
            'linear-gradient(244.04deg, #2BC016 32.35%, #37A229 47.37%, #418838 61.44%, #4D6C4A 82.24%)';
          e.target.style.color = '#fff';
        }
      }}
      onMouseLeave={(e) => {
        if (!isClicked) {
          e.target.style.backgroundImage = 'none';
          e.target.style.color = '#000';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
