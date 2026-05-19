export interface Project {
  id: number;
  name: string;
  description: string;
  abstract?: string;
  domain: string;
  branch:
    | "AI/ML"
    | "Data Science"
    | "IT"
    | "CS"
    | "Healthcare"
    | "Finance"
    | "Agriculture"
    | "Education"
    | "Transportation"
    | "Retail"
    | "Manufacturing"
    | "Environment"
    | "Legal Tech";
  sector?: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  hasKit: boolean;
  featured?: boolean;
  techStack: string[];
  estimatedTime: string;
  rating: number;
  reviews: number;
  downloads: number;
  views: number;
  author: string;
  modules?: string[];
  requirements?: string[];
  githubLink?: string;
  durationWeeks?: number;
  price?: number;
  deliveryDays?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Intelligent Resume Screener",
    description:
      "BERT-based ranking of resumes vs job descriptions using NLP and machine learning",
    abstract:
      "This project implements a sophisticated resume screening system using BERT to analyze and rank resumes against job descriptions.",
    domain: "AI/ML",
    branch: "AI/ML",
    difficulty: "Advanced",
    hasKit: true,
    featured: true,
    techStack: ["Python", "BERT", "Flask", "React"],
    estimatedTime: "3-4 weeks",
    rating: 4.8,
    reviews: 24,
    downloads: 342,
    views: 1250,
    author: "Dr. Sharma",
    durationWeeks: 3,
    modules: [
      "Resume Parsing",
      "Job Description Analysis",
      "Similarity Matching",
    ],
    requirements: ["Python 3.9+", "CUDA 11.0", "8GB RAM"],
    githubLink: "https://github.com/fyp-hub/resume-screener",
  },
  {
    id: 5,
    name: "AI Chatbot with Memory (RAG System)",
    description:
      "Document upload with vector search and streaming LLM responses",
    abstract:
      "Advanced RAG chatbot allowing document uploads with context-aware responses.",
    domain: "AI/ML",
    branch: "AI/ML",
    difficulty: "Advanced",
    hasKit: true,
    featured: true,
    techStack: ["Python", "LangChain", "OpenAI", "Vector DB"],
    estimatedTime: "4 weeks",
    rating: 4.9,
    reviews: 42,
    downloads: 567,
    views: 2100,
    author: "AI Research Team",
    durationWeeks: 4,
    modules: ["Document Processing", "Vector Embeddings", "RAG Pipeline"],
    requirements: ["Python 3.9+", "OpenAI API key", "4GB RAM"],
    githubLink: "https://github.com/fyp-hub/rag-chatbot",
  },
  {
    id: 14,
    name: "AI-Powered Disease Prediction Platform",
    description:
      "Multi-disease prediction with SHAP explanations and role-based access",
    abstract:
      "Healthcare platform predicting chronic diseases using ensemble ML.",
    domain: "Healthcare",
    branch: "Healthcare",
    difficulty: "Advanced",
    hasKit: true,
    featured: true,
    techStack: ["Python", "XGBoost", "SHAP", "Django"],
    estimatedTime: "4-5 weeks",
    rating: 4.8,
    reviews: 32,
    downloads: 456,
    views: 1720,
    author: "Healthcare AI Lab",
    durationWeeks: 4,
    modules: ["Disease Models", "Feature Engineering", "SHAP Integration"],
    requirements: ["Python 3.8+", "Django 3.0+", "XGBoost", "4GB RAM"],
    githubLink: "https://github.com/fyp-hub/disease-prediction",
  },
  {
    id: 20,
    name: "Real-Time Fraud Detection Engine",
    description:
      "Stream credit card transactions with Isolation Forest + XGBoost ensemble",
    abstract: "Real-time fraud detection using ensemble ML on streaming data.",
    domain: "Finance",
    branch: "Finance",
    difficulty: "Advanced",
    hasKit: true,
    featured: true,
    techStack: ["Python", "Kafka", "XGBoost", "Flask"],
    estimatedTime: "4-5 weeks",
    rating: 4.9,
    reviews: 38,
    downloads: 534,
    views: 2045,
    author: "FinTech Security Lab",
    durationWeeks: 4,
    modules: ["Kafka Integration", "Model Ensemble", "Real-time Processing"],
    requirements: ["Python 3.8+", "Kafka", "XGBoost", "4GB RAM"],
    githubLink: "https://github.com/fyp-hub/fraud-detection",
  },
];

export const domains = [
  "AI/ML",
  "Healthcare",
  "Finance",
  "Web Dev",
  "IoT",
  "Blockchain",
  "Mobile",
  "Data Science",
];

export const stats = [
  { value: 500, label: "Projects", suffix: "+" },
  { value: 50, label: "Domains", suffix: "+" },
  { value: 100, label: "Unique Ideas", suffix: "%" },
  { value: 48, label: "Success Rate", suffix: "%" },
];

export const testimonials = [
  {
    name: "Priya Kumar",
    role: "Computer Science Student",
    content:
      "FYP Hub helped me choose the perfect project. Saved weeks of research!",
    avatar: "PK",
  },
  {
    name: "Arjun Singh",
    role: "IT Student",
    content:
      "Incredibly detailed AI/ML projects. Built a complete chatbot using FYP resources.",
    avatar: "AS",
  },
  {
    name: "Neha Patel",
    role: "Engineering Student",
    content:
      "Complete project kits with code, docs, and templates made FYP smooth and successful.",
    avatar: "NP",
  },
  {
    name: "Rahul Verma",
    role: "CS Grad",
    content:
      "Got an A+ with the healthcare project. Structure and guidance invaluable!",
    avatar: "RV",
  },
];
