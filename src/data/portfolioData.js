export const portfolioData = {
  personal: {
    name: "ADITHYA ASHOK MENASHINAKAI",
    displayName: "Adithya Menashinakai",
    title: "Aspiring Data Analyst & Software Developer",
    summary: "Aspiring Data Analyst skilled in Python, Excel, Power BI, Tableau, and relational databases. Experienced in data extraction, transformation, and analysis using Oracle and AWS, with hands-on experience in data cleaning and anomaly handling. Built a Python-based stock analysis platform to derive market insights and support data-driven decisions.",
    location: "Dharwad, Karnataka - 580007",
    email: "adithyam.mca@gmail.com",
    phone: "+91-9731572531",
    linkedIn: "https://linkedin.com/in/adithya-menashinakai-2656b7302/",
    github: "https://github.com/adithyam1432",
    profilePhoto: "./assets/frameimg.jpeg",
    resumePdf: "./assets/Adithya_Menashinakai_Resume.pdf",
    availability: "Open to Data Analytics & Software Engineering Roles"
  },

  about: {
    badge: "Recruiter Summary",
    headline: "Translating Complex Datasets into Data-Driven Business Decisions",
    paragraphs: [
      "Currently pursuing my Master of Computer Applications (MCA) at Chetan Business School, Hubli, following a Bachelor of Computer Applications (BCA) with an 8.3 CGPA from KLE Society's College.",
      "My technical background bridges data analytics and software development. During my internship at Vistaar Financial Services in Bangalore, I engineered SQL data extraction workflows across Oracle databases and AWS S3, significantly streamlining daily analyst workflows.",
      "I specialize in end-to-end data analytics—from raw CSV ingestion and data cleaning in Pandas and NumPy to building interactive Power BI & Tableau visual reports, as well as full-stack application development."
    ],
    highlights: [
      { label: "BCA Performance", value: "8.3 CGPA" },
      { label: "Current Focus", value: "MCA (2025–2027)" },
      { label: "Core Expertise", value: "Python, SQL, Power BI, AWS S3" },
      { label: "Experience Level", value: "Enterprise Analytics Intern" }
    ]
  },

  skills: {
    categories: [
      {
        id: "programming",
        name: "Programming",
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
        id: "bi_analytics",
        name: "BI & Analytics Tools",
        icon: "BarChart3",
        skills: ["Excel", "Power BI", "Tableau"]
      },
      {
        id: "python_libs",
        name: "Python Libraries",
        icon: "Cpu",
        skills: ["Pandas", "NumPy"]
      },
      {
        id: "tools",
        name: "Database & IDE Tools",
        icon: "Wrench",
        skills: ["Oracle SQL Developer", "DBeaver", "VS Code", "GitHub"]
      },
      {
        id: "data_analysis",
        name: "Data Analysis",
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
      description: "An end-to-end data mining platform engineered to ingest raw stock-price CSV files for structured market analysis, behavior pattern clustering, and automated quantitative analysis.",
      problem: "Manual stock chart analysis is time-intensive, subjective, and prone to error when scanning multi-timeframe historical market data.",
      contribution: "Designed and implemented raw CSV parsing scripts, applied Pandas and NumPy for market pattern clustering, and built an intuitive quantitative workflow to eliminate manual chart inspection.",
      liveUrl: "https://stock-movement-predictor.vercel.app/",
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "Automates multi-timeframe CSV ingestion & market pattern clustering"
    },
    {
      id: "antiques",
      title: "Secure E-Commerce & Curated Antique Marketplace (AntiQues)",
      subtitle: "Full-Stack Antique Marketplace & Admin Operations Dashboard",
      category: "Full-Stack Development",
      tech: ["Next.js (React)", "MySQL", "Three.js"],
      description: "A responsive full-stack e-commerce web application with user registration, catalog filtering, cart management, shipping logistics tracking, and an integrated store owner management dashboard.",
      problem: "Niche antique sellers require secure product catalog management, transactional workflows, and real-time operational dashboard monitoring.",
      contribution: "Architected MySQL relational schema for users, orders, and products; developed Next.js catalog filtering and shipping tracking; integrated Three.js for immersive 3D item presentation.",
      liveUrl: null, // Hidden per instructions as no live URL exists in resume
      githubUrl: "https://github.com/adithyam1432",
      featured: true,
      metrics: "Full-stack MySQL data management with live shipping tracking & owner dashboard"
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
        "Improved data extraction processes from Oracle database and AWS cloud platforms (S3) using SQL, achieving direct reduction in senior analyst workload.",
        "Gained hands-on experience with Oracle SQL Developer and DBeaver for enterprise database management and complex query optimization."
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
      description: "Completed an intensive technology job simulation involving real-world enterprise development and coding challenges in a simulated consulting environment.",
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
      detail: "Advanced study in computer applications, data structures, cloud systems, and enterprise software engineering."
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "KLE Society's College of BBA & BCA",
      location: "Dharwad, Karnataka",
      period: "2021 – 2024",
      status: "Completed",
      score: "CGPA: 8.3",
      detail: "Core computer science fundamentals, programming in Python/SQL, database systems, and web applications."
    },
    {
      id: "puc",
      degree: "Pre University Course – (Science)",
      institution: "Karnataka Science College",
      location: "Dharwad, Karnataka",
      period: "2018 – 2021",
      status: "Completed",
      score: "Percentage: 53% | Karnataka State Board",
      detail: "Focused on physics, chemistry, mathematics, and science principles."
    }
  ]
};
