import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { company, portfolio, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-soft bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl gradient-bg text-white text-sm font-bold">
                N
              </span>
              Noventra Technologies
            </Link>
            <p className="mt-4 max-w-sm text-sm text-foreground/60">
              Custom software, web, mobile and cloud solutions — plus our flagship Rent
              Management System — for businesses that want to run on systems, not spreadsheets.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft transition-colors hover:bg-surface"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`mailto:${company.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft transition-colors hover:bg-surface"
              >
                <Mail size={16} />
              </a>
              <a
                href={company.phoneHref}
                aria-label="Call"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border-soft transition-colors hover:bg-surface"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/70">
              <li><Link href="/#product" className="hover:text-foreground">Rent Management System</Link></li>
              <li><Link href="/#portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/#faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/#quote" className="hover:text-foreground">Request a Quote</Link></li>
              <li><Link href="/#contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.title} className="hover:text-foreground">{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground/50">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-foreground/70">
              {portfolio.slice(0, 6).map((p) => (
                <li key={p.name} className="hover:text-foreground">{p.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border-soft pt-8 text-xs text-foreground/50 sm:flex-row">
          <p>© {year} Noventra Technologies. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
