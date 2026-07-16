import type { WorkExperience, Project, Certification, SkillCategory, Education } from '@/types';

export const personal = {
  name: 'Neeharika Kuppili',
  role: 'data science undergraduate',
  greeting: "hi! i'm Neeharika.",
  email: 'kuppilineeharika09@gmail.com',
  github: 'https://github.com/Neeharika921',
  linkedin: 'https://www.linkedin.com/in/neeharika-kuppili-665706289/',
  resumeUrl: 'https://drive.google.com/file/d/1j-bBUJ9CS3L-7S_rMqv8rZUWxJ-CzQRJ/view',
} as const;

export const summary = {
  before:
    "I'm a Data Science undergraduate seeking to apply my skills in",
  highlights: ['Python', 'Machine Learning', 'NLP', 'data analytics'] as string[],
  after:
    ' to solve real-world problems. I enjoy building data-driven solutions while continuously learning and growing in collaborative environments.',
} as const;

export const education: Education = {
  institution: "Vignan's Institute of Information Technology",
  degree: 'B.Tech in Computer Science and Engineering — Data Science',
  period: 'July 2023 – May 2027',
  cgpa: '8.6/10',
  coursework: [],
};

export const work: WorkExperience[] = [
  {
    title: 'Data Analytics Intern',
    company: 'CodeAlpha',
    type: 'Internship',
    period: 'June 2025',
    duration: '1 mo',
    location: 'Remote',
    mode: 'Remote',
    bullets: [
      'Analyzed data records and performed preprocessing to improve dataset quality and consistency.',
      'Created visualizations and statistical reports to identify trends, correlations, and data patterns.',
      'Tech: Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn.',
    ],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Symbiosys Technologies',
    type: 'Internship',
    period: 'May 2026 – June 2026',
    duration: '2 mos',
    location: 'Remote',
    mode: 'Remote',
    bullets: [
      'Contributed to the development of NoteAI, an AI-powered Learning Management System.',
      'Developed a context-aware AI chatbot using Google Gemini AI for intelligent question answering.',
      'Tech: React, FastAPI, Google Gemini AI, Git, GitHub.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  { label: 'Languages', items: ['Python', 'SQL', 'Java'] },
  { label: 'Libraries & Frameworks', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'] },
  { label: 'Web Technologies', items: ['HTML', 'CSS'] },
  { label: 'Tools', items: ['Power BI', 'Excel'] },
  {
    label: 'Concepts',
    items: ['Machine Learning', 'NLP'],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.items);

export const projects: Project[] = [
  {
    name: 'Detecting Osteoporosis Using Hybrid Quantum Deep Learning',
    description:
      'Hybrid quantum machine learning model for osteoporosis detection using ResNet-50, achieving 92.35% accuracy and exploring a hybrid quantum-classical approach.',
    tech: ['Python', 'TensorFlow', 'ResNet-50', 'PennyLane', 'Qiskit', 'OpenCV'],
  },
  {
    name: 'Customer Churn Prediction System',
    description:
      'Random Forest-based customer churn prediction system that analyzes customer records and provides an interactive Streamlit dashboard.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Matplotlib'],
  },
  {
    name: 'NoteAI – AI-Powered Learning Management System',
    description:
      'AI-powered platform that converts YouTube videos into notes, quizzes, presentations, and interactive study materials using Google Gemini AI.',
    tech: ['React.js', 'Vite', 'FastAPI', 'Python', 'Google Gemini AI', 'YouTube Transcript API', 'yt-dlp'],
  },
];

export const certifications: Certification[] = [
  { name: 'AI-ML Virtual Internship', issuer: 'AICTE & EduSkills' },
  { name: 'Deloitte Data Analytics Job Simulation', issuer: 'Forage' },
  { name: 'NPTEL Elite Certification – Cloud Computing & Distributed Systems', issuer: 'IIT Kanpur (73%), 2026' },
];
