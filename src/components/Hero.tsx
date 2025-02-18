"use client";

import React from "react";
import NigeriaMap from "./Maps";
import NewsSlider from "./NewsSlider";

const newsItems = [
  {
    icon: "fa fa-codepen",
    caption: "codepen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!",
  },
  {
    icon: "fa fa-newspaper-o",
    caption: "newspaper-o",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!",
  },
  {
    icon: "fa fa-television",
    caption: "television",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!",
  },
  {
    icon: "fa fa-diamond",
    caption: "diamond",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary min-h-screen mb-[8rem] md:py-10 relative overflow-hidden">
      <div className="bg-secondary flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-20">
        <div className="flex-1 rounded-lg z-1 overflow-hidden h-full w-full md:w-auto mt-6 md:mt-0 relative">
          <NigeriaMap />
        </div>
        <div className="flex-1 w-full md:w-auto">
          <NewsSlider items={newsItems} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;