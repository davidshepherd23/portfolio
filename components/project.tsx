"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsCheck2 } from "react-icons/bs";
import clsx from "clsx";
import type { FeaturedProject } from "@/lib/data";

function Details({ project }: { project: FeaturedProject }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 text-sm text-ink/55 dark:text-white/50">
        <span>{project.period}</span>
        {project.badge && (
          <span className="rounded-full bg-lime px-2.5 py-0.5 text-xs font-semibold text-ink">
            {project.badge}
          </span>
        )}
      </div>
      <h3 className="mt-3 font-serif text-3xl leading-tight sm:text-[2.1rem]">
        {project.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-moss dark:text-lime">{project.role}</p>
      <p className="mt-4 leading-relaxed text-ink/70 dark:text-white/65">
        {project.description}
      </p>
    </>
  );
}

function Highlights({ project }: { project: FeaturedProject }) {
  return (
    <>
      <ul className="space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink/80 dark:text-white/75">
            <BsCheck2 className="mt-0.5 shrink-0 text-moss dark:text-lime" />
            {h}
          </li>
        ))}
      </ul>
      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      {project.link && (
        <a
          href={project.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline dark:text-white"
        >
          {project.link.label} <BsArrowUpRight />
        </a>
      )}
    </>
  );
}

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

export default function Project({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  if (project.frame === "browser" && project.image) {
    return (
      <motion.article {...reveal} className="card group overflow-hidden">
        <div className="bg-[#eceae3] px-3 pt-3 dark:bg-white/[0.06] sm:px-6 sm:pt-6">
          <div className="overflow-hidden rounded-t-xl border border-b-0 border-black/10 bg-white shadow-xl dark:border-white/10">
            <div className="flex items-center gap-2 border-b border-black/[0.06] bg-[#f6f6f4] px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              {project.url && (
                <span className="ml-3 truncate rounded-md bg-white px-3 py-0.5 text-xs text-ink/50">
                  {project.url}
                </span>
              )}
            </div>
            <Image
              src={project.image}
              alt={`${project.title} website`}
              sizes="(min-width: 640px) 56rem, 100vw"
              className="h-auto w-full transition duration-700 group-hover:scale-[1.015]"
            />
          </div>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2 sm:gap-10 sm:p-9">
          <div>
            <Details project={project} />
          </div>
          <div className="sm:pt-8">
            <Highlights project={project} />
          </div>
        </div>
      </motion.article>
    );
  }

  const flip = index % 2 === 1;
  return (
    <motion.article {...reveal} className="card group overflow-hidden">
      <div className={clsx("grid sm:grid-cols-2", flip && "sm:[direction:rtl]")}>
        <div className="flex flex-col p-6 [direction:ltr] sm:p-9">
          <Details project={project} />
          <div className="mt-4">
            <Highlights project={project} />
          </div>
        </div>
        <div
          className="relative aspect-[5/4] overflow-hidden [direction:ltr] sm:aspect-auto sm:min-h-[24rem]"
          style={{ backgroundColor: project.imageBg }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} visual`}
              fill
              sizes="(min-width: 640px) 30rem, 100vw"
              className={clsx(
                "transition duration-500 group-hover:scale-[1.04]",
                project.imageBg ? "object-contain" : "object-cover",
              )}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}
