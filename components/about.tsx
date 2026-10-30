"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { servicesData, skillsData } from "@/lib/data";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);

  return (
    <section
      ref={ref}
      id="about"
      className="mb-28 w-full max-w-[60rem] scroll-mt-28 sm:mb-36"
    >
      <SectionHeading eyebrow="About" title="Technical enough to build. Commercial enough to sell." />

      <motion.div
        className="mx-auto max-w-[42rem] space-y-4 text-center text-lg leading-relaxed text-ink/75 dark:text-white/70"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p>
          I&apos;m a Hungarian entrepreneur living in Rotterdam. I studied
          computer science, then spent two years on AI and cloud at Deutsche
          Telekom.
        </p>
        <p>
          Since 2024 I&apos;ve been building businesses: RentSwap, which was
          acquired, partnerships at Andy&apos;s Accent School, and now{" "}
          <span className="font-medium text-ink dark:text-white">
            Momentum Moat
          </span>
          , where I help scaling companies that know AI matters but don&apos;t
          have the internal firepower to make it happen.
        </p>
        <p>
          What I enjoy most is talking to customers, finding what they actually
          need, and turning complex processes into simple systems people use.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {servicesData.map((s, i) => (
          <motion.div
            key={s.title}
            className="card p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i }}
          >
            <p className="font-serif text-2xl text-moss dark:text-lime">
              0{i + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-ink/65 dark:text-white/60">
              {s.description}
            </p>
          </motion.div>
        ))}
      </div>

      <ul className="mx-auto mt-10 flex max-w-[48rem] flex-wrap justify-center gap-2">
        {skillsData.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
