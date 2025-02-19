"use client";

import React from "react";
import NigeriaMap from "./Maps";
import NewsSlider from "./NewsSlider";

const newsItems = [
  {
    icon: "fa fa-codepen",
    caption: "CodePen",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: "fa fa-newspaper-o",
    caption: "News",
    text: "Stay updated with the latest headlines and breaking news.",
  },
  {
    icon: "fa fa-television",
    caption: "TV",
    text: "Watch the latest broadcasts and shows from around the world.",
  },
  {
    icon: "fa fa-diamond",
    caption: "Premium",
    text: "Unlock exclusive premium content with our special subscription.",
  },
];

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary px-6 min-h-screen flex flex-col md:flex-row items-start md:items-center gap-10">
      {/* Map Container */}
      <div className="w-full md:w-1/2 lg:w-2/4 flex justify-center">
        <NigeriaMap />
      </div>

      {/* News Slider Container */}
      <div className="w-full md:w-1/2 lg:w-2/4 pr-0 md:pr-6 flex flex-col items-center">
        <NewsSlider items={newsItems} />
      </div>
    </section>
  );
};

export default HeroSection;