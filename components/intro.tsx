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
          className="mt-4 max-w-[48rem] font-serif text-[2.6rem] leading-[1.05] tracking-tight sm:text-[4.25rem]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          I build <em className="text-moss dark:text-lime">human-focused</em> AI
          systems your team actually uses.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-[38rem] text-lg leading-relaxed text-ink/70 dark:text-white/65"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          AI strategy and implementation partner for Dutch SMEs. Computer
          science grad, ex-Deutsche Telekom AI and cloud engineer, and a founder
          who took a product from zero to acquisition.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-medium text-white outline-none transition hover:scale-[1.03] hover:bg-moss focus:scale-[1.03] active:scale-100 dark:bg-lime dark:text-ink dark:hover:bg-white"
          >
            Let&apos;s talk
            <BsArrowRight className="transition group-hover:translate-x-1" />
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-black/10 bg-white px-7 py-3 font-medium outline-none transition hover:scale-[1.03] focus:scale-[1.03] dark:border-white/10 dark:bg-white/5"
          >
            See my work
          </Link>
          <div className="flex gap-3">
            <a
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-ink/70 transition hover:scale-110 hover:text-ink dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-ink/70 transition hover:scale-110 hover:text-ink dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
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
        className="card mt-16 grid grid-cols-2 divide-black/[0.06] overflow-hidden dark:divide-white/10 sm:grid-cols-4 sm:divide-x"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {statsData.map((s) => (
          <div key={s.label} className="px-5 py-6 text-center">
            <dt className="font-serif text-4xl text-ink dark:text-white">
              {s.value}
            </dt>
            <dd className="mt-1 text-sm leading-snug text-ink/60 dark:text-white/55">
              {s.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
