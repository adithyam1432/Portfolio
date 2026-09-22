export const portfolioData = {
  personal: {
    name: "ADITHYA ASHOK MENASHINAKAI",
    displayName: "Adithya Menashinakai",
    title: "Data Analyst & Software Developer",
    summary: "Data Analyst eager to keep learning and improving in Python, SQL, Excel, Power BI, Tableau, and relational databases. I focus on hands-on practice—cleaning messy data, extracting datasets from Oracle & AWS S3, and building Python projects like Candle Miner to solve real problems step by step.",
    greeting: "Hi, I'm Adithya — I turn complex data into clear answers.",
    location: "Dharwad, Karnataka - 580007",
    email: "adithyam.mca@gmail.com",
    phone: "+91-9731572531",
    linkedIn: "https://linkedin.com/in/adithya-menashinakai-2656b7302/",
    github: "https://github.com/adithyam1432",
    profilePhoto: "./assets/frameimg.jpeg",
    resumePdf: "./assets/Adithya_Menashinakai_Resume.pdf",
    availability: "Available for Data Analytics & Software Roles"
  },

  about: {
    badge: "My Story & Focus",
    headline: "Connecting the Dots Between Raw Data and Real Business Value",
    paragraphs: [
      "I've always been drawn to numbers and patterns—specifically, how raw data holds the answers to real business challenges when approached with curiosity and the right analytical tools.",
      "Currently pursuing my Master of Computer Applications (MCA) at Chetan Business School in Hubli, I previously graduated with an 8.3 CGPA in Bachelor of Computer Applications (BCA) from KLE Society's College in Dharwad.",
      "During my Data Analytics Internship at Vistaar Financial Services in Bangalore, I worked directly with enterprise Oracle databases and AWS S3 cloud platforms. I wrote SQL extractions that simplified daily data workflows and directly reduced workload for senior analysts. Whether it's cleaning messy CSVs in Pandas, building visual Power BI dashboards, or writing SQL queries, I focus on delivering data you can actually act on."
    ],
    highlights: [
      { label: "BCA Distinction", value: "8.3 CGPA" },
      { label: "Current Degree", value: "MCA (2025–2027)" },
      { label: "Core Tooling", value: "Python, SQL, Power BI, AWS" },
      { label: "Hands-On Experience", value: "Enterprise Analytics Intern" }
    ]
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming Languages",
        icon: "Code",
        skills: ["Python", "SQL"]
      },
      {
        id: "databases",
        name: "Relational Databases",
        icon: "Database",
        skills: ["MySQL", "PostgreSQL", "Oracle", "DBMS"]
      },
      {
        id: "bi_analytics",
        name: "BI & Visualization",
        icon: "BarChart3",
        skills: ["Excel", "Power BI", "Tableau"]
      },
      {
        id: "python_libs",
        name: "Data Libraries",
        icon: "Cpu",
        skills: ["Pandas", "NumPy"]
      },
      {
        id: "tools",
        name: "Database & Developer Tools",
        icon: "Wrench",
        skills: ["Oracle SQL Developer", "DBeaver", "VS Code", "GitHub"]
      },
      {
        id: "data_analysis",
        name: "Analytical Practice",
        icon: "TrendingUp",
        skills: ["Data Cleaning", "Data Analysis", "Report Generation"]
      }
    ]
  },

  projects: [
    {
      id: "candle-miner",
      title: "Stock/Index Time Frame Analyser (Candle Miner)",
      subtitle: "Quantitative Stock Market Analysis & Pattern Clustering Platform",
      category: "Data Mining & Analytics",
      tech: ["Python", "React", "Pandas", "NumPy"],
      description: "A complete data mining platform built to ingest raw stock-price CSV files, analyze price behavior patterns, and group market trends automatically.",
      problem: "Manual stock chart analysis is repetitive, subjective, and easy to misinterpret when scanning multiple historical timeframes.",
      contribution: "Built raw CSV parsing scripts in Python, applied Pandas and NumPy clustering techniques to group price action patterns, and created a quantitative workflow that removes the guesswork from manual chart analysis.",
      liveUrl: "https://stock-movement-predictor.vercel.app/",
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "Automates multi-timeframe CSV ingestion & market pattern clustering"
    },
    {
      id: "antiques",
      title: "Secure E-Commerce & Curated Antique Marketplace (AntiQues)",
      subtitle: "Full-Stack Antique Marketplace with Store Owner Dashboard",
      category: "Full-Stack Development",
      tech: ["Next.js (React)", "MySQL", "Three.js"],
      description: "A responsive e-commerce web application featuring user registration, item catalog filtering, cart handling, shipping tracking, and a dedicated admin operations dashboard.",
      problem: "Niche online sellers need clean product cataloging, secure user/order management, and real-time operational dashboard metrics.",
      contribution: "Designed the MySQL database schema for products, users, carts, and orders; built Next.js catalog filtering and shipping tracking; integrated Three.js for interactive 3D product previews.",
      liveUrl: null,
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "MySQL relational data storage with live order tracking & owner dashboard"
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
        "Streamlined data extraction workflows from Oracle databases and AWS S3 cloud storage using optimized SQL queries, reducing daily workload for senior analysts.",
        "Gained hands-on experience using Oracle SQL Developer and DBeaver for enterprise database querying and data maintenance."
      ],
      tech: ["SQL", "Oracle Database", "AWS S3", "Oracle SQL Developer", "DBeaver"]
    }
  ],

  professionalDevelopment: [
    {
      id: "deloitte-forage",
      title: "Deloitte Australia Technology Job Simulation",
      issuer: "Forage",
      date: "Sep 2025",
      description: "Participated in a realistic technology consulting job simulation, working through real-world software engineering and analytical problem-solving challenges.",
      skillsApplied: ["Problem Solving", "Ideation", "Technical Analysis", "Consulting Workflow"]
    }
  ],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Chetan Business School (CBS) – Institute of Management, IT and Research",
      location: "Hubli, Karnataka",
      period: "2025 – 2027",
      status: "Pursuing",
      detail: "Advanced focus on software engineering, cloud database systems, and data analytics methodologies."
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "KLE Society's College of BBA & BCA",
      location: "Dharwad, Karnataka",
      period: "2021 – 2024",
      status: "Completed",
      score: "CGPA: 8.3",
      detail: "Core computer science fundamentals, Python/SQL programming, database architecture, and web systems."
    },
    {
      id: "puc",
      degree: "Pre University Course – (Science)",
      institution: "Karnataka Science College",
      location: "Dharwad, Karnataka",
      period: "2018 – 2021",
      status: "Completed",
      score: "Percentage: 53% | Karnataka State Board",
      detail: "Science stream coursework in mathematics, physics, chemistry, and computer science basics."
    }
  ]
};
