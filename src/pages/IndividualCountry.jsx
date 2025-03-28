import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniversityCard from "../components/UniversityCard";
import countries from "../Data/countries"; // Adjust the path as necessary

const IndividualCountry = () => {
  const { countryCode } = useParams();
  const country = countries[countryCode];

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative w-full h-[50vh] min-h-[300px] md:h-[60vh] lg:h-[70vh]">
          <img
            src={country.heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-end justify-start pb-6 md:pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
            <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-[64px] xl:text-[64px] font-medium text-white text-left leading-tight md:leading-normal">
              {country.heroText}
            </h1>
          </div>
        </div>

        {/* Featured Universities Section */}
        <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                Featured Universities
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-[36px] text-gray-800 mb-8 md:mb-12">
              Discover Universities Partnered With IGL In {country.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {country.featuredUniversities.map((university, index) => (
                <UniversityCard key={index} image={university.image} name={university.name} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Study Here Section */}
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-[16px] md:text-base uppercase tracking-wide ml-2 md:ml-3">
                WHY STUDY HERE
              </h3>
            </div>
            <p className="text-base md:text-lg lg:text-[36px] text-gray-800 mb-8 md:mb-12 leading-relaxed">
              {country.whyStudyHere}
            </p>
          </div>
        </div>

        {/* Popular Universities Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                POPULAR AMONG STUDENTS
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-[36px] text-gray-800 mb-8 md:mb-12">
              Other Universities You May Like
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {country.popularUniversities.map((university, index) => (
                <UniversityCard key={index} image={university.image} name={university.name} />
              ))}
            </div>

            {/* Centered Explore More Button */}
            <div className="w-full flex justify-center mt-8 md:mt-12">
              <button
                className="text-black py-2 px-6 md:py-3 md:px-10 border-2 border-black rounded-3xl 
                                hover:bg-black hover:text-white transition-all duration-300 text-base md:text-[16px]"
              >
                Explore More Universities
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualCountry;