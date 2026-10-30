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
  "w-full rounded-xl border border-black/10 bg-white px-4 outline-none transition focus:border-moss dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-lime";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading eyebrow="Contact" title="Know AI matters, but lack the firepower?" />

      <p className="-mt-4 text-ink/70 dark:text-white/65">
        Let&apos;s talk. Email me at{" "}
        <a className="font-medium underline underline-offset-4" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>{" "}
        or use the form.
      </p>

      <form
        className="card mt-10 flex flex-col gap-3 p-4 text-left sm:p-6"
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
          placeholder="What are you working on?"
          required
          maxLength={5000}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
