import React from "react";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ image, country, flag, countryCode }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/individualcountry/${countryCode}`);
    };

    return (
        <div className="relative group overflow-hidden rounded-xl">
            {/* Image Wrapper with Hover Effect */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                {/* Image */}
                <img
                    src={image}
                    alt={country}
                    className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:blur-sm"
                />

                {/* Button Appears on Hover and Centers it */}
                <button
                    onClick={handleLearnMore}
                    className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-bold text-base px-6 py-3 rounded-3xl">
                    Learn More
                </button>
            </div>

            {/* Title and Flag */}
            <div className="mt-4 flex items-center">
                {/* Country Name */}
                <p className="text-3xl font-semibold">
                    {country}
                </p>

                {/* Flag Image with rounded corners */}
                <img
                    src={flag}
                    alt={`${country} Flag`}
                    className="w-10 h-7 rounded-lg object-cover ml-2"
                />
            </div>
        </div>
    );
};

export default DestinationCard;