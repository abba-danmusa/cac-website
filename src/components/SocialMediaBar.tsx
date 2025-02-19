"use client";

import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMediaBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500); // Delay for smooth entrance
  }, []);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-white shadow-lg p-4 rounded-l-lg flex flex-col space-y-4 z-50"
    >
      <a href="#" className="text-blue-600 hover:text-blue-800">
        <FaFacebookF size={20} />
      </a>
      <a href="#" className="text-blue-400 hover:text-blue-600">
        <FaTwitter size={20} />
      </a>
      <a href="#" className="text-pink-500 hover:text-pink-700">
        <FaInstagram size={20} />
      </a>
      <a href="#" className="text-blue-700 hover:text-blue-900">
        <FaLinkedinIn size={20} />
      </a>
    </motion.div>
  );
};

export default SocialMediaBar;