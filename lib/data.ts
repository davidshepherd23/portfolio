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
  { value: "1 exit", label: "RentSwap, first company" },
  { value: "3x", label: "founder" },
  { value: "5 yrs", label: "building with AI and cloud" },
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
      "An AI strategy and implementation firm for high-growth Dutch SMEs.",
    highlights: [
      "Plans, builds and trains teams on AI systems",
    ],
    tags: ["AI Strategy", "AI Adoption", "Automation", "Claude", "n8n"],
    image: momentumMoatImg,
    imageBg: "#f6f2e7",
  },
  {
    title: "Andy's Accent School",
    role: "Founding Director, Partnerships & BD",
    period: "Dec 2025 – May 2026",
    description:
      "Accent training for professionals and global teams. I led partnerships and business development.",
    highlights: [
      "Built the company's landing page",
      "Ran customer discovery with large companies in the US, Singapore and Dubai",
    ],
    tags: ["Business Development", "B2B Outreach", "Landing Page", "Sales"],
    image: andysSiteImg,
    frame: "browser",
    url: "youraccentcoach.com",
    link: { label: "Visit youraccentcoach.com", href: "https://youraccentcoach.com/" },
  },
  {
    title: "RentSwap",
    role: "Founder",
    period: "Aug 2024 – Aug 2025",
    badge: "Acquired",
    description:
      "My first company. Matched home-seekers with tenants moving out in the Dutch rental market. Built solo. Acquired by a competitor.",
    highlights: [
      "Thousands of users",
      "Landing page converted 50%+ of visitors at launch",
      "Grew it with 100+ short-form videos",
      "Negotiated the sale with competing buyers",
    ],
    tags: ["Founder", "Growth", "Short-form Video", "Landing Pages", "Community"],
    image: rentswapSiteImg,
    frame: "browser",
    url: "rentswap.nl",
    link: { label: "Visit rentswap.nl", href: "https://www.rentswap.nl/" },
  },
  {
    title: "PARA",
    role: "AI Engineer · Deutsche Telekom",
    period: "2021 – 2022",
    description:
      "Predictive and Adaptive Road Analyzer. Surveys public roads with a smartphone camera and computer vision.",
    highlights: ["Built at Deutsche Telekom IT Solutions"],
    tags: ["Computer Vision", "PyTorch", "OpenCV", "Python"],
    image: paraImg,
    imageBg: "#0f1a14",
    link: {
      label: "Deutsche Telekom article",
      href: "https://www.deutschetelekomitsolutions.hu/en/news/para-helps-to-map-the-road-infrastructure/",
    },
  },
];

export const earlierProjects = [
  {
    title: "ShopSmart",
    description:
      "Plans meals from discounted groceries in shops near you.",
    tags: ["Product", "User Research", "UX/UI"],
    image: shopSmartImg,
  },
  {
    title: "Speakerz",
    description:
      "Turns several phones into one stereo speaker system.",
    tags: ["Product", "Android"],
    image: speakerzImg,
  },
  {
    title: "DiGusta",
    description:
      "Digital restaurant menus that cut ordering mistakes.",
    tags: ["Product", "Android", "AR"],
    image: digustaImg,
  },
  {
    title: "PsychAI",
    description: "Landing page for a mental health AI chatbot.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: mentalHealthSiteImg,
  },
] as const;

export const experiencesData = [
  {
    title: "Founder · AI Strategy, Development & Implementation",
    location: "Momentum Moat · Rotterdam",
    description:
      "AI strategy and implementation firm for high-growth Dutch SMEs.",
    icon: React.createElement(RiRocket2Fill),
    date: "Nov 2025 – Present",
  },
  {
    title: "Founding Director of Strategic Partnerships & BD",
    location: "Andy's Accent School · Remote, part-time",
    description:
      "Accent training for professionals and global teams. Built the landing page and ran B2B customer discovery.",
    icon: React.createElement(FaHandshake),
    date: "Dec 2025 – May 2026",
  },
  {
    title: "Founder (Acquired)",
    location: "RentSwap · Rotterdam",
    description:
      "Matched home-seekers with tenants moving out. Built solo, grew to thousands of users, acquired by a competitor.",
    icon: React.createElement(FaHome),
    date: "Aug 2024 – Aug 2025",
  },
  {
    title: "Solution Engineer",
    location: "Deutsche Telekom IT Solutions HU · Budapest",
    description:
      "Designed cloud solutions for the German market in a 20-person team. Google Cloud certified.",
    icon: React.createElement(SiGooglecloud),
    date: "Jul 2022 – Oct 2023",
  },
  {
    title: "AI Engineer",
    location: "Deutsche Telekom · Budapest, part-time",
    description:
      "Computer vision and machine learning for PARA, which maps roads from a smartphone.",
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

