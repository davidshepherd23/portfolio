"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading title={"About"} />

      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Maxime cupiditate, nisi
        assumenda nobis eius esse rerum deserunt delectus soluta fugiat
        consequatur omnis id, molestiae porro quos corporis sint labore aperiam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Maxime cupiditate, nisi
        assumenda nobis eius esse rerum deserunt delectus soluta fugiat
        consequatur omnis id, molestiae porro quos corporis sint labore aperiam!
      </p>
    </motion.section>
  );
}
