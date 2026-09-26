import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-surface-soft px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the system your business needs."
          description="Reach out directly, or send a quote request above — we typically respond within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-4">
            <a
              href={company.phoneHref}
              className="card-hover flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-bg text-white">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-xs text-foreground/50">Call / WhatsApp</p>
                <p className="font-display font-semibold">{company.phone}</p>
              </div>
            </a>

            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-bg text-white">
                <MessageCircle size={18} />
              </span>
              <div>
                <p className="text-xs text-foreground/50">Chat on WhatsApp</p>
                <p className="font-display font-semibold">Start a conversation</p>
              </div>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="card-hover flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-bg text-white">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-foreground/50">Email</p>
                <p className="font-display font-semibold">{company.email}</p>
                <p className="text-xs text-foreground/50">{company.emailAlt}</p>
              </div>
            </a>

            <div className="card-hover flex items-center gap-4 rounded-2xl border border-border-soft bg-surface p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full gradient-bg text-white">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-foreground/50">Location</p>
                <p className="font-display font-semibold">{company.location}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex h-full min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-border-soft bg-surface">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--border-soft) 1px, transparent 1px), linear-gradient(90deg, var(--border-soft) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full gradient-bg text-white">
                  <MapPin size={20} />
                </span>
                <p className="font-display font-semibold">Google Maps</p>
                <p className="max-w-xs text-sm text-foreground/50">
                  We work with clients globally and remotely. Map embed will go here once a
                  primary office location is confirmed.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
