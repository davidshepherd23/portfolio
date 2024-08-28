"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading title={"About"} />

      <p className="mb-3">
        I&apos;m a Hungarian{" "}
        <span className="font-medium">Product Manager</span> living in the
        Netherlands. Focusing on solving meaningful problems in the world via
        software and technology. Navigate challenges with a constant drive for
        innovation and the ability to simplify complex problems into manageable
        steps. Embracing a lifelong learning mindset, continuously striving to
        enhance my skillset with the intention to lay the groundwork for future
        ventures.
      </p>
      <p>
        {" "}
        Gained most of my experience in scrapy/small startup-like environments,
        but I was thriving in an established corporate environment as well.
        I&apos;ve led multiple software projects with small teams in the last 8
        years, and gained a reasonable amount of hands-on experience about
        software project management.
      </p>

      <p>
        After a few years of cloud engineering work, I decided to make a leap
        and seek something that suited me better.{" "}
        <span className="italic">
          I traveled to Asia for 7 months to learn skills and explore my
          personality and virtues in more detail, as well as this part of the
          world.
        </span>
      </p>
    </motion.section>
  );
}
