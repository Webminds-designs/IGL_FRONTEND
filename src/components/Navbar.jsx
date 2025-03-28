import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from "react-router-dom"; // Add useLocation
import PropTypes from 'prop-types';

const Navbar = ({ fontColor, bgColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Updated getTextColor function to consider the current route
    const getTextColor = () => {
        if (fontColor) return fontColor;

        // Add routes that should have black text
        const darkTextRoutes = ['/register', '/contactus'];
        const shouldUseDarkText = darkTextRoutes.includes(location.pathname.toLowerCase());

        if (bgColor === "bg-white" || shouldUseDarkText) {
            return "text-black";
        }
        return "text-white";
    };

    const textColor = getTextColor();

    // Helper function for button border color
    const getButtonStyle = () => {
        return textColor === "text-black"
            ? "border-black text-black"
            : "border-white text-white";
    };

    return (
        <nav
            className={`absolute z-50 top-0 left-0 w-full p-6 md:p-12 ${bgColor || "bg-transparent"} ${textColor}`}
        >
            <div className="flex justify-between items-center w-full">
                {/* Logo - clickable */}
                <div className={`text-2xl font-bold cursor-pointer ${textColor}`}>
                    IGLLOGO
                </div>

                {/* Navigation links */}
                <div className="hidden lg:flex justify-center items-center flex-grow">
                    <ul className="flex space-x-12 cursor-pointer">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/aboutus"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/countries"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Countries
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/universities"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Universities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contactus"
                                className={({ isActive }) =>
                                    `text-sm md:text-sm hover:underline ${isActive ? "underline font-semibold" : ""}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Update Register button */}
                <div className="hidden lg:block">
                    <button
                        className={`px-4 py-2 rounded-full border ${getButtonStyle()} cursor-pointer bg-opacity-90 backdrop-blur-2xl hover:bg-opacity-20`}
                        onClick={() => navigate("/Register")}
                    >
                        Register With Us
                    </button>
                </div>


                {/* Update Hamburger Menu Icon */}
                <div className="sm:block md:block lg:hidden cursor-pointer" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke={textColor === "text-black" ? "black" : "white"}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`absolute top-full left-0 w-full bg-opacity-90 backdrop-blur-lg p-6 transition-transform 
                    ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden ${bgColor || "bg-transparent"}`}
                >

                    <ul className="flex flex-col space-y-4">
                        {["Home", "About Us", "Countries", "Universities", "Contact Us"].map((item) => (
                            <li key={item}>
                                <NavLink
                                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                                    className={({ isActive }) =>
                                        `hover:underline ${isActive ? "underline font-semibold" : ""}`
                                    }
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}

                        <button
                            className={`px-4 py-2 rounded-full border ${getButtonStyle()} cursor-pointer bg-opacity-90 backdrop-blur-2xl w-full text-center mt-4`}
                            onClick={() => {
                                navigate("/Register");
                                setIsOpen(false);
                            }}
                        >
                            Register With Us
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default Navbar;

// Prop Types
Navbar.propTypes = {
    fontColor: PropTypes.string,
    bgColor: PropTypes.string,
};