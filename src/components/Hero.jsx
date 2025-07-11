import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

// Import images
const images = [
  { src: () => import("../assets/hero.jpg"), location: "Singapore" },
  { src: () => import("../assets/her2.jpg"), location: "USA" },
  { src: () => import("../assets/hero3.jpg"), location: "Canada" },
  { src: () => import("../assets/hero4.jpg"), location: "UK" },
  { src: () => import("../assets/hero5.jpg"), location: "Australia" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Lazy load the current image
    const loadImage = async () => {
      if (!loadedImages[index]) {
        const imageModule = await images[index].src();
        setLoadedImages((prev) => ({
          ...prev,
          [index]: imageModule.default,
        }));
      }
    };

    loadImage();
  }, [index, loadedImages]);

  return (
    <div className="relative w-full h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: loadedImages[i]
                ? `url(${loadedImages[i]})`
                : "none",
            }}
            initial={{ opacity: i === index ? 1 : 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            loading="lazy"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4 md:p-8 lg:p-12">
        {/* Subtitle */}
        <span className="text-lg md:text-xl lg:text-2xl">START YOUR</span>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-2 md:mt-4">
          Next Chapter
        </h1>

        {/* Bottom Left Text */}
        <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 text-sm sm:text-base md:text-lg lg:text-xl text-left">
          Expand Your Horizons With Top Universities
          <br />
          And Global Career Prospects.
        </p>

        {/* Bottom Right Text with Smooth Fade */}
        <motion.span
          key={images[index].location}
          className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 text-sm sm:text-base md:text-lg lg:text-xl font-bold text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        >
          {images[index].location}
        </motion.span>
      </div>
    </div>
  );
};

export default HeroSection;
