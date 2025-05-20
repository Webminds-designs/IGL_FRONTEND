import { useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import universitiesImage from "../assets/universities.jpg";
import UniversityCard from "../components/UniversityCard";
import { motion } from "framer-motion";
// University images
import waxsenImage from "../assets/waxsen.jpg";
import spectrumImage from "../assets/spectrum.jpg";
import australasiaImage from "../assets/australasia.jpg";
import escClermontImage from "../assets/esc-clermont.jpg";
import neomaImage from "../assets/neoma.jpg";
import wittenborgImage from "../assets/wittenborg.jpg";
import amsterdamImage from "../assets/amsterdam.jpg";
import berlinImage from "../assets/berlin.jpg";
import hamburgImage from "../assets/hamburg.jpg";
import johnPaulImage from "../assets/john-paul.jpg";
import davisImage from "../assets/davis.jpg";
import eduglobalImage from "../assets/eduglobal.jpg";
import miamiImage from "../assets/miami.jpg";
import trinityImage from "../assets/trinity.jpg";
import torontoYorkImage from "../assets/toronto-york.jpg";
import brusselImage from "../assets/brussel.jpg";
import manipalImage from "../assets/manipal.jpg";
import bhmImage from "../assets/bhm.jpg";
import laXeniaImage from "../assets/la-xenia.jpg";
import ibaImage from "../assets/iba.jpg";

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: i * 0.12, // stagger effect for smooth motion
    },
  }),
};

const universities = [
  { image: waxsenImage, name: "Waxsen University", id: "waxsen-university" },
  {
    image: spectrumImage,
    name: "Spectrum University College",
    id: "spectrum-university-college",
  },
  {
    image: australasiaImage,
    name: "Academic of Australasia College",
    id: "australasia-college",
  },
  {
    image: escClermontImage,
    name: "ESC Clermont Business School",
    id: "esc-clermont-business-school",
  },
  {
    image: neomaImage,
    name: "NEOMA Business School",
    id: "neoma-business-school",
  },
  {
    image: wittenborgImage,
    name: "Wittenborg University",
    id: "wittenborg-university",
  },
  { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
  {
    image: berlinImage,
    name: "Berlin International University",
    id: "berlin-international-university",
  },
  {
    image: hamburgImage,
    name: "University of Hamburg",
    id: "university-of-hamburg",
  },
  {
    image: johnPaulImage,
    name: "John Paul Secondary University",
    id: "john-paul-secondary-university",
  },
  { image: davisImage, name: "Davis University", id: "davis-university" },
  { image: eduglobalImage, name: "EduGlobal College", id: "eduglobal-college" },
  {
    image: miamiImage,
    name: "Miami Regional University",
    id: "miami-regional-university",
  },
  {
    image: trinityImage,
    name: "Trinity Western University",
    id: "trinity-western-university",
  },
  {
    image: torontoYorkImage,
    name: "Toronto York University",
    id: "toronto-york-university",
  },
  {
    image: brusselImage,
    name: "University of Brussel",
    id: "university-of-brussel",
  },
  { image: manipalImage, name: "Manipal University", id: "manipal-university" },
  {
    image: bhmImage,
    name: "Business and Hotel Management School",
    id: "business-and-hotel-management-school",
  },
  {
    image: laXeniaImage,
    name: "La Xenia International Institute",
    id: "la-xenia-international-institute",
  },
  {
    image: ibaImage,
    name: "International Business Academy",
    id: "international-business-academy",
  },
];

const Universities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="min-h-full">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full h-[100vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${universitiesImage})` }}
        loading="eager"
        priority
        placeholder="blur"
        blurDataURL="/placeholder.jpg"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="absolute bottom-0 left-0 z-10 text-white text-left px-6 md:px-10 pb-4 md:pb-10 lg:pb-12 xl:pb-14"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-base mb-3 md:mb-5 leading-snug">
            Discover World-Class <br /> Institutions For Your Future
          </h1>
        </motion.div>
      </section>

      {/* Description Section */}
      <motion.section
        className="py-16 px-6 text-left"
        ref={ref}
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center pt-6 md:pt-10">
            <div className="w-14 md:w-20 border-t border-gray-500"></div>
            <h3 className="text-gray-500 text-sm md:text-xl uppercase tracking-wide ml-3 text-left">
              Many To Choose From
            </h3>
          </div>

          <p className="mt-4 md:mt-6 text-lg md:text-2xl text-left text-black font-light leading-relaxed">
            Explore
            <span className="text-gray-400"> Top-Ranked Institutions </span>
            Worldwide, Offering
            <span className="text-gray-400">
              {" "}
              World-Class Education, Research Opportunities, And Career
              Pathways.{" "}
            </span>
            Find The Perfect Place To Achieve Your Academic And Professional
            Goals.
          </p>
        </div>
      </motion.section>

      {/* University Grid Section */}
      <section className="max-w-7xl mx-auto mb-4 px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {universities.map((university, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <UniversityCard
                image={university.image}
                name={university.name}
                id={university.id}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
