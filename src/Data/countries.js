const countries = {
    usa: {
        name: "United States",
        heroImage: "/assets/GoldenGate.png",
        heroText: "Study in USA – Your Pathway to Global Education Starts Here",
        featuredUniversities: [
            { image: "/assets/MiamiUni.png", name: "Miami Regional University" },
            { image: "/assets/DavisUni.png", name: "Davis University" },
            { image: "/assets/EduGCol.png", name: "EduGlobal College" },
        ],
        whyStudyHere: `The USA offers a world-class education system, globally recognized 
        degrees, and diverse career opportunities. With cutting-edge research, strong 
        industry connections, and a focus on innovation, studying in the USA provides 
        real-world experience and a transformative journey.`,
        popularUniversities: [
            { image: "/assets/WoxenUni.png", name: "Woxsen University" },
            { image: "/assets/NEOMA.png", name: "NEOMA Business School" },
            { image: "/assets/AmsterCam.png", name: "Amsterdam Campus" },
        ],
    },

    canada: {
        name: "Canada",
        heroImage: "/assets/CanadaBanner.png",
        heroText: "Study in Canada – A Land of Opportunities and Excellence",

        featuredUniversities: [
            { image: "/assets/TorontoUni.png", name: "University of Toronto" },
            { image: "/assets/McGillUni.png", name: "McGill University" },
            { image: "/assets/UBC.png", name: "University of British Columbia" },
        ],

        whyStudyHere: `Canada is known for its high-quality education, diverse culture, 
        and student-friendly environment. With affordable tuition fees, strong research 
        programs, and post-graduate work opportunities, Canada is a top choice for students 
        seeking academic excellence and career growth.`,

        popularUniversities: [
            { image: "/assets/Waterloo.png", name: "University of Waterloo" },
            { image: "/assets/Alberta.png", name: "University of Alberta" },
            { image: "/assets/Western.png", name: "Western University" },
        ],
    },

    germany: {
        name: "Germany",
        heroImage: "/assets/GermanyBanner.png",
        heroText: "Study in Germany – Innovate, Research, and Excel",

        featuredUniversities: [
            { image: "/assets/Heidelberg.png", name: "Heidelberg University" },
            { image: "/assets/LMU.png", name: "Ludwig Maximilian University" },
            { image: "/assets/TechnicalMunich.png", name: "Technical University of Munich" },
        ],

        whyStudyHere: `Germany is a hub for innovation, research, and technology. 
        Offering free or low-cost education at prestigious universities, Germany attracts 
        students from all over the world. The strong industrial ties and a robust job 
        market make it an excellent destination for higher studies.`,

        popularUniversities: [
            { image: "/assets/Freiburg.png", name: "University of Freiburg" },
            { image: "/assets/Stuttgart.png", name: "University of Stuttgart" },
            { image: "/assets/Hamburg.png", name: "University of Hamburg" },
        ],
    },

    france: {
        name: "France",
        heroImage: "/assets/FranceBanner.png",
        heroText: "Study in France – A Gateway to Excellence",

        featuredUniversities: [
            { image: "/assets/Sorbonne.png", name: "Sorbonne University" },
            { image: "/assets/SciencesPo.png", name: "Sciences Po Paris" },
            { image: "/assets/INSEAD.png", name: "INSEAD Business School" },
        ],

        whyStudyHere: `France is one of the leading study destinations, known for its 
        prestigious institutions, world-class business schools, and strong emphasis on 
        arts and humanities. With affordable tuition fees and scholarship opportunities, 
        it is a top choice for international students.`,

        popularUniversities: [
            { image: "/assets/ESSEC.png", name: "ESSEC Business School" },
            { image: "/assets/HEC.png", name: "HEC Paris" },
            { image: "/assets/Polytechnique.png", name: "École Polytechnique" },
        ],
    },

    switzerland: {
        name: "Switzerland",
        heroImage: "/assets/SwitzerlandBanner.png",
        heroText: "Study in Switzerland – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: "/assets/ETHZurich.png", name: "ETH Zurich" },
            { image: "/assets/UniversityGeneva.png", name: "University of Geneva" },
            { image: "/assets/EPFL.png", name: "École Polytechnique Fédérale de Lausanne (EPFL)" },
        ],
        whyStudyHere: `Switzerland is known for its high academic standards, top-ranked universities, 
        and strong research programs. It offers an international environment, innovation-driven 
        education, and numerous career opportunities in finance, pharmaceuticals, and hospitality.`,
        popularUniversities: [
            { image: "/assets/UniversityZurich.png", name: "University of Zurich" },
            { image: "/assets/Lucerne.png", name: "Lucerne University of Applied Sciences" },
            { image: "/assets/StGallen.png", name: "University of St. Gallen" },
        ],
    },

    singapore: {
        name: "Singapore",
        heroImage: "/assets/SingaporeBanner.png",
        heroText: "Study in Singapore – A Global Hub for Education and Innovation",
        featuredUniversities: [
            { image: "/assets/NUS.png", name: "National University of Singapore (NUS)" },
            { image: "/assets/NTU.png", name: "Nanyang Technological University (NTU)" },
            { image: "/assets/SIM.png", name: "Singapore Institute of Management (SIM)" },
        ],
        whyStudyHere: `Singapore is a leading education hub, offering world-class universities, 
        cutting-edge research, and strong industry connections. Its strategic location, safe 
        environment, and diverse culture make it a preferred study destination.`,
        popularUniversities: [
            { image: "/assets/SUTD.png", name: "Singapore University of Technology and Design (SUTD)" },
            { image: "/assets/JamesCook.png", name: "James Cook University Singapore" },
            { image: "/assets/SMU.png", name: "Singapore Management University (SMU)" },
        ],
    },

    malaysia: {
        name: "Malaysia",
        heroImage: "/assets/MalaysiaBanner.png",
        heroText: "Study in Malaysia – Affordable and Quality Education",
        featuredUniversities: [
            { image: "/assets/UM.png", name: "University of Malaya" },
            { image: "/assets/UKM.png", name: "Universiti Kebangsaan Malaysia" },
            { image: "/assets/UPM.png", name: "Universiti Putra Malaysia" },
        ],
        whyStudyHere: `Malaysia is known for affordable tuition fees, diverse cultural experiences, 
        and high-quality education. With globally recognized universities and a lower cost of 
        living, it is a great choice for international students.`,
        popularUniversities: [
            { image: "/assets/Taylor.png", name: "Taylor's University" },
            { image: "/assets/Monash.png", name: "Monash University Malaysia" },
            { image: "/assets/Sunway.png", name: "Sunway University" },
        ],
    },

    netherlands: {
        name: "Netherlands",
        heroImage: "/assets/NetherlandsBanner.png",
        heroText: "Study in Netherlands – A Global Hub for Higher Education",
        featuredUniversities: [
            { image: "/assets/UvA.png", name: "University of Amsterdam" },
            { image: "/assets/TUe.png", name: "Eindhoven University of Technology" },
            { image: "/assets/Leiden.png", name: "Leiden University" },
        ],
        whyStudyHere: `The Netherlands offers high-quality education, innovative research opportunities, 
        and a welcoming international environment. Many programs are taught in English, making it 
        an attractive destination for students worldwide.`,
        popularUniversities: [
            { image: "/assets/Delft.png", name: "Delft University of Technology" },
            { image: "/assets/Utrecht.png", name: "Utrecht University" },
            { image: "/assets/Groningen.png", name: "University of Groningen" },
        ],
    },

    poland: {
        name: "Poland",
        heroImage: "/assets/PolandBanner.png",
        heroText: "Study in Poland – Affordable and High-Quality Education",
        featuredUniversities: [
            { image: "/assets/Warsaw.png", name: "University of Warsaw" },
            { image: "/assets/Jagiellonian.png", name: "Jagiellonian University" },
            { image: "/assets/WUT.png", name: "Warsaw University of Technology" },
        ],
        whyStudyHere: `Poland offers top universities, affordable tuition fees, and a rich 
        cultural experience. With a growing economy and high-quality education, it attracts 
        students from all over the world.`,
        popularUniversities: [
            { image: "/assets/Poznan.png", name: "Poznań University of Technology" },
            { image: "/assets/Lodz.png", name: "Lodz University of Technology" },
            { image: "/assets/AGH.png", name: "AGH University of Science and Technology" },
        ],
    },

    uae: {
        name: "United Arab Emirates",
        heroImage: "/assets/UAEBanner.png",
        heroText: "Study in UAE – A Hub for Business and Innovation",
        featuredUniversities: [
            { image: "/assets/UAEU.png", name: "United Arab Emirates University" },
            { image: "/assets/Khalifa.png", name: "Khalifa University" },
            { image: "/assets/AUD.png", name: "American University in Dubai" },
        ],
        whyStudyHere: `The UAE offers world-class education, strategic location, and a vibrant 
        business environment. It provides modern infrastructure, innovation-focused programs, 
        and global career opportunities.`,
        popularUniversities: [
            { image: "/assets/AbuDhabi.png", name: "Abu Dhabi University" },
            { image: "/assets/Zayed.png", name: "Zayed University" },
            { image: "/assets/SorbonneAbuDhabi.png", name: "Sorbonne University Abu Dhabi" },
        ],
    },

    india: {
        name: "India",
        heroImage: "/assets/IndiaBanner.png",
        heroText: "Study in India – Excellence in Education and Innovation",
        featuredUniversities: [
            { image: "/assets/IITDelhi.png", name: "IIT Delhi" },
            { image: "/assets/IIMB.png", name: "IIM Bangalore" },
            { image: "/assets/JNU.png", name: "Jawaharlal Nehru University" },
        ],
        whyStudyHere: `India is home to prestigious universities, affordable education, and a 
        dynamic job market. With strong research programs and innovation-driven learning, it 
        is an attractive destination for students worldwide.`,
        popularUniversities: [
            { image: "/assets/IITBombay.png", name: "IIT Bombay" },
            { image: "/assets/AIIMS.png", name: "AIIMS" },
            { image: "/assets/NIT.png", name: "NIT Trichy" },
        ],
    },

    belgium: {
        name: "Belgium",
        heroImage: "/assets/BelgiumBanner.png",
        heroText: "Study in Belgium – A European Hub for Quality Education",
        featuredUniversities: [
            { image: "/assets/KULeuven.png", name: "KU Leuven" },
            { image: "/assets/UGent.png", name: "Ghent University" },
            { image: "/assets/UCLouvain.png", name: "Université catholique de Louvain (UCLouvain)" },
        ],
        whyStudyHere: `Belgium is home to some of the world's oldest and most respected universities, 
            offering high-quality education, multicultural experiences, and excellent research opportunities. 
            Its central location in Europe provides students with access to international career opportunities 
            and a vibrant student life.`,
        popularUniversities: [
            { image: "/assets/VUB.png", name: "Vrije Universiteit Brussel (VUB)" },
            { image: "/assets/UAntwerp.png", name: "University of Antwerp" },
            { image: "/assets/ULB.png", name: "Université Libre de Bruxelles (ULB)" },
        ],
    },


};

export default countries;
