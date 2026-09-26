"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { rmsFeatures } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProductShowcase() {
  return (
    <section id="product" className="relative overflow-hidden px-6 py-24 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-surface-soft" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-signal">
            Flagship Product
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Rent Management System
          </h2>
          <p className="mt-4 max-w-lg text-foreground/65">
            A complete platform for landlords and property managers to run their rental
            business from one place — tenants, properties, payments and reports, without
            the paperwork.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {rmsFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-brand-via" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/#demo"
            className="mt-9 inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-via/30 transition-transform hover:scale-105"
          >
            Book a Demo
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass-strong rounded-3xl p-6 shadow-2xl shadow-black/10">
            <div className="flex items-center justify-between border-b border-border-soft pb-4">
              <p className="font-display font-semibold">Tenant Ledger</p>
              <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-medium text-foreground/50">
                34 active
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {[
                { name: "A. Mwangi", unit: "Unit 4B", status: "Paid", tone: "emerald" },
                { name: "J. Otieno", unit: "Unit 2A", status: "Paid", tone: "emerald" },
                { name: "S. Wanjiru", unit: "Unit 7C", status: "Due in 3 days", tone: "amber" },
                { name: "D. Kiprotich", unit: "Unit 1A", status: "Overdue", tone: "rose" },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center justify-between rounded-xl bg-surface-soft px-4 py-3"
                >
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-foreground/50">{t.unit}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      t.tone === "emerald"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : t.tone === "amber"
                        ? "bg-amber-500/10 text-amber-500"
                        : "bg-rose-500/10 text-rose-500"
                    }`}
                  >
                    {t.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
