import { techStack } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function TechStack() {
  return (
    <section id="stack" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technology"
          title="Built on tools proven to scale."
          description="Every system we ship is layered — a clean interface, dependable logic underneath, and data that stays consistent as usage grows."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((layer, i) => (
            <Reveal key={layer.layer} delay={i * 0.08}>
              <div className="card-hover h-full rounded-2xl border border-border-soft bg-surface p-6">
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-brand-via">
                  {layer.layer}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface-soft px-3 py-1.5 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
