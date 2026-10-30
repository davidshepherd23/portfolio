"use server";

import { validateString, getErrorMessage } from "@/lib/utils";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message. Use less than 5000 characters." };
  }
  if (!process.env.RESEND_API_KEY) {
    return { error: "Contact form is not configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["davidjuhasz23.dev@gmail.com"],
        subject: "Message from your portfolio site",
        reply_to: senderEmail,
        text: `From: ${senderEmail}\n\n${message}`,
        html: `<p>You received a message from your portfolio site.</p>
<p><strong>From:</strong> ${escapeHtml(senderEmail)}</p>
<hr />
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
      }),
    });
    const data = await res.json();
    if (!res.ok) return { error: data?.message ?? `Resend error ${res.status}` };
    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
