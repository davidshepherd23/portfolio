"use client";

import React from "react";
import Image from "next/image";
import PortraitImg from "../public/me.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
            }}
          >
            <Image
              src={PortraitImg}
              alt="Portrait image"
              width="192"
              height="192"
              quality="75"
              priority
              className="h-40 w-40 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m David! </span>
        I&apos;m a <span className="font-bold">Product Manager </span>
        with a <span className="italic">Software Developer </span>
        background and a{" "}
        <span className="underline">Computer Science Degree</span>
        {"."}
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{}}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white 
          outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/CV_David_Juhasz.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 
          outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10
          dark:hover:text-white"
        >
          Download CV <HiDownload className="opacity-70 transition " />{" "}
        </a>
        <div className="felx-row mt-5 flex justify-around gap-10 sm:mt-0 sm:gap-4">
          <a
            className="flex h-[3rem] w-[3rem] items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 
          text-gray-700 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] 
          active:scale-105 dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
            href="https://www.linkedin.com/in/davidjuhasz23/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="flex h-[3rem] w-[3rem] items-center justify-center gap-2 rounded-full border border-black/10 bg-white p-4 text-[1.35rem] 
          text-gray-700 hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 
          dark:bg-white/10 dark:text-white/70 dark:hover:text-white"
            href="https://github.com/davidshepherd23"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
