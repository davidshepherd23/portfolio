import React from "react";
import { MdOutlineWork } from "react-icons/md";
import { SiGooglecloud } from "react-icons/si";
import { RiGraduationCapFill, RiRocket2Fill } from "react-icons/ri";
import { FaHandshake, FaHome } from "react-icons/fa";
import paraImg from "@/public/para.webp";
import shopSmartImg from "@/public/shopsmart.png";
import speakerzImg from "@/public/speakerz.png";
import digustaImg from "@/public/digusta.png";
import mentalHealthSiteImg from "@/public/mental_health_site.png";
import momentumMoatImg from "@/public/momentum-moat.webp";
import rentswapSiteImg from "@/public/rentswap-site.webp";
import andysSiteImg from "@/public/andys-site.webp";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Work", hash: "#work" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const contact = {
  email: "davidshepherd23@protonmail.com",
  linkedin: "https://www.linkedin.com/in/davidjuhasz23/",
  github: "https://github.com/davidshepherd23",
} as const;

export const statsData = [
  { value: "1 exit", label: "RentSwap, acquired by a competitor" },
  { value: "1000s", label: "users reached with RentSwap" },
  { value: "100+", label: "short videos made for growth" },
  { value: "5 yrs", label: "building with AI and cloud" },
] as const;

export const servicesData = [
  {
    title: "Strategy",
    description:
      "A clear, prioritised plan for where AI actually moves the needle.",
  },
  {
    title: "Implementation",
    description: "I build the systems, not just recommend them.",
  },
  {
    title: "Training",
    description: "Your team learns to run it, so the adoption sticks.",
  },
] as const;

export type FeaturedProject = {
  title: string;
  role: string;
  period: string;
  badge?: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  image?: typeof momentumMoatImg;
  /** "browser": a full-width website screenshot in a browser frame */
  frame?: "browser";
  imageBg?: string;
  url?: string;
  link?: { label: string; href: string };
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    title: "Momentum Moat",
    role: "Founder",
    period: "Nov 2025 – now",
    badge: "Current",
    description:
      "An AI transformation firm for high-growth Dutch SMEs. Sharp AI strategy paired with hands-on engineering that ships. No 200-slide decks, no six-month diagnostics.",
    highlights: [
      "Strategy, implementation and training, together from day one",
      "Human-focused AI systems teams actually use, not demos that collect dust",
    ],
    tags: ["AI Strategy", "AI Adoption", "Automation", "Claude", "n8n"],
    image: momentumMoatImg,
    imageBg: "#f6f2e7",
  },
  {
    title: "RentSwap",
    role: "Founder",
    period: "Aug 2024 – Aug 2025",
    badge: "Acquired",
    description:
      "Connected home-seekers with moving-out tenants: a community-based way through the Dutch rental housing crisis. Built alone, from my own problem, and sold to a competitor.",
    highlights: [
      "Thousands of users and WhatsApp communities that are still active",
      "100+ short-form videos; landing page converted at 50%+ at launch",
      "Negotiated the acquisition with competitors",
    ],
    tags: ["Founder", "Growth", "Short-form Video", "Landing Pages", "Community"],
    image: rentswapSiteImg,
    frame: "browser",
    url: "rentswap.nl",
  },
  {
    title: "Andy's Accent School",
    role: "Founding Director, Partnerships & BD",
    period: "Dec 2025 – May 2026",
    description:
      "Helping professionals and global teams win more deals and keep more clients through accent clarity training.",
    highlights: [
      "Built the landing page, still live",
      "Customer discovery calls with large organisations in the US, Singapore and Dubai",
    ],
    tags: ["Business Development", "B2B Outreach", "Landing Page", "Sales"],
    image: andysSiteImg,
    frame: "browser",
    url: "andysaccentschool.com",
  },
  {
    title: "PARA",
    role: "AI Engineer · Deutsche Telekom",
    period: "2021 – 2022",
    description:
      "Predictive and Adaptive Road Analyzer: surveying and analysing public roads with nothing more than a smartphone and computer vision.",
    highlights: ["Computer vision and ML pipeline for road infrastructure mapping"],
    tags: ["Computer Vision", "PyTorch", "OpenCV", "Python"],
    image: paraImg,
    imageBg: "#0f1a14",
    link: {
      label: "Read the story",
      href: "https://www.deutschetelekomitsolutions.hu/en/news/para-helps-to-map-the-road-infrastructure/",
    },
  },
];

export const earlierProjects = [
  {
    title: "ShopSmart",
    description:
      "Recipes built from discounted items in shops near you, to plan your next meal.",
    tags: ["Product", "User Research", "UX/UI"],
    image: shopSmartImg,
  },
  {
    title: "Speakerz",
    description:
      "Connect your phone with friends' phones and use them as one stereo speaker system.",
    tags: ["Product", "Android"],
    image: speakerzImg,
  },
  {
    title: "DiGusta",
    description:
      "A modern menu interface for restaurants that avoids misunderstandings at the table.",
    tags: ["Product", "Android", "AR"],
    image: digustaImg,
  },
  {
    title: "PsychAI",
    description: "Landing page for a mental health support AI bot.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: mentalHealthSiteImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Founder · AI Strategy, Development & Implementation",
    location: "Momentum Moat · Rotterdam",
    description:
      "AI transformation firm for high-growth Dutch SMEs. Strategy, implementation and training, together from day one.",
    icon: React.createElement(RiRocket2Fill),
    date: "Nov 2025 – Present",
  },
  {
    title: "Founding Director of Strategic Partnerships & BD",
    location: "Andy's Accent School · Remote, part-time",
    description:
      "Helping professionals and global teams win more deals and keep more clients through accent clarity training.",
    icon: React.createElement(FaHandshake),
    date: "Dec 2025 – May 2026",
  },
  {
    title: "Founder (Acquired)",
    location: "RentSwap · Rotterdam",
    description:
      "Helped home-seekers secure rental homes by connecting them with moving-out tenants. A community-based housing solution for the Dutch market.",
    icon: React.createElement(FaHome),
    date: "Aug 2024 – Aug 2025",
  },
  {
    title: "Solution Engineer",
    location: "Deutsche Telekom IT Solutions HU · Budapest",
    description:
      "Designed cloud solutions for the German market in a team of 20. Google Cloud Certified Associate Cloud Engineer.",
    icon: React.createElement(SiGooglecloud),
    date: "Jul 2022 – Oct 2023",
  },
  {
    title: "AI Engineer",
    location: "Deutsche Telekom · Budapest, part-time",
    description:
      "Hands-on computer vision and machine learning on PARA, mapping road infrastructure from a smartphone.",
    icon: React.createElement(MdOutlineWork),
    date: "Oct 2021 – Jul 2022",
  },
  {
    title: "BSc Computer Science",
    location: "Eötvös Loránd University · Budapest",
    description: "Software developer track.",
    icon: React.createElement(RiGraduationCapFill),
    date: "2019 – 2022",
  },
] as const;

export const skillsData = [
  "AI Strategy",
  "AI Adoption",
  "LLM Evals",
  "Prompt & Agent Design",
  "Claude / Claude Code",
  "n8n",
  "Business Development",
  "Go-to-Market",
  "Landing Pages",
  "Short-form Video",
  "Product Management",
  "TypeScript",
  "React / Next.js",
  "Python",
  "SQL",
  "Google Cloud",
  "Computer Vision",
] as const;
