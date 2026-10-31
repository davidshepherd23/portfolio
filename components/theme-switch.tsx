"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const label = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  return (
    <button
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 outline-none transition-colors hover:bg-black/[0.05] hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-moss dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-lime"
    >
      {theme === "light" ? <BsMoon /> : <BsSun />}
    </button>
  );
}
