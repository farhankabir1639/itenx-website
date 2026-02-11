import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on technology, software development, and digital transformation from itenx technologies limited.",
  openGraph: {
    title: "Blog | itenx",
    description:
      "Technology insights and thought leadership from itenx.",
  },
};

export default function BlogPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Blog"
          description="Insights on technology, software development, and digital transformation."
        />

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
          <p className="text-slate-400">
            Coming soon. Subscribe or check back for articles on technology,
            engineering, and digital innovation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-[#00D8FF] hover:underline"
          >
            Get in touch to stay updated
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
