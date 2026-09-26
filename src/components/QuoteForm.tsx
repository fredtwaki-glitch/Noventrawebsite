"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projectTypes = [
  "Rent Management System",
  "School Management System",
  "Hospital Management System",
  "Inventory / POS System",
  "Payroll Solution",
  "Custom Software",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
      phone: form.get("phone"),
      projectType: form.get("projectType"),
      details: form.get("details"),
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Request a Quote"
          title="Tell us what you're building."
          description="Share a few details and we'll get back to you with next steps — usually within one business day."
          center
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-border-soft bg-surface p-8 shadow-lg shadow-black/5">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 size={40} className="text-emerald-500" />
                <p className="font-display text-lg font-semibold">Request received!</p>
                <p className="max-w-sm text-sm text-foreground/60">
                  Thanks for reaching out — our team will contact you shortly by email or WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Full name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Company (optional)</label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Acme Ltd"
                      className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground/60">Phone / WhatsApp</label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="+254 7XX XXX XXX"
                      className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-foreground/60">Project type</label>
                  <select
                    required
                    name="projectType"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                  >
                    <option value="" disabled>
                      Select a project type
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-foreground/60">Project details</label>
                  <textarea
                    required
                    name="details"
                    rows={4}
                    placeholder="Tell us a bit about what you need..."
                    className="mt-1.5 w-full resize-none rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-500">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-via/30 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={16} /> {loading ? "Sending…" : "Send Request"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
