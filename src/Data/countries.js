// Importing University Images
import waxsenImage from '../assets/waxsen.jpg';
import spectrumImage from '../assets/spectrum.jpg';
import australasiaImage from '../assets/australasia.jpg';
import escClermontImage from '../assets/esc-clermont.jpg';
import neomaImage from '../assets/neoma.jpg';
import wittenborgImage from '../assets/wittenborg.jpg';
import amsterdamImage from '../assets/amsterdam.jpg';
import berlinImage from '../assets/berlin.jpg';
import hamburgImage from '../assets/hamburg.jpg';
import johnPaulImage from '../assets/john-paul.jpg';
import davisImage from '../assets/davis.jpg';
import eduglobalImage from '../assets/eduglobal.jpg';
import miamiImage from '../assets/miami.jpg';
import trinityImage from '../assets/trinity.jpg';
import torontoYorkImage from '../assets/toronto-york.jpg';
import brusselImage from '../assets/brussel.jpg';
import manipalImage from '../assets/manipal.jpg';
import bhmImage from '../assets/bhm.jpg';
import laXeniaImage from '../assets/la-xenia.jpg';
import ibaImage from '../assets/iba.jpg';

// Existing Hero Images
import heroImage1 from '../assets/herousa.jpg';
import heroImage2 from '../assets/herocanda.jpg';
import heroImage3 from '../assets/herogermany.jpg';
import heroImage4 from '../assets/herofrance.jpg';
import heroImage5 from '../assets/heroswiss.jpg';
import heroImage6 from '../assets/herosingapore.jpg';
import heroImage7 from '../assets/heromala.jpg';
import heroImage8 from '../assets/heronetherland.jpg';
import heroImage9 from '../assets/heropoland.jpg';
import heroImage10 from '../assets/herouae.jpg';
import heroImage11 from '../assets/heroindia.jpg';
import heroImage12 from '../assets/herobelgium.jpg';

// Hero Images for NEW Countries (Ensure you have these images in your assets folder and paths are correct)
import heroImageUK from '../assets/heroImageUK.jpg'; // Placeholder - replace with actual path
import heroImageAustralia from '../assets/heroImageAustralia.jpg'; // Placeholder - replace with actual path
import heroImageAustria from '../assets/heroImageAustria.jpg'; // Placeholder - replace with actual path
import heroImageDenmark from '../assets/heroImageDenmark.jpg'; // Placeholder - replace with actual path
import heroImageIreland from '../assets/heroImageIreland.jpg'; // Placeholder - replace with actual path
import heroImageFinland from '../assets/heroImageFinland.jpg'; // Placeholder - replace with actual path
import heroImageHungary from '../assets/heroImageHungary.jpg'; // Placeholder - replace with actual path
import heroImageItaly from '../assets/heroImageItaly.jpg'; // Placeholder - replace with actual path
import heroImageNewZealand from '../assets/heroImageNewZealand.jpg'; // Placeholder - replace with actual path
import heroImageChina from '../assets/heroImageChina.jpg'; // Placeholder - replace with actual path


