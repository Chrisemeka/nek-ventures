"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/site.config";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const contact = siteConfig.sections.contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!contact.enabled) return null;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="px-6 py-24 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {contact.heading}
          </h2>
          <p className="text-foreground/70">{contact.subheading}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground/70 hover:text-primary">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Phone</p>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-foreground/70 hover:text-primary">
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-foreground/70">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city},{" "}
                {siteConfig.contact.address.state}
              </p>
            </div>
            {siteConfig.contact.hours.length > 0 && (
              <div>
                <p className="font-semibold text-foreground">Hours</p>
                <ul className="text-foreground/70">
                  {siteConfig.contact.hours.map((h) => (
                    <li key={h.day}>
                      {h.day}: {h.open}–{h.close}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={inputClass}
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can we help?"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className={inputClass}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-primary">Thanks — we&apos;ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}