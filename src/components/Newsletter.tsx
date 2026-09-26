"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, Mail, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
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
    <section className="px-6 py-20 lg:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl gradient-bg px-8 py-14 text-center text-white sm:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <Mail size={28} className="mx-auto text-white/80" />
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            Get product updates &amp; tech insights
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/80">
            Occasional emails about new features on the Rent Management System and practical
            software tips for growing businesses. No spam.
          </p>

          {submitted ? (
            <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-medium">
              <CheckCircle2 size={18} /> You&apos;re subscribed — thank you!
            </div>
          ) : (
            <div className="mx-auto mt-7 max-w-md">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 outline-none focus:border-white/70"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-via transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
              {error && (
                <div className="mt-3 flex items-start justify-center gap-2 text-sm text-white/90">
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
