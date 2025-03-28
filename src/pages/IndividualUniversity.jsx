import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { BsChevronDown, BsChevronUp } from "react-icons/bs"; // Updated import for chevron icons
import universities from "../Data/universities";


const IndividualUniversity = () => {
  const { id } = useParams(); // Get the university ID from the URL
  const [university, setUniversity] = useState(null); // State to store the university data
  const [openAccordion, setOpenAccordion] = useState(null);

  // Fetch the university data based on the ID
  useEffect(() => {
    const selectedUniversity = universities.find((uni) => uni.id === id);
    setUniversity(selectedUniversity);
  }, [id]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // If the university data is not yet loaded, show a loading message
  if (!university) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[100vh] bg-cover bg-center bg-black">
        <img
          src={university.image} // Use the university's image
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute bottom-8 left-8">
          <h1 className="text-white text-5xl font-medium text-left">
            {university.name} {/* Display the university name */}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Who Are They */}
        <div className="mb-16">
          <div className="flex items-center pt-4 mt-8">
            <div className="w-12 md:w-20 border-t border-gray-500" />
            <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
              who are they
            </h3>
          </div>
          <p className="text-lg md:text-2xl lg:text-[32px] xl:text-[32px] mt-4 md:mt-6 text-gray-800">
            {university.description} {/* Display the university description */}
          </p>
        </div>

        {/* Why Them */}
        <div className="mb-12">
          <div className="flex items-center pt-4 mt-12">
            <div className="w-12 md:w-20 border-t border-gray-500" />
            <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
              Why them
            </h3>
          </div>
          <p className="text-lg md:text-2xl lg:text-[32px] xl:text-[32px] mt-4 md:mt-6 text-gray-800">
            {university.whyThem} {/* Display the "Why Them" section */}
          </p>
        </div>

        {/* Image and FAQ Section */}
        <div className="mt-8 flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={university.campusImage} // Use the university's campus image
              alt="Campus"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full md:w-1/2">
            {university.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full py-6 text-xl font-medium text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.title}
                  {openAccordion === index ? (
                    <BsChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <BsChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Animated Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openAccordion === index // Fix the typo here
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pb-4 px-2">{faq.content}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IndividualUniversity;