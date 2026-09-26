import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the Noventra Technologies website and services.",
};

export default function TermsPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-via">
          Legal
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Last updated: July 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/70">
          <p>
            This is placeholder content to be reviewed by legal counsel before launch. By
            accessing this website or engaging Noventra Technologies for services, you agree
            to the following terms.
          </p>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Services</h2>
            <p className="mt-2">
              Noventra Technologies provides custom software development, web and mobile
              application development, business process automation, and related services,
              including the Rent Management System product. Specific project scope, timelines
              and pricing are agreed separately in writing for each engagement.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Website Use</h2>
            <p className="mt-2">
              This website is provided for informational purposes. You agree not to misuse the
              site, attempt to gain unauthorised access to our systems, or use content from this
              site without permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Intellectual Property</h2>
            <p className="mt-2">
              All content on this website — including text, graphics, logos and product
              screenshots — is owned by or licensed to Noventra Technologies and may not be
              reproduced without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Limitation of Liability</h2>
            <p className="mt-2">
              Noventra Technologies is not liable for indirect or consequential damages arising
              from the use of this website. Liability related to delivered software services is
              governed by the individual service agreement signed with each client.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Changes to These Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of the website after
              changes are posted constitutes acceptance of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Contact Us</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{" "}
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
