import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { SiGooglecloud } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import mlImage from "@/public/ml.png";
import shopSmartImg from "@/public/shopsmart.png";
import speakerzImg from "@/public/speakerz.png";
import digustaImg from "@/public/digusta.png";
import portfolioImg from "@/public/portfolio_site.png";
import mentalHealthSiteImg from "@/public/mental_health_site.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science BSc",
    location: "Eötvös Loránd University (Budapest, Hungary)",
    description: "I graduated in 2022.",
    icon: React.createElement(RiGraduationCapFill),
    date: "2019 - 2022",
  },
  {
    title: "AI Intern",
    location: "Deutsche Telekom IT Solutions HU · Internship",
    description:
      "I gained hands-on experience in AI basics, computer vision, and machine learning in this position.",
    icon: React.createElement(MdOutlineWork),
    date: "Oct 2021 - Jul 2021",
  },
  {
    title: "Solution Engineer / Cloud Engineer",
    location: "Deutsche Telekom IT Solutions HU · Full-time",
    description:
      "As a Solution Engineer, I design cloud solutions for the German market as part of a team of 20 professionals. Holding a Google Cloud Engineer Associate certification, I strive to continuously expand my knowledge through ongoing courses and training.",
    icon: React.createElement(SiGooglecloud),
    date: "Jul 2022 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ShopSmart",
    description:
      "A grocery shopping platform that creates recipes from discounted items from shops near you and helps you plan your next meal.",
    tags: [
      "Product Management",
      "Leadership",
      "Market Analysis",
      "User Researh",
      "Agile Methodology",
      "UX/UI Design",
    ],
    imageUrl: shopSmartImg,
  },
  {
    title: "Speakerz",
    description:
      "Connect your phone with your friend's phone and use them as a stereo speaker system.",
    tags: [
      "Product Management",
      "Leadership",
      "Market Analysis",
      "User Researh",
      "Agile Methodology",
      "Android",
    ],
    imageUrl: speakerzImg,
  },
  {
    title: "DiGusta",
    description:
      "An application for restaurants that provides an easy-to-use modern interface for their menu, therefore creating a better user experience and avoiding misunderstanding.",
    tags: [
      "Product Management",
      "Leadership",
      "Market Analysis",
      "Agile Methodology",
      "Android",
    ],
    imageUrl: digustaImg,
  },
  {
    title: "Para",
    description:
      "Predictive and Adaptive Road Analyzer. Surveying and analysing public roads with the help of a smartphone.",
    tags: [
      "AI",
      "Machine Learning",
      "PyTorch",
      "Panda",
      "Google Colab",
      "OpenCV",
    ],
    imageUrl: mlImage,
  },
  {
    title: "PsychAI - Landing Page",
    description:
      "PsychAI is a mental health support AI BOT. I made a landing page for them.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase"],

    imageUrl: mentalHealthSiteImg,
  },
  {
    title: "Portfolio Website (This Website)",
    description:
      "Showcase my work and experiences (and my React & Next.js skills).",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Email",
      "Vercel",
    ],

    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GCP",
  "Firebase",
  "Redux",
  "SQL",
  "Python",
  "AI",
  "Tensorflow",
  "Machine Learning",
  "GitHub Copilot",
] as const;
