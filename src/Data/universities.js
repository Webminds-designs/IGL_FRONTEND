// Importing University Images
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
import iuImage from "../assets/IU.jpg";

const universities = [
  {
    id: "miami-regional-university",
    name: "Miami Regional University",
    location: "Florida, USA",
    description:
      "Miami Regional University, Located in Florida, USA, Is a Distinguished Institution Dedicated To Academic Excellence And Hands-On Learning. Known For Its Strong Programs In Nursing, Business Administration, Healthcare Management, And Education, The University Provides Students With Practical Experience And Industry Exposure To Excel In Their Careers.",
    whyThem:
      "Miami Regional University Combines Hands-On Training, Industry Connections, And Personalized Mentorship To Equip Students With Practical Skills And Career Readiness.",
    image: miamiImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content:
          "Leading Degrees In Nursing, Business, Healthcare Management, And Education, Preparing Students For High-Demand Careers.",
      },
      {
        title: "Industry-Focused Learning",
        content:
          "Programs designed to align with industry needs and provide real-world skills.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "waxsen-university",
    name: "Waxsen University",
    location: "India",
    description:
      "Waxsen University is a premier institution offering cutting-edge programs in business, technology, and design, fostering innovation and research-led learning.",
    whyThem:
      "Waxsen University emphasizes hands-on experience, industry collaboration, and a global perspective to prepare students for leadership roles.",
    image: waxsenImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "MBA, AI & Data Science, Engineering, and Design.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },

  {
    id: "spectrum-university-college",
    name: "Spectrum University College",
    location: "Malaysia",
    description:
      "Spectrum University College offers a range of programs in business, arts, and sciences, ensuring holistic development and career growth.",
    whyThem:
      "Diverse learning environment, expert faculty, and modern facilities ensure a superior education experience.",
    image: spectrumImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Business Administration, Psychology, and IT.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "australasia-college",
    name: "Academy of Australasia College",
    location: "Australia",
    description:
      "A leading institution focused on providing high-quality education in vocational training and professional courses.",
    whyThem:
      "Strong industry connections, practical training, and modern infrastructure.",
    image: australasiaImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Hospitality Management, Business, and IT.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "esc-clermont-business-school",
    name: "ESC Clermont Business School",
    location: "France",
    description:
      "Renowned for its business programs and international outlook, ESC Clermont provides cutting-edge education in management and finance.",
    whyThem:
      "Global partnerships, strong corporate network, and modern teaching methodologies.",
    image: escClermontImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "MBA, Finance, and Business Analytics.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "neoma-business-school",
    name: "NEOMA Business School",
    location: "France",
    description:
      "NEOMA offers world-class business programs, emphasizing entrepreneurship, innovation, and leadership.",
    whyThem:
      "International exposure, leading faculty, and a focus on practical skills.",
    image: neomaImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Marketing, Finance, and International Business.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "wittenborg-university",
    name: "Wittenborg University",
    location: "Netherlands",
    description:
      "Wittenborg University is an international business school with a diverse student base and a strong entrepreneurial focus.",
    whyThem:
      "Industry-oriented courses, research-based learning, and global opportunities.",
    image: wittenborgImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Business Management, Entrepreneurship, and Tourism.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "berlin-international-university",
    name: "Berlin International University",
    location: "Germany",
    description:
      "Berlin International University offers globally recognized programs with a strong focus on research and development.",
    whyThem:
      "Modern facilities, a multicultural environment, and strong academic excellence.",
    image: berlinImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Architecture, Business Administration, and Engineering.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "university-of-hamburg",
    name: "University of Hamburg",
    location: "Germany",
    description:
      "A top research university in Germany, offering a variety of programs in science, humanities, and social sciences.",
    whyThem:
      "Strong research opportunities, world-class faculty, and a vibrant student community.",
    image: hamburgImage,
    campusImage: iuImage,
    faqs: [
      { title: "Top Programs", content: "Physics, Law, and Social Sciences." },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },

  {
    id: "john-paul-secondary-university",
    name: "John Paul Secondary University",
    location: "USA",
    description:
      "John Paul Secondary University is a prestigious institution known for its excellence in secondary and higher education, preparing students for academic success and career growth.",
    whyThem:
      "A strong emphasis on foundational knowledge, leadership development, and real-world applications.",
    image: johnPaulImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Education, Liberal Arts, and Sciences.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "davis-university",
    name: "Davis University",
    location: "USA",
    description:
      "Davis University offers a range of programs in business, technology, and sciences, with a focus on research and innovation.",
    whyThem:
      "Cutting-edge research facilities, expert faculty, and industry connections.",
    image: davisImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Business, Computer Science, and Engineering.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "eduglobal-college",
    name: "EduGlobal College",
    location: "Canada",
    description:
      "EduGlobal College is a leading institution offering specialized diploma and degree programs, equipping students with career-ready skills.",
    whyThem:
      "Hands-on training, global learning opportunities, and personalized mentorship.",
    image: eduglobalImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Business Management, IT, and Healthcare.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "amsterdam-campus",
    name: "Amsterdam Campus",
    location: "Netherlands",
    description:
      "Amsterdam Campus is a renowned institution in the Netherlands, offering high-quality education with a strong focus on innovation, research, and industry collaboration.",
    whyThem:
      "Amsterdam Campus provides students with hands-on training, global exposure, and a strong academic foundation to excel in their careers.",
    image: amsterdamImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content:
          "Business Management, Engineering, Artificial Intelligence, and Design.",
      },
      {
        title: "Industry-Focused Learning",
        content:
          "Programs designed in collaboration with industry leaders to ensure real-world applicability.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content:
          "Hybrid learning models including online and in-person options.",
      },
      {
        title: "Career Readiness",
        content:
          "Internship opportunities and career services to enhance job prospects.",
      },
    ],
  },
  {
    id: "trinity-western-university",
    name: "Trinity Western University",
    location: "Canada",
    description:
      "Trinity Western University is a private Christian university that offers a variety of undergraduate and graduate programs with a focus on leadership and service.",
    whyThem:
      "Holistic education, strong community values, and globally recognized programs.",
    image: trinityImage,
    campusImage: iuImage,
    faqs: [
      { title: "Top Programs", content: "Psychology, Business, and Theology." },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "toronto-york-university",
    name: "Toronto York University",
    location: "Canada",
    description:
      "Toronto York University is a well-reputed institution known for its excellence in research and innovation across various fields.",
    whyThem:
      "Strong research focus, expert faculty, and state-of-the-art facilities.",
    image: torontoYorkImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Engineering, Law, and Social Sciences.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "university-of-brussel",
    name: "University of Brussel",
    location: "Belgium",
    description:
      "A leading research institution in Belgium, offering a wide range of programs in science, humanities, and business.",
    whyThem:
      "World-class faculty, diverse academic programs, and strong international collaborations.",
    image: brusselImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Political Science, Law, and Medicine.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "manipal-university",
    name: "Manipal University",
    location: "India",
    description:
      "Manipal University is a prestigious institution offering top-ranked programs in medicine, engineering, business, and the arts.",
    whyThem:
      "Strong industry partnerships, excellent faculty, and advanced research facilities.",
    image: manipalImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Medical Sciences, Engineering, and Business Administration.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "business-and-hotel-management-school",
    name: "Business and Hotel Management School",
    location: "Switzerland",
    description:
      "One of Switzerland's premier hospitality schools, providing top-tier education in hotel and business management.",
    whyThem:
      "Practical learning, international exposure, and strong industry connections.",
    image: bhmImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content:
          "Hotel Management, Business Administration, and Culinary Arts.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "la-xenia-international-institute",
    name: "La Xenia International Institute",
    location: "Switzerland",
    description:
      "A globally recognized institute specializing in hospitality and management programs, training students for successful careers worldwide.",
    whyThem:
      "Industry-led curriculum, hands-on training, and international placements.",
    image: laXeniaImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "Hospitality Management, Event Planning, and Business.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
  {
    id: "international-business-academy",
    name: "International Business Academy",
    location: "Denmark",
    description:
      "International Business Academy (IBA) is a leading business school focused on entrepreneurship, finance, and international trade.",
    whyThem:
      "A global network, practical learning approach, and strong business focus.",
    image: ibaImage,
    campusImage: iuImage,
    faqs: [
      {
        title: "Top Programs",
        content: "International Business, Finance, and Marketing.",
      },
      {
        title: "Industry-Focused Learning",
        content: "Curriculum designed in collaboration with industry leaders.",
      },
      {
        title: "Expert Faculty & Small Class Sizes",
        content:
          "Learn from experienced professors in an interactive and supportive environment.",
      },
      {
        title: "Flexible Learning Options",
        content: "Online and in-person programs tailored to students' needs.",
      },
      {
        title: "Career Readiness",
        content:
          "Career services and internship opportunities to prepare students for their future careers.",
      },
    ],
  },
];

export default universities;
