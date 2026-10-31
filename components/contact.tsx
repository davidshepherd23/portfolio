"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";
import { contact } from "@/lib/data";

const field =
  "w-full rounded-xl border border-black/15 bg-white px-4 text-base outline-none transition-colors placeholder:text-ink/45 focus:border-moss focus:ring-2 focus:ring-moss/20 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-lime dark:focus:ring-lime/20";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-full max-w-[38rem] scroll-mt-28 text-center sm:mb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading title="Contact" />

      <p className="-mt-4 text-ink/70 dark:text-white/65">
        Email me at{" "}
        <a className="rounded font-medium underline underline-offset-4 outline-none transition-colors hover:text-moss focus-visible:ring-2 focus-visible:ring-moss dark:hover:text-lime" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>{" "}
        or use the form.
      </p>

      <form
        className="card mt-8 flex flex-col gap-3 p-4 text-left sm:mt-10 sm:p-6"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error("Something went wrong. Please email me directly.");
            return;
          }
          toast.success("Message sent. I'll get back to you soon.");
        }}
      >
        <input
          className={`${field} h-14`}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className={`${field} h-44 py-4`}
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
