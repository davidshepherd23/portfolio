import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary group mt-1 w-full sm:w-auto sm:min-w-[8.5rem] sm:self-end"
      disabled={pending}
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          Send
          <FaPaperPlane className="text-xs opacity-80 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
