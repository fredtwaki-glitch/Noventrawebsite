import { CheckCircle2 } from "lucide-react";
import { whyUs } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="bg-surface-soft px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Noventra"
          title="A long-term technology partner, not a one-off vendor."
          center
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07}>
              <div className="card-hover h-full rounded-2xl bg-surface p-6">
                <CheckCircle2 size={20} className="text-brand-via" />
                <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
