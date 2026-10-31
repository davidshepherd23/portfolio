"use client";

import React from "react";
import Image from "next/image";
import PortraitImg from "../public/me.webp";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { contact, statsData } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 w-full max-w-[60rem] scroll-mt-[100rem] sm:mb-32"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween" }}
          className="relative"
        >
          <Image
            src={PortraitImg}
            alt="Portrait of Dávid Juhász"
            width={144}
            height={144}
            priority
            className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl dark:border-white/10 sm:h-36 sm:w-36"
          />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-[0.7rem] font-medium text-white shadow-lg dark:bg-lime dark:text-ink">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-lime align-middle dark:bg-moss" />
            Rotterdam, NL
          </span>
        </motion.div>

        <motion.p
          className="eyebrow mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          Dávid Juhász · Founder, Momentum Moat
        </motion.p>

        <motion.h1
          className="mt-4 max-w-[46rem] text-balance font-serif text-[2.25rem] leading-[1.1] min-[400px]:text-[2.5rem] tracking-tight sm:text-[3.5rem] lg:text-[4rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          I build <em className="whitespace-nowrap text-moss dark:text-lime">human‑focused</em> AI
          systems your team actually uses.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-[36rem] text-base leading-relaxed text-ink/70 dark:text-white/65 sm:mt-6 sm:text-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          AI strategy and implementation partner for Dutch SMEs. Computer
          science grad, ex-Deutsche Telekom AI and cloud engineer, and a founder
          who took a product from zero to acquisition.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="btn btn-primary group"
          >
            Let&apos;s talk
            <BsArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#work"
            className="btn btn-secondary"
          >
            See my work
          </Link>
          <div className="flex basis-full justify-center gap-3 sm:basis-auto">
            <a
              aria-label="LinkedIn"
              className="icon-btn"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              aria-label="GitHub"
              className="icon-btn"
              href={contact.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.dl
        className="card mx-auto mt-12 grid max-w-[40rem] grid-cols-3 divide-x divide-black/[0.06] overflow-hidden dark:divide-white/10 sm:mt-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {statsData.map((s) => (
          <div key={s.label} className="px-2 py-5 text-center sm:px-5 sm:py-6">
            <dt className="font-serif text-3xl text-ink dark:text-white sm:text-4xl">
              {s.value}
            </dt>
            <dd className="mt-1 text-xs leading-snug text-ink/60 dark:text-white/55 sm:text-sm">
              {s.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
