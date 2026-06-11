import type { WorkExperience, Project, Certification, SkillCategory, Education } from '@/types';

export const personal = {
  name: 'Neeharika Kuppili',
  greeting: "hi! i'm neeharika.",
  email: 'kuppilineeharika09@gmail.com',
  github: 'https://github.com/Neeharika921',
  linkedin: 'https://www.linkedin.com/in/neeharika-kuppili-665706289/',
  resumeUrl: 'https://neeharika921.github.io/RESUME_SCREENER/',
} as const;

export const summary = {
  before:
    "I'm a Data Science undergraduate passionate about crafting intelligent, data-driven applications. With expertise in",
  highlights: ['Python', 'Machine Learning', 'NLP'] as string[],
  after:
    ', I specialize in building ML pipelines, performing feature engineering, and developing impactful data solutions for real-world problems.',
} as const;

export const education: Education = {
  institution: "Vignan's Institute of Information Technology",
  degree: 'B.Tech in Computer Science and Engineering — Data Science',
  period: 'July 2023 – May 2027',
  cgpa: '8.57/10',
  coursework: ['Operating Systems', 'DBMS', 'Computer Networks', 'Object-Oriented Programming'],
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
      'Performed exploratory data analysis (EDA), data preprocessing, and visualization on real-world datasets.',
      'Conducted sentiment analysis using NLP and machine learning techniques.',
      'Applied feature engineering and model training to improve predictive performance.',
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  { label: 'Languages', items: ['Python', 'SQL', 'Java'] },
  { label: 'Libraries', items: ['Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'] },
  { label: 'Tools', items: ['Power BI', 'Excel', 'Git'] },
  {
    label: 'Concepts',
    items: ['Machine Learning', 'NLP', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.items);

export const projects: Project[] = [
  {
    name: 'Customer Churn Prediction System',
    description:
      'Machine learning pipeline using Random Forest to predict customer churn, with an interactive Streamlit app for real-time prediction and visualization.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    period: 'June 2025',
  },
  {
    name: 'AI Resume Screener',
    description:
      'NLP-based resume screening and ranking system that automates candidate evaluation via job description matching and candidate scoring.',
    tech: ['Python', 'NLP', 'Streamlit'],
    url: 'https://neeharika921.github.io/RESUME_SCREENER/',
  },
  {
    name: 'IMDB Sentiment Analysis',
    description:
      'Sentiment classification model analyzing movie reviews as positive or negative using text preprocessing, vectorization, and supervised machine learning.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'NLP'],
  },
];

export const certifications: Certification[] = [
  { name: 'AI-ML Virtual Internship', issuer: 'AICTE & EduSkills' },
  { name: 'Deloitte Data Analytics Job Simulation', issuer: 'Forage' },
  { name: 'Power BI for Beginners', issuer: 'Simplilearn' },
];
