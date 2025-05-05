import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StudyDestinations from "../components/StudyDestinations";
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const Home = () => {
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