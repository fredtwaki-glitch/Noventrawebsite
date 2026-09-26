import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { company } from "@/lib/data";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-24 lg:px-8">
      <div className="relative mx-auto max-w-lg text-center">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-via/20 blur-[100px]" />
        </div>

        <p className="font-display gradient-text text-7xl font-bold">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">This page took a wrong turn.</h1>
        <p className="mt-3 text-sm text-foreground/60">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
          you back on track.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-via/30 transition-transform hover:scale-105"
          >
            <Home size={16} /> Back to home
          </Link>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border-soft px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
          >
            <MessageCircle size={16} /> Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
