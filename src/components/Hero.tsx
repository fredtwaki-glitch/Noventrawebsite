"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 lg:px-8 lg:pt-24">
      {/* ambient gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand-from/25 blur-[110px]" />
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-brand-to/25 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-via/20 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium"
          >
            <Sparkles size={14} className="text-signal" />
            Trusted technology partner, worldwide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Smart software that
            <br />
            <span className="gradient-text">runs your business</span>
            <br />
            for you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-foreground/70"
          >
            Noventra Technologies designs secure, scalable software that automates operations
            and accelerates growth — from custom platforms to our flagship{" "}
            <span className="font-semibold text-foreground">Rent Management System</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/#quote"
              className="group inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-via/30 transition-transform hover:scale-105"
            >
              Request a Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#demo"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-105"
            >
              Book a Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-foreground/60"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-via" /> Secure by design
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-brand-to" /> Built to scale
            </span>
            <a href={company.phoneHref} className="font-medium underline underline-offset-4">
              {company.phone}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="glass-strong relative overflow-hidden rounded-3xl p-6 shadow-2xl shadow-black/10">
            <div className="flex items-center justify-between border-b border-border-soft pb-4">
              <div>
                <p className="text-xs font-medium text-foreground/50">Rent Management System</p>
                <p className="font-display text-lg font-semibold">Portfolio Overview</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                Live
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-surface-soft p-4">
                <p className="text-xs text-foreground/50">Monthly Income</p>
                <p className="font-display text-2xl font-bold text-emerald-500">KES 486K</p>
                <p className="mt-1 text-xs text-emerald-500">▲ 12% vs last month</p>
              </div>
              <div className="rounded-2xl bg-surface-soft p-4">
                <p className="text-xs text-foreground/50">Outstanding Balance</p>
                <p className="font-display text-2xl font-bold text-signal">KES 62K</p>
                <p className="mt-1 text-xs text-foreground/50">7 tenants pending</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-surface-soft p-4">
              <div className="flex items-end gap-2" style={{ height: 90 }}>
                {[45, 62, 38, 74, 58, 90, 66].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: "easeOut" }}
                    className={`flex-1 rounded-t-md ${
                      i === 5 ? "bg-signal" : "bg-gradient-to-t from-brand-from to-brand-to"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-foreground/40">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-surface-soft p-4 text-sm">
              <span className="text-foreground/60">Collection rate</span>
              <span className="font-display font-semibold text-brand-via">88%</span>
            </div>
          </div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl glass-strong px-5 py-3 shadow-xl sm:block"
          >
            <p className="text-xs text-foreground/50">Active tenants</p>
            <p className="font-display text-xl font-bold">34</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
