"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  return (
    <section ref={ref} id="experience" className="mb-28 w-full max-w-[44rem] scroll-mt-28 sm:mb-36">
      <SectionHeading eyebrow="Experience" title="The road so far" />
      <ol className="relative ml-4 border-l border-[color:var(--line-color)]">
        {experiencesData.map((item, i) => (
          <motion.li
            key={item.title}
            className="relative mb-6 pl-10 last:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 * i }}
          >
            <span className="absolute -left-[1.15rem] top-4 flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white text-moss shadow-sm dark:border-white/10 dark:bg-night dark:text-lime">
              {item.icon}
            </span>
            <div className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink/45 dark:text-white/40">
                {item.date}
              </p>
              <h3 className="mt-1 font-semibold leading-snug">{item.title}</h3>
              <p className="text-sm text-moss dark:text-lime">{item.location}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-white/65">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
