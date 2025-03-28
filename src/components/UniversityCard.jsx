import React from "react";
import { useNavigate } from "react-router-dom";

const UniversityCard = ({ image, name, id }) => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate(`/individualuniversity/${id}`);
    };

    return (
        <div className="relative group overflow-hidden rounded-xl">
            {/* Image Wrapper with Hover Effect */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                {/* University Image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out group-hover:blur-sm"
                />

                {/* Button Appears on Hover */}
                <button
                    onClick={handleLearnMore}
                    className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-bold text-base px-6 py-3 rounded-3xl"
                >
                    Learn More
                </button>
            </div>

            {/* University Name */}
            <div className="mt-4 text-center">
                <p className="text-2xl lg:text-[32px] font-base">
                    {name}
                </p>
            </div>
        </div>
    );
};

export default UniversityCard;