import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/countries.jpg";
import DestinationCard from "../components/DestinationCard";
import usaImage from "../assets/usa.jpg";
import canadaImage from "../assets/canada.jpg";
import germanyImage from "../assets/germany.jpg";
import franceImage from "../assets/france.jpg";
import switzerlandImage from "../assets/swizterland.jpg";
import singaporeImage from "../assets/singapore.jpg";
import malaysiaImage from "../assets/malaysia.jpg";
import netherlandsImage from "../assets/netherland.jpg";
import polandImage from "../assets/poland.jpg";
import uaeImage from "../assets/uae.jpg";
import indiaImage from "../assets/india.jpg";
import belgiumImage from "../assets/belgium.jpg";

import US from "../assets/usaFlag.png";
import CA from "../assets/canadaFlag.png";
import DE from "../assets/germanyFlag.png";
import FR from "../assets/franceFlag.png";
import CH from "../assets/switzerlandFlag.png";
import SG from "../assets/singaporeFlag.png";
import MY from "../assets/malaysiaFlag.png";
import NL from "../assets/netherlandsFlag.png";
import PL from "../assets/polandFlag.png";
import AE from "../assets/uaeFlag.png";
import IN from "../assets/indiaFlag.png";
import BE from "../assets/belgiumFlag.png";

const Countries = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute bottom-0 left-0 z-10 text-white text-left px-6 md:px-10 pb-4 md:pb-10 lg:pb-12 xl:pb-14">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-base mb-1 md:mb-2 leading-tight md:leading-snug lg:leading-relaxed">
            Explore Study Destinations
            <br />
            Around The World
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 text-left">
        <div className="flex items-center pt-6 md:pt-10">
          <div className="w-14 md:w-20 border-t border-gray-500"></div>
          <h3 className="text-gray-500 text-sm md:text-xl uppercase tracking-wide ml-3 text-left">
            Many To Choose From
          </h3>
        </div>
        <p className="mt-4 md:mt-6 text-lg md:text-2xl text-left text-gray-700 font-light leading-relaxed">
          Discover The Best Study Destinations Worldwide, Each Offering
          <span className="text-gray-400">
            {" "}
            Top-Tier Education, Cultural Diversity, And Career Opportunities.
          </span>
          Explore Your Options And Find The Perfect Place To Begin Your Academic
          Journey.
        </p>
      </div>

      {/* Destination Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* United States */}
        <DestinationCard
          image={usaImage}
          country="United States"
          flag={US}
          countryCode="usa"
        />
        {/* Canada */}
        <DestinationCard
          image={canadaImage}
          country="Canada"
          flag={CA}
          countryCode="canada"
        />
        {/* Germany */}
        <DestinationCard
          image={germanyImage}
          country="Germany"
          flag={DE}
          countryCode="germany"
        />
        {/* France */}
        <DestinationCard
          image={franceImage}
          country="France"
          flag={FR}
          countryCode="france"
        />
        {/* Switzerland */}
        <DestinationCard
          image={switzerlandImage}
          country="Switzerland"
          flag={CH}
          countryCode="switzerland"
        />
        {/* Singapore */}
        <DestinationCard
          image={singaporeImage}
          country="Singapore"
          flag={SG}
          countryCode="singapore"
        />
        {/* Malaysia */}
        <DestinationCard
          image={malaysiaImage}
          country="Malaysia"
          flag={MY}
          countryCode="malaysia"
        />
        {/* Netherlands */}
        <DestinationCard
          image={netherlandsImage}
          country="Netherlands"
          flag={NL}
          countryCode="netherlands"
        />
        {/* Poland */}
        <DestinationCard
          image={polandImage}
          country="Poland"
          flag={PL}
          countryCode="poland"
        />
        {/* UAE */}
        <DestinationCard
          image={uaeImage}
          country="UAE"
          flag={AE}
          countryCode="uae"
        />
        {/* India */}
        <DestinationCard
          image={indiaImage}
          country="India"
          flag={IN}
          countryCode="india"
        />
        {/* Belgium */}
        <DestinationCard
          image={belgiumImage}
          country="Belgium"
          flag={BE}
          countryCode="belgium"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Countries;
