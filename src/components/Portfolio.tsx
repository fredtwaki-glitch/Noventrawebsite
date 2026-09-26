"use client";

import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const gradients = [
  "from-brand-from to-brand-via",
  "from-brand-via to-brand-to",
  "from-brand-to to-brand-from",
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Systems built for real businesses."
          description="A look at the kinds of platforms we design and build — including our flagship product."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 0.08}>
              <div className="card-hover group h-full overflow-hidden rounded-2xl border border-border-soft bg-surface">
                <div
                  className={`flex h-32 items-center justify-center bg-gradient-to-br ${
                    gradients[i % gradients.length]
                  }`}
                >
                  <span className="font-display text-4xl font-bold text-white/25">
                    {project.name.charAt(0)}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-via">
                    {project.category}
                  </p>
                  <h3 className="mt-2 flex items-center gap-1.5 font-display text-lg font-semibold">
                    {project.name}
                    <ArrowUpRight
                      size={16}
                      className="text-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-via"
                    />
                  </h3>
                  <p className="mt-2 text-sm text-foreground/60">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
