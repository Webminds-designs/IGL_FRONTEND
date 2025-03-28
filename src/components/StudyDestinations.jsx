import React from "react";
import DestinationCard from "./DestinationCard";
import usaImage from "../assets/usa.jpg";
import australiaImage from "../assets/australia.jpg";
import canadaImage from "../assets/canada.jpg";
import AU from "../assets/australiaFlag.png";
import US from "../assets/usaFlag.png";
import CA from "../assets/canadaFlag.png";

const StudyDestinations = () => {
    return (
        <div className="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8">
            {/* Who Are We Section */}
            <div className="text-left pt-10 sm:pt-20">
                <div className="flex items-center">
                    <div className="w-10 sm:w-20 border-t border-gray-500"></div>
                    <h3 className="text-gray-500 text-sm sm:text-xl uppercase tracking-wide ml-2 sm:ml-3">
                        Who Are We
                    </h3>
                </div>

                <p className="text-2xl sm:text-3xl lg:text-4xl mt-5 text-gray-800 font-base text-left">
                    We Connect Students With Top Universities Worldwide, Providing Expert
                    Support In <span className="text-gray-400">Admissions, Visas, And Financial Aid.</span>
                    Our Mission Is To Make Studying Abroad <span className="text-gray-400">Simple, Stress-Free, And Successful</span>, Helping
                    Students Excel In Their Academic And Career Paths.
                </p>
                <button className="mt-8 px-4 py-2 border font-bold border-black rounded-full hover:bg-black hover:text-white transition-all text-sm sm:text-base">
                    Learn More
                </button>
            </div>

            {/* Popular Study Destinations */}
            <div className="pt-10 sm:pt-20 text-left">
                <div className="flex items-center">
                    <div className="w-10 sm:w-20 border-t border-gray-500"></div>
                    <h3 className="text-gray-500 text-sm sm:text-lg uppercase tracking-wide ml-2">
                        Popular Among Students
                    </h3>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-base mt-5 text-center sm:text-left">
                    Popular Study Destinations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-20">
                    {/* Australia */}
                    <DestinationCard
                        image={australiaImage}
                        country="Australia"
                        flag={AU}
                    />
                    {/* United States */}
                    <DestinationCard
                        image={usaImage}
                        country="United States"
                        flag={US}
                    />
                    {/* Canada */}
                    <DestinationCard
                        image={canadaImage}
                        country="Canada"
                        flag={CA}
                    />
                </div>

                <div className="flex justify-center">
                    <button className="mt-10 sm:mt-16 px-6 py-2 border font-bold items-center border-black rounded-full hover:bg-black hover:text-white transition-all text-sm sm:text-base">
                        View More Countries
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudyDestinations;