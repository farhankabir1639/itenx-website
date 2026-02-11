import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import CapabilitiesContent from "@/components/CapabilitiesContent";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Why itenx: senior engineers, agile delivery, cost-effective solutions, and long-term partnership. Boutique craftsmanship with enterprise-grade delivery. Bangladesh & US.",
  openGraph: {
    title: "Capabilities | itenx",
    description:
      "Senior engineers, agile delivery, cost-effective solutions. Enterprise-grade technology partner.",
  },
};

export default function CapabilitiesPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Why itenx"
          description="We combine boutique craftsmanship with enterprise-grade delivery."
        />

        <CapabilitiesContent />

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D8FF] to-cyan-400 px-8 py-4 font-semibold text-[#0A0C10] transition-opacity hover:opacity-90"
          >
            Get in touch
            <svg
              className="h-5 w-5"
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
