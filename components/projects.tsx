"use client";
import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { earlierProjects, featuredProjects } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.1);

  return (
    <section ref={ref} id="work" className="mb-28 w-full max-w-[60rem] scroll-mt-28 sm:mb-36">
      <SectionHeading eyebrow="Selected work" title="What I've built" />

      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <Project key={p.title} project={p} index={i} />
        ))}
      </div>

      <h3 className="mb-5 mt-20 text-center font-serif text-3xl">Earlier projects</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {earlierProjects.map((p) => (
          <article key={p.title} className="card group flex gap-4 overflow-hidden p-4">
            <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-black/5">
              <Image
                src={p.image}
                alt={`${p.title} screenshot`}
                fill
                sizes="8rem"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="mt-1 text-sm leading-snug text-ink/65 dark:text-white/60">
                {p.description}
              </p>
              <p className="mt-2 text-xs text-ink/45 dark:text-white/40">
                {p.tags.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
