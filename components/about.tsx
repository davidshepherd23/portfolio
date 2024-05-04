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
        I&apos;m a 24-year-old{" "}
        <span className="font-medium">solo entrepreneur</span> and{" "}
        <span className="font-medium">web developer</span> from Hungary. My
        primary focus lies in full-stack web development, with{" "}
        <span className="underline">React</span> and{" "}
        <span className="underline">Next.js</span>. I have a degree in{" "}
        <span className="font-medium">Computer Science</span> and two years of
        experience in <span className="font-medium">cloud engineering</span>.
        Additionally, I hold certifications in{" "}
        <span className="italic">Project Management</span> and{" "}
        <span className="italic">Data Analytics</span> from Google,
        complementing my technical expertise with a solid foundation in business
        and startup methodologies. I embrace a lifelong learning mindset,
        continuously striving to enhance my capabilities.
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
