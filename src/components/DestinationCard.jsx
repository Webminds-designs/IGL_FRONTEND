import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'; // Add PropTypes for type checking

const DestinationCard = ({ image, country, flag, countryCode }) => {
    const navigate = useNavigate();


    const handleLearnMore = () => {
        // Debug log to check the value
        console.log('countryCode received:', countryCode);

        // Early return with user feedback if countryCode is missing
        if (!countryCode) {
            console.error('Country code is required');
            alert('Unable to navigate: Country code is missing');
            return;
        }

        try {
            const formattedCode = countryCode.toString().trim().toLowerCase();
            console.log('Navigating to country:', formattedCode);
            navigate(`/individualcountry/${formattedCode}`);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };


    return (
        <div className="relative group overflow-hidden rounded-xl">
            {/* Image Wrapper with Hover Effect */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                {/* Image */}
                <img
                    src={image}
                    alt={country}
                    countryCode={countryCode}
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


DestinationCard.propTypes = {
    image: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired
};

export default DestinationCard;