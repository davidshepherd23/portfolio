"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="fixed inset-x-0 top-0 z-[999] flex justify-center sm:top-6">
      <motion.nav
        aria-label="Main"
        className="flex h-16 w-full items-center justify-center border-b border-black/[0.06] bg-white/80 px-2 shadow-lg shadow-black/[0.03] backdrop-blur-md dark:border-white/10 dark:bg-night/75 sm:h-14 sm:w-auto sm:rounded-full sm:border sm:px-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ul className="flex items-center gap-0.5 text-[0.875rem] font-medium text-gray-500 sm:gap-1 sm:text-[0.9rem]">
          {links.map((link) => (
            <li className="relative" key={link.hash}>
              <Link
                className={clsx(
                  "relative flex h-10 items-center rounded-full px-3 outline-none transition-colors hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-moss dark:text-gray-300 dark:hover:text-white dark:focus-visible:ring-lime sm:px-4",
                  { "text-gray-950 dark:text-white": activeSection === link.name },
                )}
                href={link.hash}
                aria-current={activeSection === link.name ? "true" : undefined}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-lime/70 dark:bg-white/10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
          <li aria-hidden className="mx-1 h-5 w-px bg-black/10 dark:bg-white/15" />
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </motion.nav>
    </header>
  );
}
