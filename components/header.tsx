"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <motion.div //left-1/2 -> Object start from the middle of the screen -> Add -translate-x-1/2 -> Bring object to negative x with half its size -> The object now in the middle
        className="sm:rounded-ful fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none border border-white 
        border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 
        sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ opacity: 0, x: "-50%", y: -100 }}
        animate={{ opacity: 1, x: "-50%", y: 0 }}
        //transition={{ duration: 0.3 }}
      ></motion.div>

      <nav
        className="fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
        //Normally this nav logic would be in <motion.div> above, but it doesn't work.
      >
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
            text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5"
        >
          {links.map((link) => (
            <motion.li
              className="relative flex h-3/4 items-center justify-center"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-gray-950",
                  { "text-gray-950": activeSection === link.name },
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-gray-100"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
