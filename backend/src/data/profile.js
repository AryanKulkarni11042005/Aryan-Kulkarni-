export const profile = {
  name: "Aryan Kulkarni",
  roles: ["Backend Engineer", "AI Builder", "Cloud & DevOps Learner"],
  location: "Mumbai, India",
  coordinates: "19.0760° N, 72.8777° E",
  tagline:
    "Building intelligent systems, scalable backends, and cloud-native applications.",
  bio: [
    "I'm a Computer Engineering student who enjoys building systems.",
    "From backend APIs and databases to machine learning models and cloud deployments, I enjoy understanding how things work under the hood.",
    "Currently focused on backend engineering, AI systems, Docker, cloud infrastructure, and scalable architecture."
  ],
  experience: [
    {
      period: "2025 — Present",
      company: "Fundora",
      role: "Backend Developer & Content Creation Head",
      summary:
        "Built scalable backend systems for startup and investor onboarding workflows using Node.js, Express.js, and PostgreSQL.",
      details: [
        "Developed authentication systems, REST APIs, verification flows, and production-ready backend infrastructure.",
        "Led content creation — LinkedIn and Instagram campaigns, script writing, and video editing."
      ],
      stack: ["Node.js", "Express.js", "PostgreSQL"]
    },
    {
      period: "2025",
      company: "Dreamventz",
      role: "Web Developer Intern",
      summary: "Worked on a MERN-based event management platform.",
      details: [
        "Contributed to Razorpay integration, booking workflows, and frontend–backend functionality."
      ],
      stack: ["MongoDB", "Express.js", "React", "Node.js", "Razorpay"]
    }
  ],
  projects: [
    {
      index: "01",
      title: "TradeCast",
      subtitle: "Forecasting India's trade deficit with machine learning",
      description:
        "A machine learning platform built with FastAPI, React, CatBoost, XGBoost, and economic datasets spanning 2011–2025. Achieved an RMSE of ~1.79B while enabling forecasting, scenario simulation, and explainability.",
      metric: { value: "≈1.79B", label: "RMSE" },
      stack: ["FastAPI", "React", "CatBoost", "XGBoost"]
    },
    {
      index: "02",
      title: "Hallucination Detection",
      subtitle: "Evidence-grounded hallucination detection in LLMs",
      status: "In progress — final year project",
      description:
        "A trustworthy AI system that extracts factual claims, retrieves supporting evidence, and assigns confidence scores to LLM outputs. Focused on reducing hallucinations through evidence-grounded validation.",
      metric: { value: "Claim → Evidence → Confidence", label: "Pipeline" },
      stack: ["Python", "LLMs", "Retrieval", "NLP"]
    },
    {
      index: "03",
      title: "Curely",
      subtitle: "A secure healthcare platform",
      description:
        "A healthcare ecosystem enabling patients and doctors to manage appointments, records, and healthcare workflows. Built end-to-end on the MERN stack.",
      metric: { value: "Patients ↔ Doctors", label: "Two-sided platform" },
      stack: ["MongoDB", "Express.js", "React", "Node.js"]
    }
  ],
  learning: [
    "Docker",
    "AWS",
    "Cloud Infrastructure",
    "System Design",
    "DevOps Practices",
    "AI Engineering"
  ],
  skills: {
    Backend: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs"],
    Frontend: ["React", "Vite", "Tailwind CSS"],
    Databases: ["PostgreSQL", "MongoDB"],
    "Cloud & DevOps": ["Docker", "Azure", "CI/CD", "Nginx"],
    "Machine Learning": ["Scikit-Learn", "CatBoost", "XGBoost", "Pandas", "NumPy"]
  },
  contact: {
    email: "aryankulkarni1104@gmail.com",
    github: "https://github.com/AryanKulkarni11042005",
    linkedin: "https://linkedin.com/in/aryan-kulkarni-a24a182b9"
  }
};
