import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CTALink } from "@/components/ui/CTALink";

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
          <CTALink
            href="/contact"
            variant="secondary"
            size="sm"
            className="mt-6"
            aria-label="Get in touch to stay updated"
          >
            Get in touch to stay updated
          </CTALink>
        </div>
      </div>
    </article>
  );
}
