"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="group fixed bottom-7 left-7 flex">
      <button
        className=" flex h-[3rem] w-[3rem] items-center justify-center rounded-full border 
                  border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl 
                  backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] hover:bg-gray-950
                 hover:text-white active:scale-105
                  dark:bg-gray-950 dark:hover:bg-white dark:hover:text-gray-950"
        onClick={toggleTheme}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {theme === "light" && isHovered ? (
          <BsMoon />
        ) : theme === "dark" && isHovered ? (
          <BsSun />
        ) : theme === "dark" ? (
          <BsMoon />
        ) : (
          <BsSun />
        )}
      </button>
      {isHovered && (
        <span
          className="m-2 w-auto min-w-max scale-0 rounded-md bg-white p-2  text-xs
                  shadow-md transition-all duration-100 group-hover:scale-100
                  group-hover:bg-gray-950 group-hover:text-white
                   dark:bg-gray-950 dark:text-white dark:group-hover:bg-white dark:group-hover:text-gray-950"
        >
          {theme === "light" ? "Dark mode" : "Light mode"}
        </span>
      )}
    </div>
  );
}
