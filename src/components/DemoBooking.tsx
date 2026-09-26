"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CalendarClock, CheckCircle2, Clock } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const slots = ["Mon · 10:00 AM", "Tue · 2:00 PM", "Wed · 11:30 AM", "Thu · 3:00 PM", "Fri · 9:00 AM"];

export default function DemoBooking() {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
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
      email: form.get("email"),
      slot: selectedSlot,
    };

    try {
      const res = await fetch("/api/demo", {
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
    <section id="demo" className="bg-surface-soft px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Live Demo"
          title="See the Rent Management System in action."
          description="Book a 20-minute walkthrough with our team — we'll tailor it to your property portfolio."
          center
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-border-soft bg-surface p-8 shadow-lg shadow-black/5">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 size={40} className="text-emerald-500" />
                <p className="font-display text-lg font-semibold">Demo requested!</p>
                <p className="max-w-sm text-sm text-foreground/60">
                  We&apos;ll confirm your slot ({selectedSlot}) by email or WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
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
                    <label className="text-xs font-medium text-foreground/60">Work email</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="mt-1.5 w-full rounded-xl border border-border-soft bg-surface-soft px-4 py-3 text-sm outline-none focus:border-brand-via"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-foreground/60">
                    <Clock size={14} /> Choose a time slot
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {slots.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                          selectedSlot === slot
                            ? "border-transparent gradient-bg text-white"
                            : "border-border-soft text-foreground/70 hover:border-brand-via/60"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="flex items-start gap-2 rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-500">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!selectedSlot || loading}
                  className="flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-via/30 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <CalendarClock size={16} /> {loading ? "Booking…" : "Confirm Demo Slot"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
