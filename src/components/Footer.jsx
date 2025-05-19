import { FaGlobe } from "react-icons/fa";
import graduateImg from "../assets/graduate.jpg";
import footerBg from "../assets/footer.jpg"; // Background image
import logo from "../assets/IGL logo.png"; // Logo image
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="text-center opacity-90 max-w-8xl mx-auto p-6 relative font-montserrat"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Heading */}
      <div className="text-black text-5xl lg:text-6xl md:text-3xl sm:text-2xl font-semibold mt-10 px-4">
        From Sri Lanka To The{" "}
        <span className="relative">
          W
          <img
            src={graduateImg}
            alt="Graduation"
            className="inline-block w-16 h-8 md:w-20 md:h-10 rounded-full align-middle"
          />
          rld
        </span>
      </div>

      <h2 className="text-black text-5xl lg:text-6xl md:text-3xl sm:text-2xl font-semibold mt-4">
        Your Dream University Awaits
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
        Take The Next Step Toward Global Education And Endless Opportunities.
        Let Us Guide You To Your Dream University.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/Register">
          <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-base hover:bg-gray-800 cursor-pointer">
            Get a Free Consultation
          </button>
        </Link>
      </div>

      <div className="mt-16 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        {/* Left Section (Logo) */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-start items-center">
          {/* <h2 className="text-black text-xl sm:text-2xl font-semibold">IGLLOGO</h2> */}
          <img src={logo} className="w-12 h-auto" />
        </div>

        {/* Right Section (Button & Text) */}
        <div className="w-full sm:w-1/2 flex flex-col sm:flex-row sm:justify-end items-center gap-6 sm:gap-20 mt-6 sm:mt-0">
          <h3 className="text-black text-lg sm:text-xl font-semibold text-center sm:text-left">
            Turn Your Study <br /> Abroad Dream Into{" "}
            <span className="text-gray-500">Reality</span>
          </h3>
          <Link to="/contactus">
            <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-base hover:bg-gray-800 cursor-pointer whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-400 px-6 sm:px-10 pt-6 text-gray-600 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          <a href="/" className="text-black">
            Home
          </a>
          <a href="/aboutus" className="text-black">
            About Us
          </a>
          <a href="/countries" className="text-black">
            Countries
          </a>
          <a href="/universities" className="text-black">
            Universities
          </a>
        </div>
        <p className="text-black text-center sm:text-left">
          © 2025 IGL Student Migration. All Rights Reserved. A{" "}
          <a href="https://webmindsdesigns.com/" className="text-blue-600">
            Webminds
          </a>{" "}
          Website.
        </p>
      </div>
    </div>
  );
};

export default Footer;
