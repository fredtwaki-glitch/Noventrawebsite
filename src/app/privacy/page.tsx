import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Noventra Technologies collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-via">
          Legal
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Last updated: July 2026</p>

        <div className="prose-neutral mt-10 space-y-8 text-sm leading-relaxed text-foreground/70">
          <p>
            This is placeholder content to be reviewed by legal counsel before launch.
            Noventra Technologies (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your
            privacy and is committed to protecting the personal information you share with us
            through this website.
          </p>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Information We Collect</h2>
            <p className="mt-2">
              We may collect information you provide directly, such as your name, email address,
              phone number, and project details, when you submit a contact form, request a
              quote, book a demo, or subscribe to our newsletter. We may also collect standard
              technical information such as browser type and pages visited, via cookies and
              similar technologies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">How We Use Your Information</h2>
            <p className="mt-2">
              We use the information you provide to respond to inquiries, prepare quotes,
              schedule demos, deliver services, and — where you&apos;ve opted in — send
              occasional product updates. We do not sell your personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Cookies</h2>
            <p className="mt-2">
              We use cookies to improve site functionality and understand how visitors use our
              website. You can control cookie preferences through the banner shown on your
              first visit, or through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Data Retention &amp; Security</h2>
            <p className="mt-2">
              We retain personal information only as long as necessary to fulfil the purposes
              described in this policy, and we apply reasonable technical and organisational
              measures to protect it against unauthorised access.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal
              information at any time by contacting us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact Us</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${company.email}`} className="font-medium underline underline-offset-2">
                {company.email}
              </a>{" "}
              or via WhatsApp at {company.phone}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
