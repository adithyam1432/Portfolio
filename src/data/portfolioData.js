export const portfolioData = {
  personal: {
    name: "ADITHYA ASHOK MENASHINAKAI",
    displayName: "Adithya Menashinakai",
    title: "Data Analyst & Full-Stack Developer",
    summary: "MCA student and BCA graduate continuously learning and building with Python, SQL, React, Next.js, and relational databases. I focus on hands-on practice—from extracting and cleaning data with Oracle and AWS (S3) to building applications like Candle Miner (automated market data analysis) and full-stack web solutions. Winner of the MITK AI Vision National Level 24-Hour Hackathon (2026).",
    greeting: "Hi, I'm Adithya — I turn complex data into clear answers.",
    location: "Dharwad, Karnataka - 580007",
    email: "adithyam.mca@gmail.com",
    phone: "+91-9731572531",
    linkedIn: "https://linkedin.com/in/adithya-menashinakai-2656b7302/",
    github: "https://github.com/adithyam1432",
    portfolioUrl: "https://adithyam1432.github.io/Portfolio/",
    profilePhoto: "./assets/frameimg.jpeg",
    resumePdf: "./assets/Adithya_Menashinakai_Resume.pdf",
    availability: "Available for Data Analytics & Software Roles"
  },

  about: {
    badge: "My Story & Focus",
    headline: "Connecting Data Engineering, Web Tech, and Real Solutions",
    paragraphs: [
      "I'm an MCA student with a BCA graduate background (8.3 CGPA) who genuinely enjoys working with data, writing clean SQL, and building practical applications with Python, React, and Next.js.",
      "During my Data Analytics Internship at Vistaar Financial Services in Bangalore, I used Oracle databases and AWS (S3) via SQL, contributing to streamlined reporting workflows for the analytics team and managing enterprise databases using Oracle SQL Developer and DBeaver.",
      "Beyond daily coursework and data pipelines, I enjoy building end-to-end projects like Candle Miner (an automated stock market data mining pipeline) and competing in intensive events—recently winning First Prize at the MITK AI Vision National Level 24-Hour Hackathon (2026)."
    ],
    highlights: [
      { label: "Hackathon Winner", value: "MITK AI Vision 24H (1st Prize)" },
      { label: "BCA Distinction", value: "8.3 CGPA" },
      { label: "Current Degree", value: "MCA (Pursuing)" },
      { label: "Core Stack", value: "Python, SQL, React, AWS (S3)" }
    ]
  },

  skills: {
    categories: [
      {
        id: "web",
        name: "Web Development",
        icon: "Globe",
        skills: ["React", "HTML", "CSS"]
      },
      {
        id: "languages",
        name: "Languages",
        icon: "Code",
        skills: ["Python", "SQL"]
      },
      {
        id: "databases",
        name: "Databases",
        icon: "Database",
        skills: ["MySQL", "PostgreSQL", "Oracle", "DBMS"]
      },
      {
        id: "libraries_cloud",
        name: "Libraries and Cloud",
        icon: "Cloud",
        skills: ["Pandas", "NumPy", "AWS (S3)"]
      },
      {
        id: "tools",
        name: "Tools & BI",
        icon: "Wrench",
        skills: ["VS Code", "GitHub", "Oracle SQL Developer", "DBeaver", "Excel", "Power BI", "Tableau"]
      }
    ]
  },

  projects: [
    {
      id: "candle-miner",
      title: "Stock/Index Time Frame Analyser (Candle Miner)",
      subtitle: "Automated Data Mining & Market Pattern Clustering Platform",
      category: "Data Mining & Analytics",
      tech: ["Python", "React", "Pandas", "NumPy"],
      description: "An automated data mining pipeline developed to ingest raw stock-price CSV files and structure them for structured market analysis.",
      problem: "Manual stock chart analysis across multi-timeframe historical data is repetitive, subjective, and time-consuming.",
      contribution: "Developed an automated data mining pipeline in Python, applied Pandas and NumPy clustering techniques to identify and group market behavior patterns, reducing reliance on manual chart analysis.",
      liveUrl: "https://stock-movement-predictor.vercel.app/",
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "Automated CSV ingestion & behavioral pattern clustering"
    },
    {
      id: "antiques",
      title: "Secure E-Commerce Application (AntiQues)",
      subtitle: "Full-Stack Marketplace Application on Next.js & MySQL",
      category: "Full-Stack Development",
      tech: ["Next.js (React)", "MySQL", "HTML", "CSS"],
      description: "A responsive full-stack e-commerce web application with user registration, catalog filtering, cart management, shipping logistics tracking, and store owner administrative controls.",
      problem: "Niche marketplace platforms require structured relational data handling, smooth user flow, and transactional safety.",
      contribution: "Designed and implemented MySQL relational database storage for products, users, carts, and orders; built intuitive catalog filtering and order workflows using Next.js.",
      liveUrl: null,
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "MySQL relational data architecture with catalog filtering & cart management"
    }
  ],

  achievements: [
    {
      id: "mitk-hackathon",
      title: "Winner — MITK AI Vision National Level 24-Hour Hackathon",
      subtitle: "National Level 24-Hour Technology Hackathon (2026)",
      organization: "Moodlakatte Institute of Technology Kundapura (MIT Kundapura)",
      award: "First Prize Winner (₹25,000)",
      year: "2026",
      image: "./assets/hackathon_winner.jpg",
      description: "Secured First Prize at the prestigious MITK AI Vision National Level 24-Hour Hackathon. Competed against top engineering teams, conceptualized, developed, and demonstrated a full working prototype within 24 hours under intense evaluation by industry judges.",
      tags: ["National Level Hackathon", "First Prize (₹25,000)", "24-Hour Sprint", "AI Vision", "Team Collaboration"]
    }
  ],

  experience: [
    {
      id: "vistaar",
      role: "Data Analytics Intern",
      company: "Vistaar Financial Services Private Limited",
      location: "Bangalore, Karnataka",
      period: "Feb 2025 – Apr 2025",
      type: "Internship",
      highlights: [
        "Applied data extraction skills using Oracle databases and AWS (S3) via SQL, contributing to streamlined reporting workflows for the analytics team.",
        "Managed and queried enterprise databases using Oracle SQL Developer and DBeaver to support daily analytics and reporting operations."
      ],
      tech: ["SQL", "Oracle Database", "AWS (S3)", "Oracle SQL Developer", "DBeaver"]
    }
  ],

  professionalDevelopment: [
    {
      id: "deloitte-forage",
      title: "Deloitte Australia Technology Job Simulation",
      issuer: "Forage",
      date: "Sep 2025",
      description: "Analyzed mock client datasets, proposed technical solutions, and presented strategic recommendations in a simulated technology consulting environment.",
      skillsApplied: ["Mock Client Dataset Analysis", "Technical Solution Ideation", "Strategic Recommendations", "Consulting Simulation"]
    }
  ],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Chetan Business School, Hubli, Karnataka",
      location: "Hubli, Karnataka",
      period: "2025 – 2027",
      status: "Pursuing",
      detail: "Advanced focus on software development, cloud systems, and database engineering."
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Karnataka University, KLE Society's BBA and BCA College, Dharwad",
      location: "Dharwad, Karnataka",
      period: "2021 – 2024",
      status: "Completed",
      score: "CGPA: 8.3",
      detail: "Core computer science fundamentals, Python and SQL programming, database management, and web applications."
    },
    {
      id: "puc",
      degree: "Pre University Course (Science)",
      institution: "Karnataka Science College, Dharwad",
      location: "Dharwad, Karnataka",
      period: "2018 – 2021",
      status: "Completed",
      score: null,
      detail: "Science stream foundation in physics, chemistry, mathematics, and computer basics."
    }
  ]
};
