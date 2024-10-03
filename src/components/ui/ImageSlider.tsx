"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import data from "../Constants/hero.json";
const ImageSlider: React.FC = () => {
  // Extract the HeroSection data
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const images = homeData?.images || [];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const prevSlide = (): void => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to navigate to the next slide
  const nextSlide = (): void => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images.length) {
    return <p>No images available.</p>; // Handle if there are no images
  }

  return (
    <div className="relative w-full mx-auto h-full group">
      <motion.div className="w-full h-full bg-white rounded-3xl bg-center">
        <Image
          priority // Add this attribute to prioritize loading
          src={images[currentIndex]}
          alt={`HomeSlide${currentIndex + 1}`}
          width={600}
          height={400}
          className="w-full z-50 h-full object-cover rounded-2xl"
        />
      </motion.div>

      {/* Left arrow for previous slide */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
      >
        <ChevronLeft size={30} />
      </div>

      {/* Right arrow for next slide */}
      <div
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={nextSlide}
      >
        <ChevronRight size={30} />
      </div>

      {/* Indicators to show current slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
