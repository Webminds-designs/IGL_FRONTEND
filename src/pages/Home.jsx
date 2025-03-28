import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudyDestinations from "../components/StudyDestinations";
import WhyChooseUs from "../components/WhyChooseUs";
import TestimonialSlider from "../components/TestimonialSlider";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <StudyDestinations />
      <WhyChooseUs />
      <TestimonialSlider />
      <Footer />
    </>
  );
};

export default Home;
