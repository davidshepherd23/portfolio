import React from "react";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

export default function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center sm:mb-12">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-balance font-serif text-[2rem] leading-tight sm:text-[2.75rem]">{title}</h2>
    </div>
  );
}
