import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ideas on software, automation and growth from the Noventra Technologies team.",
};

const gradients = ["from-brand-from to-brand-via", "from-brand-via to-brand-to", "from-brand-to to-brand-from"];

export default function BlogPage() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-via">
            Blog
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ideas on software, automation &amp; growth.
          </h1>
          <p className="mt-4 text-foreground/65">
            We&apos;re building out our blog with practical guidance for business owners
            thinking about their next system. Posts are coming soon — in the meantime,
            here&apos;s what to expect.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="card-hover h-full overflow-hidden rounded-2xl border border-border-soft bg-surface">
                <div className={`h-32 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div className="p-6">
                  <p className="text-xs font-medium text-foreground/40">{post.date}</p>
                  <h2 className="mt-2 font-display text-base font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/60">{post.excerpt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
