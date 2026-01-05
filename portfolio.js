/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
// SEO Related settings
const seo = {
  title: "Priya Mittal | Cybersecurity & Software Engineer",
  description:
    "Computer Science undergraduate specializing in Cyber Security and Privacy. Skilled in secure APIs, software development, AI/ML systems, and scalable applications.",
  og: {
    title: "Priya Mittal Portfolio",
    type: "website",
    url: "https://github.com/PriyaMittal-0402",
  },
};



//Home Page
const greeting = {
  title: "Priya Mittal",
  logo_name: "PriyaMittal",
  nickname: "Cyber & Software Engineer",
  subTitle:
    "Computer Science undergraduate with a minor in Cyber Security and Privacy. Passionate about building secure software systems, scalable applications, and AI-driven solutions.",
  resumeLink: "https://docs.google.com/document/d/1uUatZ2XFrrosVySHExvtDBBqK7HaMzGD/edit?usp=sharing&ouid=104880944244669282420&rtpof=true&sd=true",
  portfolio_repository: "",
  githubProfile: "https://github.com/PriyaMittal-0402",
};


const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/priya-mittal-1b5903331/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Github",
    link: "https://github.com/PriyaMittal-0402",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/___peachyy.___/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
  {
    name: "Gmail",
    link: "mailto:priyamittal0402@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#9836d1ff",
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity",
      fileName: "CyberSecurityImg",
      skills: [
        "⚡ Understanding of cybersecurity fundamentals, threats, and attack vectors",
        "⚡ Hands-on experience with phishing detection, malware analysis, and network security basics",
        "⚡ Knowledge of web application security, OWASP Top 10, and common vulnerabilities",
        "⚡ Familiar with security tools, penetration testing concepts, and secure coding practices",
      ],
      softwareSkills: [
        {
          skillName: "Cybersecurity",
          fontAwesomeClassname: "simple-icons:securityscorecard",
          style: { color: "#E91E63" },
        },
        {
          skillName: "Networking",
          fontAwesomeClassname: "simple-icons:cisco",
          style: { color: "#1BA0D7" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#000000" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "OWASP",
          fontAwesomeClassname: "simple-icons:owasp",
          style: { color: "#000000" },
        },
      ],
    },

    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using modern frontend technologies",
        "⚡ Developing backend logic and APIs with secure authentication",
        "⚡ Experience with databases, version control, and deployment basics",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E", backgroundColor: "#000000" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Git & GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: { color: "#181717" },
        },
      ],
    },

    {
      title: "Tools & Technologies",
      fileName: "ToolsImg",
      skills: [
        "⚡ Version control, debugging, and collaborative development",
        "⚡ Basic cloud and deployment understanding",
        "⚡ Secure coding and best practices awareness",
      ],
      softwareSkills: [
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: { color: "#007ACC" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: { color: "#FF6C37" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
      ],
    },
  ],
};
const degrees = {
  degrees: [
    {
      title: "DIT UNIVERSITY",
      subtitle: "B.Tech in Computer Science (Cybersecurity)",
      logo_path: "DIT_University_Official_Logo.png",
      alt_name: "DIT University",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ Studying core CS subjects including DSA, OS, CN, and DBMS",
        "⚡ Focused on Cybersecurity, secure systems, and backend development",
        "⚡ Actively building real-world projects and applications",
      ],
      website_link: "https://www.dituniversity.edu.in",
    },
  ],
};





