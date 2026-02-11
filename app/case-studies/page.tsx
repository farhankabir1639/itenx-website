import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import CaseStudiesPageContent from "@/components/case-studies/CaseStudiesPageContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real impact for real clients. FinTech platforms, e-commerce redesigns, healthcare portals, and more—case studies from itenx technology projects.",
  openGraph: {
    title: "Case Studies | itenx",
    description:
      "FinTech, e-commerce, healthcare, SaaS—real projects delivered by itenx.",
  },
};

export default function CaseStudiesPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Case Studies"
          description="Real impact for real clients—from startups to enterprises."
          gradient
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        />

        <CaseStudiesPageContent />
      </div>
    </article>
  );
}
