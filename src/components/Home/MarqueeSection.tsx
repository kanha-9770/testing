"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/marqueeCardAnimation";
import { motion } from "framer-motion";
import data from "../Constants/hero.json";

export default function MarqueeSection() {
  // Find the brand section and make sure it's defined
  const brandSection = data.find((item) => item.category === "BrandsSection");

  if (!brandSection || !brandSection.data) {
    // Return early if no brand section is found
    return null;
  }

  // Safely extract trusted and partners using optional chaining
  const { trusted = [], partners = [] } = brandSection.data || {};

  // Safely extract heading1, heading2, and description
  const { heading1, heading2, description } = brandSection;

  return (
    <div className="h-screen px-8 flex flex-col justify-center gap-12 overflow-hidden">
      <motion.div className="relative h-1/3 flex flex-col lg:flex-row">
        <div className="flex w-[10%] lg:w-[15%] flex-col">
          <div className="text-sm lg:text-2xl font-regular mt-8 font-poppins whitespace-nowrap">
            {heading1}
          </div>
          <div className="text-sm lg:text-2xl font-regular mt-12 font-poppins whitespace-nowrap">
            {heading2}
          </div>
        </div>
        <div className="w-[90%] lg:w-[85%] ml-32 lg:ml-44 mask-gradient-marquee">
          <div className="bg-white">
            <div className="flex-grow">
              {/* Ensure trusted array is passed */}
              <InfiniteMovingCards
                items={trusted}
                direction="left"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
          <div className="bg-white mt-2">
            <div className="flex-grow">
              {/* Ensure partners array is passed */}
              <InfiniteMovingCards
                items={partners}
                direction="right"
                speed="slow"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Safely check if description exists */}
      {description?.text && (
        <motion.div className="relative flex flex-col h-[20%] items-center text-center">
          <p className="text-sm lg:text-2xl mx-4 w-full lg:w-[62%] font-poppins font-regular leading-8">
            {description.text}
          </p>
        </motion.div>
      )}
    </div>
  );
}
