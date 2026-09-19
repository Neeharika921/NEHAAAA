import type { WorkExperience, Project, Certification, SkillCategory, Education } from '@/types';

export const personal = {
  name: 'Neeharika Kuppili',
  role: 'data science undergraduate',
  greeting: "hi! i'm Neeharika.",
  email: 'kuppilineeharika09@gmail.com',
  github: 'https://github.com/Neeharika921',
  linkedin: 'https://www.linkedin.com/in/neeharika-kuppili-665706289/',
  resumeUrl: 'https://drive.google.com/file/d/12GqV6qhO300uoBBV-ggDtO31LJUUz2qj/view?usp=drive_link',
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
    title: 'AI Engineer Intern',
    company: 'Symbiosys Technologies',
    type: 'Internship',
    period: 'May 2026 – June 2026',
    duration: '2 mos',
    location: 'Remote',
    mode: 'Remote',
    bullets: [
      'Contributed to NoteAI, an AI-powered Learning Management System for generating personalized learning content.',
      'Developed a context-aware AI chatbot using Google Gemini AI for intelligent question answering.',
      'Worked with Python, FastAPI, and React.js to support AI-powered application development.',
    ],
  },
  {
    title: 'Data Analytics Intern',
    company: 'CodeAlpha',
    type: 'Internship',
    period: 'June 2025',
    duration: '1 mo',
    location: 'Remote',
    mode: 'Remote',
    bullets: [
      'Analyzed and preprocessed datasets to identify trends, patterns, and data-driven insights.',
      'Created visualizations and reports to communicate analytical findings clearly.',
      'Applied Python, Pandas, NumPy, Matplotlib, and Scikit-learn for data analysis tasks.',
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
    name: 'NoteAI – AI-Powered Learning Management System',
    description:
      'Built an AI-powered platform that converts educational videos into structured notes, quizzes, and study materials using Google Gemini AI.',
    tech: [
      'React.js',
      'Vite',
      'FastAPI',
      'Python',
      'Google Gemini AI',
      'YouTube Transcript API',
      'yt-dlp',
    ],
  },

  {
    name: 'Customer Churn Prediction System',
    description:
      'Developed a Random Forest-based machine learning system to predict customer churn and deployed an interactive Streamlit dashboard for predictions and customer insights.',
    tech: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Streamlit',
      'Matplotlib',
    ],
  },

  {
    name: 'Candidate Screening Powered by AI',
    description:
      'Developed an AI-powered candidate screening system that matches candidate profiles with job requirements using NLP and extracts relevant skills for profile-matching insights.',
    tech: [
      'Python',
      'NLP',
      'Scikit-learn',
      'Pandas',
      'Streamlit',
    ],
  },
];

export const certifications: Certification[] = [
  { name: 'AI-ML Virtual Internship', issuer: 'AICTE & EduSkills' },
  { name: 'Deloitte Data Analytics Job Simulation', issuer: 'Forage' },
  { name: 'NPTEL Elite Certification – Cloud Computing & Distributed Systems', issuer: 'IIT Kanpur (73%), 2026' },
];
