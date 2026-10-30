import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[9rem] items-center justify-center gap-2 rounded-full bg-ink
      font-medium text-white outline-none transition-all hover:scale-105 hover:bg-moss focus:scale-105 active:scale-100
      disabled:scale-100 disabled:opacity-65 dark:bg-lime dark:text-ink"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{" "}
        </>
      )}
    </button>
  );
}
