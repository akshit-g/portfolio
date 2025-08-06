import { Project } from '@/types';

export const featuredProjects: Project[] = [
  {
    title: "Serenity Sphere: Mental Health Platform",
    description: "An innovative mental health monitoring platform utilizing advanced technologies such as journal entry analysis and facial expression recognition.",
    github: "https://github.com/akshit-g/serenity-sphere",
    view: "https://serenity-sphere.vercel.app/",
    stack: ["Flask", "Machine Learning"],
    image: [{ url: "/images/project-one.png" }],
  },
  {
    title: "PDF Insight with DistilBERT (QA Chatbot)",
    description: "Extractive question answering from any PDF file using the DistilBERT model, achieving an 87% accuracy rate.",
    github: "https://github.com/akshit-g/pdf-insight",
    view: "https://pdf-insight-demo.com",
    stack: ["Python", "Streamlit", "Machine Learning"],
    image: [{ url: "/images/project-two.png" }],
  },
    {
    title: "Stock Sentiment Analysis from Headlines",
    description: "Forecasted stock prices from Finviz headlines to analyze the stock sentiment with 89% accuracy using ML and forecasting techniques.",
    github: "https://github.com/akshit-g/stock-sentiment",
    view: "https://stock-sentiment-demo.com",
    stack: ["Python", "Streamlit", "Machine Learning"],
    image: [{ url: "/images/project-three.png" }],
  },
  {
    title: "Sensitive Information Blur App (OPEN Community)",
    description: "Guided a team of 6 developers to build an ML web-app to analyze and blur sensitive information in documents.",
    github: "https://github.com/akshit-g/info-blur-app",
    view: "https://info-blur-app-demo.com",
    stack: ["ReactJs", "Python", "Machine Learning"],
    image: [{ url: "/images/project-four.png" }],
  },
];
