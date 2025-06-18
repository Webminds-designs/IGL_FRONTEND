import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/countries.jpg";
import DestinationCard from "../components/DestinationCard";

import usaImage from "../assets/usa.jpg";
import canadaImage from "../assets/canada.jpg";
import germanyImage from "../assets/germany.jpg";
import franceImage from "../assets/france.jpg";
import switzerlandImage from "../assets/swizterland.jpg";
import singaporeImage from "../assets/singapore.jpg";
import malaysiaImage from "../assets/malaysia.jpg";
import netherlandsImage from "../assets/netherland.jpg";
import polandImage from "../assets/poland.jpg";
import uaeImage from "../assets/uae.jpg";
import indiaImage from "../assets/india.jpg";
import belgiumImage from "../assets/belgium.jpg";

import heroImageUK from "../assets/heroImageUK.jpg";
import heroImageAustralia from "../assets/heroImageAustralia.jpg";
import heroImageAustria from "../assets/heroImageAustria.jpg";
import heroImageDenmark from "../assets/heroImageDenmark.jpg";
import heroImageIreland from "../assets/heroImageIreland.jpg";
import heroImageFinland from "../assets/heroImageFinland.jpg";
import heroImageHungary from "../assets/heroImageHungary.jpg";
import heroImageItaly from "../assets/heroImageItaly.jpg";
import heroImageNewZealand from "../assets/heroImageNewZealand.jpg";
import heroImageChina from "../assets/heroImageChina.jpg";

import US from "../assets/usaFlag.png";
import CA from "../assets/canadaFlag.png";
import DE from "../assets/germanyFlag.png";
import FR from "../assets/franceFlag.png";
import CH from "../assets/switzerlandFlag.png";
import SG from "../assets/singaporeFlag.png";
import MY from "../assets/malaysiaFlag.png";
import NL from "../assets/netherlandsFlag.png";
import PL from "../assets/polandFlag.png";
import AE from "../assets/uaeFlag.png";
import IN from "../assets/indiaFlag.png";
import BE from "../assets/belgiumFlag.png";

import GB from "../assets/GB.jpg";
import AU from "../assets/AU.png";
import AT from "../assets/AT.png";
import DK from "../assets/DK.png";
import IE from "../assets/IE.png";
import FI from "../assets/FI.png";
import HU from "../assets/HU.png";
import IT from "../assets/IT.png";
import NZ from "../assets/NZ.png";
import CN from "../assets/CN.png";

import { motion } from "framer-motion";

const Countries = () => {
  const destinations = [
    { image: usaImage, country: "United States", flag: US, countryCode: "usa" },
    { image: canadaImage, country: "Canada", flag: CA, countryCode: "canada" },
    {
      image: germanyImage,
      country: "Germany",
      flag: DE,
      countryCode: "germany",
    },
    { image: franceImage, country: "France", flag: FR, countryCode: "france" },
    {
      image: switzerlandImage,
      country: "Switzerland",
      flag: CH,
      countryCode: "switzerland",
    },
    {
      image: singaporeImage,
      country: "Singapore",
      flag: SG,
      countryCode: "singapore",
    },
    {
      image: malaysiaImage,
      country: "Malaysia",
      flag: MY,
      countryCode: "malaysia",
    },
    {
      image: netherlandsImage,
      country: "Netherlands",
      flag: NL,
      countryCode: "netherlands",
    },
    { image: polandImage, country: "Poland", flag: PL, countryCode: "poland" },
    { image: uaeImage, country: "UAE", flag: AE, countryCode: "uae" },
    { image: indiaImage, country: "India", flag: IN, countryCode: "india" },
    {
      image: belgiumImage,
      country: "Belgium",
      flag: BE,
      countryCode: "belgium",
    },
    {
      image: heroImageUK,
      country: "United Kingdom",
      flag: GB,
      countryCode: "uk",
    },
    {
      image: heroImageAustralia,
      country: "Australia",
      flag: AU,
      countryCode: "australia",
    },
    {
      image: heroImageAustria,
      country: "Austria",
      flag: AT,
      countryCode: "austria",
    },
    {
      image: heroImageDenmark,
      country: "Denmark",
      flag: DK,
      countryCode: "denmark",
    },
    {
      image: heroImageIreland,
      country: "Ireland",
      flag: IE,
      countryCode: "ireland",
    },
    {
      image: heroImageFinland,
      country: "Finland",
      flag: FI,
      countryCode: "finland",
    },
    {
      image: heroImageHungary,
      country: "Hungary",
      flag: HU,
      countryCode: "hungary",
    },
    { image: heroImageItaly, country: "Italy", flag: IT, countryCode: "italy" },
    {
      image: heroImageNewZealand,
      country: "New Zealand",
      flag: NZ,
      countryCode: "newZealand",
    },
    { image: heroImageChina, country: "China", flag: CN, countryCode: "china" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        lazyload="true"
      >
        <div className="absolute bottom-0 left-0 z-10 text-white text-left px-6 md:px-10 pb-12 md:pb-20">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-base mb-3 md:mb-5">
            Explore Study Destinations
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-base">
            Around The World
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-full mx-auto p-3 sm:p-6 lg:p-14 py-8 md:py-12 text-left">
        <div className="flex items-center pt-6 md:pt-10">
          <div className="w-14 md:w-20 border-t border-gray-500"></div>
          <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
            Many To Choose From
          </h3>
        </div>
        <p className="text-lg md:text-2xl lg:text-[36px] xl:text-[36px] mt-4 md:mt-6 text-gray-800">
          Discover The Best Study Destinations Worldwide, Each Offering
          <span className="text-gray-400">
            {" "}
            Top-Tier Education, Cultural Diversity, And Career Opportunities.
          </span>{" "}
          Explore Your Options And Find The Perfect Place To Begin Your Academic
          Journey.
        </p>
      </div>

      {/* Animated Destination Cards */}
      <div className="max-w-full mx-auto p-3 sm:p-6 lg:p-14 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {destinations.map((destination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            <DestinationCard
              image={destination.image}
              country={destination.country}
              flag={destination.flag}
              countryCode={destination.countryCode}
            />
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
