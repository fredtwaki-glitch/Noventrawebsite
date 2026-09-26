"use client";

import {
  Code2,
  Globe,
  Monitor,
  Smartphone,
  Workflow,
  Database,
  Plug,
  Cloud,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  Custom: Code2,
  Web: Globe,
  Desktop: Monitor,
  Mobile: Smartphone,
  Automate: Workflow,
  Data: Database,
  API: Plug,
  Cloud: Cloud,
  Support: LifeBuoy,
};

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="One partner, every layer of the system."
          description="From the interface your team touches every day to the database holding it all together, we build and maintain the full stack."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.tag] ?? Code2;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <div className="card-hover group h-full rounded-2xl border border-border-soft bg-surface p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg text-white shadow-md shadow-brand-via/20 transition-transform group-hover:scale-110">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