const countries = {
    usa: {
        name: "United States",
        image: heroImage1,
        heroText: "Study in USA – Your Pathway to Global Education Starts Here",
        featuredUniversities: [
            { image: davisImage, name: "Davis University", id: "davis-university" },
            { image: eduglobalImage, name: "EduGlobal College", id: "eduglobal-college" },
            { image: miamiImage, name: "Miami Regional University", id: "miami-regional-university" },

        ],
        whyStudyHere: `The USA offers a world-class education system, globally recognized
        degrees, and diverse career opportunities. With cutting-edge research, strong
        industry connections, and a focus on innovation, studying in the USA provides
        real-world experience and a transformative journey.`,
        popularUniversities: [
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },
            { image: waxsenImage, name: "Waxsen University", id: "waxsen-university" },
            { image: laXeniaImage, name: "La Xenia International Institute", id: "la-xenia-international-institute" },
        ],
    },

    canada: {
        name: "Canada",
        image: heroImage2,
        heroText: "Study in Canada – A Land of Opportunities and Excellence",

        featuredUniversities: [
            { image: trinityImage, name: "Trinity Western University", id: "trinity-western-university" },
            { image: torontoYorkImage, name: "Toronto York University", id: "toronto-york-university" },

        ],

        whyStudyHere: `Canada is known for its high-quality education, diverse culture,
        and student-friendly environment. With affordable tuition fees, strong research
        programs, and post-graduate work opportunities, Canada is a top choice for students
        seeking academic excellence and career growth.`,

        popularUniversities: [
            { image: wittenborgImage, name: "Wittenborg University", id: "wittenborg-university" },
            { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },
        ],
    },

    germany: {
        name: "Germany",
        image: heroImage3,
        heroText: "Study in Germany – Innovate, Research, and Excel",

        featuredUniversities: [
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },

        ],

        whyStudyHere: `Germany is a hub for innovation, research, and technology.
        Offering free or low-cost education at prestigious universities, Germany attracts
        students from all over the world. The strong industrial ties and a robust job
        market make it an excellent destination for higher studies.`,

        popularUniversities: [
            { image: brusselImage, name: "University of Brussel", id: "university-of-brussel" },
            { image: bhmImage, name: "Business and Hotel Management School", id: "business-and-hotel-management-school" },
            { image: laXeniaImage, name: "La Xenia International Institute", id: "la-xenia-international-institute" },

        ],
    },

    france: {
        name: "France",
        image: heroImage4,
        heroText: "Study in France – A Gateway to Excellence",

        featuredUniversities: [
            { image: escClermontImage, name: "ESC Clermont Business School", id: "esc-clermont-business-school" },
            { image: neomaImage, name: "NEOMA Business School", id: "neoma-business-school" },
        ],

        whyStudyHere: `France is one of the leading study destinations, known for its
        prestigious institutions, world-class business schools, and strong emphasis on
        arts and humanities. With affordable tuition fees and scholarship opportunities,
        it is a top choice for international students.`,

        popularUniversities: [
            { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },

        ],
    },

    switzerland: {
        name: "Switzerland",
        image: heroImage5,
        heroText: "Study in Switzerland – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: bhmImage, name: "Business and Hotel Management School", id: "business-and-hotel-management-school" },
            { image: laXeniaImage, name: "La Xenia International Institute", id: "la-xenia-international-institute" },
            { image: ibaImage, name: "International Business Academy", id: "international-business-academy" }
        ],
        whyStudyHere: `Switzerland is known for its high academic standards, top-ranked universities,
        and strong research programs. It offers an international environment, innovation-driven
        education, and numerous career opportunities in finance, pharmaceuticals, and hospitality.`,
        popularUniversities: [
            { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },

        ],
    },

    singapore: {
        name: "Singapore",
        image: heroImage6,
        heroText: "Study in Singapore – A Global Hub for Education and Innovation",
        featuredUniversities: [
            { image: australasiaImage, name: "Academic of Australasia College", id: "australasia-college" },
        ],
        whyStudyHere: `Singapore is a leading education hub, offering world-class universities,
        cutting-edge research, and strong industry connections. Its strategic location, safe
        environment, and diverse culture make it a preferred study destination.`,
        popularUniversities: [
            { image: neomaImage, name: "NEOMA Business School", id: "neoma-business-school" },
            { image: wittenborgImage, name: "Wittenborg University", id: "wittenborg-university" },
            { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
        ],
    },

    malaysia: {
        name: "Malaysia",
        image: heroImage7,
        heroText: "Study in Malaysia – Affordable and Quality Education",
        featuredUniversities: [
            { image: spectrumImage, name: "Spectrum University College", id: "spectrum-university-college" },
        ],
        whyStudyHere: `Malaysia is known for affordable tuition fees, diverse cultural experiences,
        and high-quality education. With globally recognized universities and a lower cost of
        living, it is a great choice for international students.`,
        popularUniversities: [
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },
            { image: johnPaulImage, name: "John Paul Secondary University", id: "john-paul-secondary-university" },
        ],
    },

    netherlands: {
        name: "Netherlands",
        image: heroImage8,
        heroText: "Study in Netherlands – A Global Hub for Higher Education",
        featuredUniversities: [
            { image: wittenborgImage, name: "Wittenborg University", id: "wittenborg-university" },
            { image: amsterdamImage, name: "Amsterdam Campus", id: "amsterdam-campus" },
        ],
        whyStudyHere: `The Netherlands offers high-quality education, innovative research opportunities,
        and a welcoming international environment. Many programs are taught in English, making it
        an attractive destination for students worldwide.`,
        popularUniversities: [
            { image: miamiImage, name: "Miami Regional University", id: "miami-regional-university" },
            { image: manipalImage, name: "Manipal University", id: "manipal-university" },
            { image: bhmImage, name: "Business and Hotel Management School", id: "business-and-hotel-management-school" },

        ],
    },

    poland: {
        name: "Poland",
        image: heroImage9,
        heroText: "Study in Poland – Affordable and High-Quality Education",
        featuredUniversities: [
            { image: johnPaulImage, name: "John Paul Secondary University", id: "john-paul-secondary-university" },
        ],
        whyStudyHere: `Poland offers top universities, affordable tuition fees, and a rich
        cultural experience. With a growing economy and high-quality education, it attracts
        students from all over the world.`,
        popularUniversities: [
            { image: wittenborgImage, name: "Wittenborg University", id: "wittenborg-university" },
            { image: trinityImage, name: "Trinity Western University", id: "trinity-western-university" },
        ],
    },

    uae: {
        name: "United Arab Emirates",
        image: heroImage10,
        heroText: "Study in UAE – A Hub for Business and Innovation",
        featuredUniversities: [
            { image: manipalImage, name: "Manipal University", id: "manipal-university" },
        ],
        whyStudyHere: `The UAE offers world-class education, strategic location, and a vibrant
        business environment. It provides modern infrastructure, innovation-focused programs,
        and global career opportunities.`,
        popularUniversities: [
            { image: berlinImage, name: "Berlin International University", id: "berlin-international-university" },
            { image: hamburgImage, name: "University of Hamburg", id: "university-of-hamburg" },
            { image: johnPaulImage, name: "John Paul Secondary University", id: "john-paul-secondary-university" },
        ],
    },

    india: {
        name: "India",
        image: heroImage11,
        heroText: "Study in India – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: waxsenImage, name: "Woxsen University", id: "waxsen-university" },
        ],
        whyStudyHere: `India is home to prestigious universities, affordable education, and a
        dynamic job market. With strong research programs and innovation-driven learning, it
        is an attractive destination for students worldwide.`,
        popularUniversities: [
            { image: miamiImage, name: "Miami Regional University", id: "miami-regional-university" },
            { image: trinityImage, name: "Trinity Western University", id: "trinity-western-university" },
            { image: torontoYorkImage, name: "Toronto York University", id: "toronto-york-university" },
        ],
    },

    belgium: {
        name: "Belgium",
        image: heroImage12,
        heroText: "Study in Belgium – A European Hub for Quality Education",
        featuredUniversities: [
            { image: brusselImage, name: "University of Brussel", id: "university-of-brussel" },
        ],
        whyStudyHere: `Belgium is home to some of the world's oldest and most respected universities,
            offering high-quality education, multicultural experiences, and excellent research opportunities.
            Its central location in Europe provides students with access to international career opportunities
            and a vibrant student life.`,
        popularUniversities: [
            { image: johnPaulImage, name: "John Paul Secondary University", id: "john-paul-secondary-university" },
            { image: davisImage, name: "Davis University", id: "davis-university" },
            { image: eduglobalImage, name: "EduGlobal College", id: "eduglobal-college" },
        ],
    },

    // --- NEW COUNTRIES START HERE ---
    uk: {
        name: "United Kingdom",
        image: heroImageUK, // Ensure heroImageUK is imported and path is correct
        heroText: "Study in the UK – A Tradition of Excellence and Innovation",
        featuredUniversities: [
            // Add featured UK universities here: { image: yourImage, name: "University Name", id: "unique-id" }
        ],
        whyStudyHere: `The UK is home to world-renowned universities, offering a rich academic heritage and cutting-edge research. Its diverse culture, global connections, and strong career prospects make it a top choice for international students.`,
        popularUniversities: [
            // Add popular UK universities here
        ],
    },

    australia: {
        name: "Australia",
        image: heroImageAustralia, // Ensure heroImageAustralia is imported and path is correct
        heroText: "Study in Australia – Experience World-Class Education and Lifestyle",
        featuredUniversities: [
            // Add featured Australian universities here
        ],
        whyStudyHere: `Australia offers a high standard of living, excellent universities, and vibrant multicultural cities. Known for its innovative teaching and research, it provides numerous opportunities for personal and professional growth.`,
        popularUniversities: [
            // Add popular Australian universities here
        ],
    },

    austria: {
        name: "Austria",
        image: heroImageAustria, // Ensure heroImageAustria is imported and path is correct
        heroText: "Study in Austria – Discover Culture, Quality, and Opportunity",
        featuredUniversities: [
            // Add featured Austrian universities here
        ],
        whyStudyHere: `Austria, located in the heart of Europe, boasts high-quality universities, a rich cultural heritage, and a safe, welcoming environment. It's an ideal destination for students seeking excellent education and a unique European experience.`,
        popularUniversities: [
            // Add popular Austrian universities here
        ],
    },

    denmark: {
        name: "Denmark",
        image: heroImageDenmark, // Ensure heroImageDenmark is imported and path is correct
        heroText: "Study in Denmark – Innovate, Learn, and Thrive",
        featuredUniversities: [
            // Add featured Danish universities here
        ],
        whyStudyHere: `Denmark is known for its innovative teaching methods, high academic standards, and focus on research and sustainability. It offers a progressive society, a high quality of life, and a welcoming atmosphere for international students.`,
        popularUniversities: [
            // Add popular Danish universities here
        ],
    },

    ireland: {
        name: "Ireland",
        image: heroImageIreland, // Ensure heroImageIreland is imported and path is correct
        heroText: "Study in Ireland – A Warm Welcome to a Land of Scholars",
        featuredUniversities: [
            // Add featured Irish universities here
        ],
        whyStudyHere: `Ireland offers a world-class education system in a friendly, English-speaking environment. Known for its rich history, vibrant culture, and strong focus on research and innovation, it's a popular choice for students worldwide.`,
        popularUniversities: [
            // Add popular Irish universities here
        ],
    },

    finland: {
        name: "Finland",
        image: heroImageFinland, // Ensure heroImageFinland is imported and path is correct
        heroText: "Study in Finland – Excellence in Education and Well-being",
        featuredUniversities: [
            // Add featured Finnish universities here
        ],
        whyStudyHere: `Finland is renowned for its top-tier education system, innovative learning environments, and high quality of life. It offers excellent research opportunities and a unique cultural experience in a safe and technologically advanced society.`,
        popularUniversities: [
            // Add popular Finnish universities here
        ],
    },

    hungary: {
        name: "Hungary",
        image: heroImageHungary, // Ensure heroImageHungary is imported and path is correct
        heroText: "Study in Hungary – Affordable Quality Education in Central Europe",
        featuredUniversities: [
            // Add featured Hungarian universities here
        ],
        whyStudyHere: `Hungary offers a blend of rich history, vibrant culture, and high-quality, affordable education. Its universities have a long tradition of excellence, particularly in fields like medicine, engineering, and arts.`,
        popularUniversities: [
            // Add popular Hungarian universities here
        ],
    },

    italy: {
        name: "Italy",
        image: heroImageItaly, // Ensure heroImageItaly is imported and path is correct
        heroText: "Study in Italy – Where History, Culture, and Education Converge",
        featuredUniversities: [
            // Add featured Italian universities here
        ],
        whyStudyHere: `Italy is home to some of the world's oldest universities, offering a rich academic tradition combined with stunning art, culture, and cuisine. It provides a unique and inspiring environment for international students.`,
        popularUniversities: [
            // Add popular Italian universities here
        ],
    },

    newZealand: { // Note the camelCase key for consistency
        name: "New Zealand",
        image: heroImageNewZealand, // Ensure heroImageNewZealand is imported and path is correct
        heroText: "Study in New Zealand – Discover Innovative Education and Breathtaking Nature",
        featuredUniversities: [
            // Add featured New Zealand universities here
        ],
        whyStudyHere: `New Zealand offers a world-class education system in a safe, friendly, and picturesque environment. Known for its innovative approach to teaching and research, it provides excellent opportunities for students seeking a unique study experience.`,
        popularUniversities: [
            // Add popular New Zealand universities here
        ],
    },

    china: {
        name: "China",
        image: heroImageChina, // Ensure heroImageChina is imported and path is correct
        heroText: "Study in China – Experience a Rising Global Power in Education",
        featuredUniversities: [
            // Add featured Chinese universities here
        ],
        whyStudyHere: `China is rapidly emerging as a global education hub, offering a growing number of high-quality programs in English. It provides a unique opportunity to experience a rich culture, a dynamic economy, and cutting-edge research.`,
        popularUniversities: [
            // Add popular Chinese universities here
        ],
    },
    // --- NEW COUNTRIES END HERE ---
};

export default countries;