const experience = {
  title: "Experience",
  subtitle: "Leadership, Internship & Industry Exposure",
  description:
    "Hands-on experience in leadership, software development, and cybersecurity through internships, academic initiatives, and industry simulations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership & Internship",
      experiences: [
        {
          title: "President – Techno Club",
          company: "DIT University",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2024 – Present",
          location: "Dehradun, India",
          description:
            "Led a student-run technical organization of 75+ members, managing technical initiatives, projects, and collaborative learning activities. Organized 10+ hackathons, coding competitions, and technical workshops, increasing student participation by ~30% year-over-year. Mentored students on software development, cybersecurity, and AI-based projects, improving project completion and technical proficiency. Coordinated with faculty and industry speakers to deliver hands-on learning experiences aligned with real-world technologies.",
          color: "#f48fb1",
        },
        {
          title: "Software Development Intern",
          company: "Codeware IT Pvt. Ltd.",
          company_url: "",
          logo_path: "experience.svg",
          duration: "Feb 2024 – April 2025",
          location: "Dehradun, India",
          description:
            "Contributed to the design, development, and deployment of scalable software modules in a production environment following SDLC. Developed and optimized backend components and RESTful APIs, improving performance by ~25%. Collaborated with cross-functional teams to analyze requirements, debug issues, and implement solutions, reducing bug resolution time by ~15%. Worked with production-level codebases, strengthening backend development, API integration, version control, and secure coding practices. Technologies used include Python, REST APIs, Git, GitHub, Postman, Linux.",
          color: "#f06292",
        },
      ],
    },
    {
      title: "Virtual Experience & Industry Simulations",
      experiences: [
        {
          title: "Industry Job Simulations",
          company: "Forage (Deloitte, JPMorgan Chase, Walmart, ANZ, TCS)",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2024",
          location: "Virtual",
          description:
            "Completed 6+ industry-designed job simulations focused on software engineering, cybersecurity, and data analytics. Worked on secure system design, API validation, threat analysis, and data-driven problem solving based on real enterprise scenarios. Gained exposure to global corporate workflows, best practices, and professional problem-solving methodologies.",
          color: "#ec407a",
        },
      ],
    },
  ],
};
const competitiveSites = {
  competitiveSites: [],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Hands-on projects focused on Cybersecurity, Software Development, and real-world problem solving using modern technologies.",
  avatar_image_path: "projects_image.svg",
};

      const projects = {
  data: [
    {
      id: "api-security-gateway",
      name: "API Security Gateway",
      description:
        "Designed and deployed a production-ready RESTful API security gateway with JWT authentication, RBAC, rate limiting, and request validation. Reduced unauthorized access attempts by ~40% and handled 1,000+ API requests/day.",
      languages: ["Node.js", "Express", "JWT", "RBAC", "Security"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/PriyaMittal-0402/api-security-gateway",
        },
      ],
    },
    {
      id: "movie-recommendation-system",
      name: "AI-Based Movie Recommendation System",
      description:
        "Built a personalized movie recommendation system for 50+ users using collaborative and content-based filtering on datasets with 10,000+ records.",
      languages: ["Python", "Machine Learning", "Data Science"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/PriyaMittal-0402/Cart-R",
        },
      ],
    },
    {
      id: "phishguard",
      name: "PhishGuard – ML-Based Phishing Detection System",
      description:
        "Developed an AI-driven phishing detection system achieving ~92% accuracy with real-time URL analysis using a Flask web application.",
      languages: ["Python", "Flask", "ML", "Cybersecurity"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/PriyaMittal-0402/phishing-url-detection-ml",
        },
      ],
    },
  ],
};






const certifications = {
  certifications: [
    {
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Cisco",
      color_code: "#1BA0D7",
    },
    {
      title: "Networking Essentials",
      subtitle: "Cisco",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Cisco",
      color_code: "#73d71bff",
    },
    {
      title: "Cybersecurity Defense with AI & GenAI",
      subtitle: "Udemy",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Database Management Essentials",
      subtitle: "Coursera",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Hackathon Winner (2+)",
      subtitle: "Competitive Hackathons",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Hackathon",
      color_code: "#FBC02D",
    },
    {
      title: "Full Stack Development",
      subtitle: "Professional Certification",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "Full Stack ",
      color_code: "#EC407A",
    },
    {
      title: "AI Engineering",
      subtitle: "Professional Certification",
      logo_path: "experience.svg",
      certificate_link: "",
      alt_name: "AI ",
      color_code: "#ec5740ff",
    },
  ],

};



 const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I am open to internship and entry-level opportunities in Cybersecurity and Software Development. Feel free to reach out for collaboration, internships, or professional discussions.",
  },

  addressSection: {
    title: "Location",
    subtitle: "Dehradun, India",
  },

  phoneSection: {
    title: "Phone",
    subtitle: "7818829995",
  },
};
export const hobbiesSection = {
  title: "Hobbies",
  subtitle: "Things I enjoy beyond work",
  hobbies: [
    {
      title: "Reading",
      description: "Exploring books, blogs, and content for knowledge and self-growth.",
      icon: "📚"
    },
    {
      title: "Designing",
      description: "Creating visually appealing and user-friendly designs.",
      icon: "🎨"
    },
    {
      title: "Coding",
      description: "Building projects and solving problems using technology.",
      icon: "💻"
    },
    {
      title: "Debating",
      description: "Expressing ideas clearly and engaging in meaningful discussions.",
      icon: "🗣️"
    },
    {
      title: "Social Service",
      description: "Helping others and contributing positively to the community.",
      icon: "🤝"
    },
    {
      title: "Listening to Music",
      description: "Relaxing and staying inspired through music.",
      icon: "🎧"
    }
  ]
};



const publications = {
  data: [],
};
const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  certifications,
  contactPageData,
 
};



