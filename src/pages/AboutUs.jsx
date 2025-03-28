import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/gradhat22.png";
import servise from "../assets/servise.png";
import personImage from "../assets/Person.jpg";
import personImage2 from "../assets/person2.jpg";
import missionImage from "../assets/missionn.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const faqs = [
  {
    title: "Personalized Counseling",
    content:
      "We understand your goals and help you choose the best study destination and university that aligns with your aspirations.",
  },
  {
    title: "Top University Matches",
    content:
      "Get recommendations for top universities that suit your profile, budget, and career goals.",
  },
  {
    title: "Visa Assistance",
    content:
      "Step-by-step guidance on the visa application process to ensure a hassle-free experience.",
  },
  {
    title: "Scholarships & Financial Aid",
    content:
      "Find and apply for scholarships that reduce your financial burden while studying abroad.",
  },
  {
    title: "Pre & Post-Departure Support",
    content:
      "Guidance on travel arrangements, accommodation, and adjusting to a new environment.",
  },
  {
    title: "IELTS & Language Training",
    content:
      "Improve your language skills with expert coaching for IELTS and other language proficiency exams.",
  },
];

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };

  const slides = [
    {
      title: "Our Mission",
      text: "To be Sri Lanka’s most trusted study abroad consultancy, offering reliable, expert guidance and a seamless process for students seeking higher education globally.",
    },
    {
      title: "Our Vision",
      text: "To Empower Students With Knowledge, Opportunities, And Confidence To Succeed In A Global Academic And Professional Landscape.",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] bg-cover bg-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 z-10 text-white text-left px-6 md:px-10 pb-4 md:pb-10 lg:pb-12 xl:pb-14">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-base mb-1 md:mb-2 leading-tight md:leading-snug lg:leading-relaxed">
            Empowering Futures, Connecting
            <br />
            Students To Global Education
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-8">
        <div className="flex items-center pt-4">
          <div className="w-12 md:w-20 border-t border-gray-500" />
          <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
            who are we
          </h3>
        </div>
        <p className="text-lg md:text-2xl lg:text-[36px] xl:text-[36px] mt-4 md:mt-6 text-gray-800">
          At Institute of Global Languages (IGL), We Specialize In{" "}
          <span className="text-[#787878]">
            Helping Sri Lankan Students Achieve Their Dream Of Studying Abroad.{" "}
          </span>
          With A Commitment To Excellence, We Provide{" "}
          <span className="text-[#787878]">
            Personalized Guidance, Expert Support, And A Hassle-Free Process{" "}
          </span>
          To Connect Students With Top International Institutions.
        </p>

        <div className="flex flex-col md:flex-row justify-between gap-6 mt-6 md:mt-10">
          <p className="text-base md:text-lg text-gray-800 md:max-w-2xl">
            With Years Of Experience In Student Recruitment And International
            Education Consulting, We Are Dedicated To Making Your Academic
            Journey{" "}
            <span className="text-[#787878]">
              Smooth, Successful, And Stress-Free.
            </span>
          </p>
          <div className="flex justify-between md:justify-start md:gap-8 lg:gap-12">
            <div className="text-center">
              <p className="text-xl md:text-[36px] font-medium text-black">
                10+
              </p>
              <p className="text-[#787878] text-[16px] md:text-base">
                Countries
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-[36px] font-medium text-black">
                15+
              </p>
              <p className="text-[#787878] text-[16px] md:text-base">
                Universities
              </p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-[36px] font-medium text-black">
                100+
              </p>
              <p className="text-[#787878] text-[16px] md:text-base">
                Students Helped
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="relative w-full h-[50vh] min-h-[300px] md:h-[60vh] my-8 md:my-16">
        <img
          src={missionImage}
          alt="Mission"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <div className="w-full max-w-4xl">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="px-2 md:px-4 text-center">
                  <h2 className="text-2xl md:text-[40px] lg:text-[40px] font-medium text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-base md:text-[24px] lg:text-[24px] text-white/90 max-w-2xl mx-auto">
                    {slide.text}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-2">
        <div className="flex items-center pt-4">
          <div className="w-12 md:w-20 border-t border-gray-500" />
          <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
            WHAT SETS US APART
          </h3>
        </div>
        <p className="text-lg md:text-2xl lg:text-[36px] xl:text-[36px] mt-4 md:mt-6 text-gray-800">
          IGL Sri Lanka Offers Complete Support, From University Selection To
          Visa Approval. Our Experts Ensure A{" "}
          <span className="text-[#787878]">
            Smooth, Stress-Free Process, Guiding You Through Admissions,
            Documentation, And Financial Aid{" "}
          </span>
          Every Step Of The Way.
        </p>

        <div className="mt-8 flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={servise}
              alt="Counseling Session"
              className="rounded-xl w-full h-116 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-between items-center w-full py-4 md:py-5 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-base md:text-[24px] lg:text-[24px] font-medium pr-4">
                    {faq.title}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6 text-gray-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-600 shrink-0" />
                  )}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openIndex === index
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 pb-4 px-2 text-[16px] md:text-base">
                    {faq.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-15">
        <div className="flex items-center pt-4">
          <div className=" w-12 md:w-20 border-t border-gray-500" />
          <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
            MEET OUR TEAM
          </h3>
        </div>
        <h2 className="text-xl md:text-2xl lg:text-[36px] xl:text-[36px] text-gray-800 mt-4 mb-8 md:mb-12">
          The Passionate Experts Dedicated To Guiding You On Your Journey
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 items-center w-fit mx-auto">
          <div className="bg-white rounded-lg text-center w-full max-w-xs md:max-w-none">
            <img
              src={personImage}
              alt="Farzan Cader"
              className="w-48 h-60 md:w-64 md:h-80 mx-auto rounded-lg mb-4 md:mb-6 object-cover"
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
              Farzan Cader
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Chairman / Managing Director
            </p>
          </div>
          <div className="bg-white rounded-lg text-center w-full max-w-xs md:max-w-none">
            <img
              src={personImage2}
              alt="Shahiq Cader"
              className="w-48 h-60 md:w-64 md:h-80 mx-auto rounded-lg mb-4 md:mb-6 object-cover"
            />
            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
              Shahiq Cader
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Executive Director
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
