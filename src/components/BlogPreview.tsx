import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const gradients = ["from-brand-from to-brand-via", "from-brand-via to-brand-to", "from-brand-to to-brand-from"];

export default function BlogPreview() {
  return (
    <section id="blog" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="From the Blog"
            title="Ideas on software, automation & growth."
            description="Practical notes for business owners thinking about their next system."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-via hover:underline"
          >
            View all posts <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <div className="card-hover h-full overflow-hidden rounded-2xl border border-border-soft bg-surface">
                <div className={`h-28 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                <div className="p-6">
                  <p className="text-xs font-medium text-foreground/40">{post.date}</p>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug">
                    {post.title}
                  </h3>
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
