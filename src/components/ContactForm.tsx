"use client";

import { FormEvent, useId, useState } from "react";
import { site } from "@/data/site";

type FormState = "idle" | "sent";

export function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const aboutId = useId();
  const messageId = useId();
  const noteId = useId();
  const [state, setState] = useState<FormState>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div
        className="border border-rule bg-paper-deep px-5 py-6"
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-2xl tracking-tight">
          Message captured locally
        </p>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          [PLACEHOLDER] This form does not send email yet. Wire it to Formspree,
          Resend, or your host of choice. Until then, write directly to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <p id={noteId} className="text-sm text-muted">
        [PLACEHOLDER] Submitting stays on this page until you connect a mail
        service. Required fields are marked.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor={nameId} className="text-sm font-medium">
            Name <span className="text-muted">*</span>
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            className="field"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor={emailId} className="text-sm font-medium">
            Email <span className="text-muted">*</span>
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="field"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor={aboutId} className="text-sm font-medium">
          What is this about?
        </label>
        <input
          id={aboutId}
          name="about"
          type="text"
          placeholder="A product, a collaboration, a conversation"
          className="field"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor={messageId} className="text-sm font-medium">
          Message <span className="text-muted">*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          required
          rows={6}
          aria-describedby={noteId}
          className="field resize-y"
        />
      </div>
      <button type="submit" className="button-primary">
        Send a note
      </button>
    </form>
  );
}
