import React from "react";

interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

export default function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
    </div>
  );
}
