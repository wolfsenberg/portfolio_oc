export const personal = {
  name: "GEINEL NIÑO A. DUNGAO",
  shortName: "GEINEL NIÑO DUNGAO",
  subtitle: "IT Student | Full-Stack Web & IoT Developer | Technical Project Manager @ AWSCCPUP | Creatives @ AWSUG e:Novators PH | Compliance Analyst, Cloud Solutions @ GDGPUP",
  tagline: "// Welcome to my portfolio ^___^//",
  quote: '"Being a generalist isn\'t a weakness—it\'s the reason I lead."',
  username: "@wolfsenberg",
  email: "geineldungao012@gmail.com",
  location: "Post Proper Southside, Taguig City",
  linkedin: "https://www.linkedin.com/in/geineldungao/",
  github: "https://github.com/wolfsenberg",
  facebook: "https://www.facebook.com/gein3ru",
  instagram: "https://www.instagram.com/_geineru/",
};

export const experiences = [
  {
    org: "Cornersteel Systems Corporation",
    roles: [
      { title: "Full-Stack Web & IoT Developer Intern", period: "2026 - Present" },
      { title: "IoT Developer Intern", period: "2025" },
    ],
  },
  {
    org: "AWS Cloud Club PUP",
    roles: [
      { title: "Technical Project Manager - DevTeam", period: "2025 - Present" },
      { title: "Member - Cloud Computing and Infrastructure Team", period: "2024 - Present" },
      { title: "Logistics - Operations Team", period: "2024 - 2025" },
    ],
  },
  {
    org: "AWS User Group e:Novators Philippines",
    roles: [
      { title: "Creatives - Office of Creative Services", period: "2025 - Present" },
    ],
  },
  {
    org: "Google Developer Groups on Campus PUP",
    roles: [
      { title: "Cloud Solutions Team - Compliance Analyst", period: "2025 - Present" },
      { title: "Cloud Solutions Team - Curriculum Analyst", period: "2024 - 2025" },
    ],
  },
  {
    org: "PUP Manila Microsoft Student Community",
    roles: [
      { title: "Member - Cloud Computing Department", period: "2024 - Present" },
    ],
  },
  {
    org: "Taguig Robotics Team",
    roles: [
      { title: "Robotics Competitor & Researcher", period: "2017 - 2020" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  year: string;
  tech: string[];
  type: "Solo Project" | "Team Project" | "Team Project (★ I lead this project)";
  shortDescription: string;
  fullDescription: string;
  images: { src: string; alt: string }[];
  note?: string;
};

export const projects: Project[] = [
  // ── 2026 ──────────────────────────────────────────────
  {
    id: "tedxpup",
    title: "TEDxPUP Official Website",
    year: "2026",
    tech: ["React.js", "TypeScript", "Typeform"],
    type: "Team Project",
    shortDescription: "Official website for TEDx events organized by PUP students",
    fullDescription:
      "The TEDxPUP Official Website is the central online platform for TEDx events organized by students of the Polytechnic University of the Philippines. It serves as the go-to destination for event information, speaker profiles, and updates for the PUP community and beyond.",
    images: [],
  },
  {
    id: "awscc-pup-website",
    title: "AWS Cloud Club PUP Official Website",
    year: "2026",
    tech: ["TypeScript", "Astro", "Python", "CSS"],
    type: "Team Project",
    shortDescription: "An all-in-one online platform for AWS Cloud Club PUP Manila",
    fullDescription:
      "The AWS Cloud Club PUP Official Website is an all-in-one online platform for AWS Cloud Club PUP Manila. It provides members and visitors with information about the club's activities, events, projects, and team, serving as the digital home of the organization.",
    images: [],
  },
  // ── 2025 ──────────────────────────────────────────────
  {
    id: "surroundsense",
    title: "SurroundSense",
    year: "2025",
    tech: ["Arduino", "C++", "Python"],
    type: "Solo Project",
    shortDescription: "An Arduino-Python LiDAR Application for Real-Time Surrounding Mapping and Object Detection",
    fullDescription:
      "SurroundSense is a real-time scanning app that maps nearby surroundings using the TF Mini-S LiDAR and MPU6050 gyro sensor. Acting like a digital pen, the system collects distance and orientation data as you move the device, plotting a map of the environment. You can view the result not just in a 2D radar-style map but also in a 3D wireframe style for a more detailed look. Arduino (C++) manages the hardware control, while Python with Pygame handles data processing and visualization.",
    images: [
      { src: "/SURROUNDSENSE/SURROUNDSENSE_WELCOME.png", alt: "SurroundSense Welcome Screen" },
      { src: "/SURROUNDSENSE/SURROUNDSENSE2D.png", alt: "SurroundSense 2D Mapping" },
      { src: "/SURROUNDSENSE/SURROUNDSENSE_TEST.png", alt: "SurroundSense Testing" },
      { src: "/SURROUNDSENSE/SURROUNDSENSE3D.png", alt: "SurroundSense 3D Mapping" },
    ],
  },
  {
    id: "project-zero",
    title: "Project Zero",
    year: "2025",
    tech: ["PHP", "Laravel", "Tailwind CSS", "SQL"],
    type: "Solo Project",
    shortDescription: "A Job Listing Site to Take IT Professionals from Zero to Career Hero",
    fullDescription:
      "Project Zero is a full-stack job listing platform built with PHP Laravel, styled with Tailwind CSS, and connected to a MySQL database. Made for IT professionals, it links users with companies by finding the right job opportunities that fit their goals, helping them go from zero to career hero.",
    images: [
      { src: "/PROJECT ZERO.png", alt: "Project Zero Dashboard" },
    ],
  },
  {
    id: "atimonan",
    title: "Municipal Website of Atimonan, Quezon",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Google Apps Script", "Firebase"],
    type: "Team Project (★ I lead this project)",
    shortDescription: "An online portal that gives residents and visitors of Atimonan, Quezon easy access to local services, news, announcements, emergency contacts, community updates, and more",
    fullDescription:
      "The Municipal Website of Atimonan, Quezon is a community-focused platform developed by our team to give residents and visitors easy access to local information in one place. The Home page highlights the beauty of Atimonan, showcasing its culture, landmarks, and vibrant community life. The Services section provides access to both barangay and municipal-level assistance, programs, and online transactions, while the News section keeps everyone updated with announcements and events. The About page shares the town's history and introduces its current leaders, and the Contact page lists hotlines and communication channels for emergencies.",
    images: [
      { src: "/ATIMONAN/ATIMONAN_LOGIN.png", alt: "Atimonan Website Login Page" },
      { src: "/ATIMONAN/ATIMONAN_HOME.png", alt: "Atimonan Website Home Page" },
      { src: "/ATIMONAN/ATIMONAN_SERVICES.png", alt: "Atimonan Website Services Page" },
      { src: "/ATIMONAN/ATIMONAN_NEWS.png", alt: "Atimonan Website News Page" },
      { src: "/ATIMONAN/ATIMONAN_ABOUT.png", alt: "Atimonan Website About Page" },
      { src: "/ATIMONAN/ATIMONAN_CONTACT.png", alt: "Atimonan Website Contact Page" },
    ],
  },
  // ── 2024 ──────────────────────────────────────────────
  {
    id: "pokemon-finder",
    title: "Pokemon Finder",
    year: "2024",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Solo Project",
    shortDescription: "A cute little web app that fetches the Pokémon you search for",
    fullDescription:
      "Pokémon Finder is a fun web app built using HTML, CSS, and JavaScript. It integrates with a Pokémon API to fetch data and display classic pixel-art Pokémon sprites. Simply search for a Pokémon and the app shows its sprite on screen.",
    images: [
      { src: "/POKEMON_FINDER.png", alt: "Pokemon Finder Dashboard" },
    ],
  },
  {
    id: "movieboxd",
    title: "Movieboxd",
    year: "2024",
    tech: ["PHP", "CSS", "SQL"],
    type: "Solo Project",
    shortDescription: "A parody project of Letterboxd, focused on testing login and registration",
    fullDescription:
      "Movieboxd is a parody of Letterboxd that explores user authentication, focusing on login and registration with a MySQL database. It demonstrates how the frontend connects to the backend and manages user data.",
    images: [
      { src: "/MOVIEBOXD1.png", alt: "Movieboxd Login" },
      { src: "/MOVIEBOXD2.png", alt: "Movieboxd Register" },
    ],
  },
  {
    id: "digital-business-card",
    title: "Digital Business Card",
    year: "2024",
    tech: ["HTML", "CSS"],
    type: "Solo Project",
    shortDescription: "A simple web-based digital business card built with HTML and CSS",
    fullDescription:
      "Digital Business Card is a clean and minimal web profile built with HTML and CSS to showcase personal information. Inspired by Tyler, The Creator's iconic ID card from Call Me If You Get Lost.",
    images: [
      { src: "/BUSINESS_CARD.png", alt: "Business Card" },
    ],
  },
  {
    id: "straw-hat-pirates",
    title: "Meet the Straw Hat Pirates",
    year: "2024",
    tech: ["HTML", "CSS"],
    type: "Solo Project",
    shortDescription: "A wiki-like website dedicated to showcasing the members of the Straw Hat Pirates from One Piece",
    fullDescription:
      "Meet the Straw Hat Pirates is a wiki-like website built with HTML and CSS, featuring the members of the Straw Hat Pirates from One Piece. Each character is displayed on a card styled after their iconic bounty poster.",
    images: [
      { src: "/STRAWHATS.png", alt: "Straw Hat Pirates" },
    ],
  },
  // ── 2023 ──────────────────────────────────────────────
  {
    id: "rfid-report-card",
    title: "Arduino-Based RFID System as an Efficient Tracker of the Students' Report Card",
    year: "2023",
    tech: ["Arduino", "C++"],
    type: "Team Project (★ I lead this project)",
    shortDescription: "An Arduino-based RFID system that instantly displays students' grades on an LCD screen and sends them via SMS using a GSM module",
    fullDescription:
      "This project is an Arduino-based RFID student tracking system designed to simplify how grades are viewed and shared. When a student taps their RFID card, their grades are instantly shown on an LCD screen for quick access. The system also uses a GSM module to send the results via SMS to both students and parents, ensuring timely updates and promoting transparency.",
    images: [
      { src: "/RFID_GRADE.png", alt: "RFID Grade System" },
    ],
  },
  // ── 2019 ──────────────────────────────────────────────
  {
    id: "project-yu",
    title: "Project Yú",
    year: "2019",
    tech: ["Arduino", "C++"],
    type: "Team Project",
    shortDescription: "An Arduino-Based Robot to Assist Fishermen in Detecting Fish Abundance",
    fullDescription:
      "Project Yú is an Arduino-based robot designed to assist fishermen in locating areas with higher fish abundance. Powered by a solar panel, it uses a submerged pH level sensor to measure water conditions and a GSM module to send real-time updates directly to fishermen.",
    images: [],
    note: "Presented at Division Science and Technology Fair 2019 - Science Innovation Expo",
  },
  {
    id: "project-talakinesis",
    title: "Project Talakinesis",
    year: "2019",
    tech: ["Arduino", "C++"],
    type: "Team Project",
    shortDescription: "An Arduino-Based Motion Activated Light Source for Energy Efficiency",
    fullDescription:
      "Project Talakinesis is an Arduino-based motion-activated lighting system designed to promote efficient energy use. Using a PIR motion sensor, the system detects movement and automatically turns on a light only when needed.",
    images: [],
    note: "Presented at 1st Filipino Ideas Expo (2019)",
  },
  {
    id: "rfid-passport",
    title: "Arduino-Based RFID Technology as an Efficient Way of Passport Verification",
    year: "2019",
    tech: ["Arduino", "C++"],
    type: "Team Project (★ I lead this project)",
    shortDescription: "An Arduino-based RFID system that speeds up passport verification by allowing passengers to tap their RFID-enabled passport and instantly display their information",
    fullDescription:
      "This project introduces an Arduino-based RFID system that revolutionizes passport verification. With just a single tap of an RFID-enabled passport, a passenger's information instantly appears on the screen, eliminating the delays of manual checks.",
    images: [],
  },
];

export const education = [
  {
    school: "Polytechnic University of the Philippines (Sta. Mesa)",
    level: "College — Information Technology",
    years: [{ period: "2023 - Present" }],
  },
  {
    school: 'Sen. Renato "Compañero" Cayetano Memorial Science and Technology High School',
    level: "",
    years: [
      { period: "2021 - 2023", label: "Senior High School — Science, Technology, Engineering, and Mathematics (STEM)", honor: "Graduated with High Honors" },
      { period: "2017 - 2021", label: "Junior High School", honor: "Graduated with Honors" },
    ],
  },
  {
    school: "Rizal Elementary School",
    level: "Elementary",
    years: [{ period: "2011 - 2017", honor: "Graduated with Honors" }],
  },
];

export const skills = [
  {
    category: "Technical & Programming",
    items: [
      "Arduino", "C", "C++", "Java", "Python",
      "HTML", "CSS", "JavaScript", "SQL",
      "Laravel", "Tailwind CSS", "Google Apps Script",
      "Prompt Engineering", "Robotics (Hardware & Software)", "Research",
    ],
  },
  {
    category: "IT & Networking",
    items: [
      "Project Management", "AWS Cloud Concepts", "Network Administration",
      "Windows Server", "Computer Networking", "Hardware Assembly",
      "Installation", "Maintenance", "Troubleshooting",
    ],
  },
  {
    category: "Multimedia & Design",
    items: ["Photography", "Videography", "Photo Editing", "Video Editing"],
  },
  {
    category: "Social Media & Communication",
    items: ["Social Media Management", "Content Strategy"],
  },
  {
    category: "Languages",
    items: ["English", "Filipino"],
  },
];

export const achievements = [
  {
    year: "2026",
    items: [
      "2nd Place — Google Developer Groups PUP: Build with AI Mini Hackathon",
      "2nd Place — Zero to Agent Manila: Mini Hackathon",
      "Top Builder — Build on Stellar Bootcamp Philippines",
      "3rd Place — Arduino Day Philippines 2026: ArduInnovathon",
    ],
  },
  {
    year: "2025",
    items: [
      "Finished second year with a GPA of 1.22 — Information Technology, Polytechnic University of the Philippines",
    ],
  },
  {
    year: "2024",
    items: [
      "Finished first year with a GPA of 1.19 — Information Technology, Polytechnic University of the Philippines",
    ],
  },
  {
    year: "2023",
    items: [
      'Graduated with High Honors — Senior High School, Sen. Renato "Compañero" Cayetano Memorial Science and Technology High School',
    ],
  },
  {
    year: "2021",
    items: [
      'Graduated with Honors — Junior High School, Sen. Renato "Compañero" Cayetano Memorial Science and Technology High School',
    ],
  },
  {
    year: "2019",
    items: [
      "Participant — DOST Tagisang Robotics: Design, Build and Play 2019",
      "4th Place — Division Science and Technology Fair 2019 - Science Innovation Expo (Team Category)",
      "Participant — 1st Filipino Ideas Expo",
      "Participant — 18th Philippine Robotics Olympiad - Lego",
      "2nd Place — International Robot Olympiad Preliminary 2019 - Robot in Movie (Senior Category)",
      "3rd Place — FIRA Roboworldcup Philippine Open - Robot Rugby (U19)",
      "1st Place — Summer Sumo Games and Youth Robotics Competition - Robot in Movie (Senior Category)",
    ],
  },
  {
    year: "2018",
    items: [
      "2nd Place — International Robot Olympiad Pre-Event (Intelligent Machines Contest) 2018 - Robot Farming",
      "Participant — RobOlympix 2018 - Puck Collect Challenge",
      "2nd Place — MIBF - Manufacturing Technology World - Robotics Competition - Color Sorting",
      "3rd Place — Summer Sumo Games and Youth Robotics Competition - Robot in Movie (Senior Category)",
      "Participant — International Robot Olympiad 2018 - Robot in Movie (Senior Category)",
    ],
  },
  {
    year: "2017",
    items: [
      "Graduated with Honors — Elementary, Rizal Elementary School",
    ],
  },
];

export const certifications = [
  {
    title: "National Certificate III in Visual Graphic Design",
    issuer: "TESDA: Technical Education and Skills Development Authority",
    credentialId: "25130603070903",
  },
  {
    title: "National Certificate II in Computer Systems Servicing",
    issuer: "TESDA: Technical Education and Skills Development Authority",
    credentialId: "24131402021182",
  },
];
