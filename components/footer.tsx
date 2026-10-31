import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-ink/45 dark:text-white/40">
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Dávid Juhász
      </small>
    </footer>
  );
}
