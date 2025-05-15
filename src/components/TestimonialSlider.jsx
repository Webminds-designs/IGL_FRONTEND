import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        quote:
            "I was overwhelmed by the visa process, but IGL’s expert guidance made everything smooth and stress-free. I am now studying in Canada with confidence.",
        name: "Buddhima Prabhashwara",
        position: "Media Director, Webminds",
        image: "https://cdn.pixabay.com/photo/2019/10/22/18/58/young-4565475_1280",
    },
    {
        quote:
            "IGL’s support throughout my application process was invaluable. They helped me secure a scholarship and now I am pursuing my dream degree.",
        name: "Supun Gunawardena",
        position: "Student, University of Melbourne",
        image: "https://pixabay.com/photos/man-business-entrepreneur-human-4398724/",
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 text-left">
                <h3 className="text-4xl font-base text-gray-800">Hear From Our <br />
                    Achievers</h3>
                <p className="text-gray-500 mt-2">
                    We take pride in helping students achieve <br /> their dreams of studying abroad.
                </p>

                {/* Navigation Arrows */}
                <div className="flex gap-3 mt-4">
                    <button
                        className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 transition"
                        onClick={prevSlide}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 transition"
                        onClick={nextSlide}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Right Testimonial Section */}
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2 p-6 bg-white rounded-lg"
            >
                <Quote className="text-4xl text-black" />
                <p className="text-3xl font-base mt-2">{testimonials[currentIndex].quote}</p>

                {/* User Info */}
                <div className="flex items-center gap-3 mt-5">
                    <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h4 className="text-md font-semibold">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-500">{testimonials[currentIndex].position}</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default TestimonialSlider;
