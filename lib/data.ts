import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiGooglecloud } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import mlImage from "@/public/ml.png";
import shopSmartImg from "@/public/shopsmart.png";
import speakerzImg from "@/public/speakerz.png";
import portfolioImg from "@/public/portfolio_site.png";

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
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "AI Intern",
    location: "Deutsche Telekom IT Solutions HU · Internship",
    description:
      "I gained hands-on experience in AI basics, computer vision, and machine learning in this position.",
    icon: React.createElement(CgWorkAlt),
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
  {
    title: "ShopSmart",
    description:
      "ShopSmart is an online platform for recipe-based grocery shopping.",
    tags: ["React", "Node.js", "MySQL", "Python", "JSON"],
    imageUrl: shopSmartImg,
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
    title: "Speakerz",
    description:
      "Connect your phone with your friend's phone and use them as a stereo speaker system.",
    tags: ["Android", "Android Studio"],
    imageUrl: speakerzImg,
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
  "PostgreSQL",
  "Python",
  "AI",
  "Machine Learning",
  "GitHub Copilot",
] as const;
