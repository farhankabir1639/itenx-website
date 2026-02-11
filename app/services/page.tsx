import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium technology outsourcing: software development, web development, UI/UX design, IT infrastructure, consulting, and digital transformation. Based in Bangladesh, serving clients globally.",
  openGraph: {
    title: "Technology Services | itenx",
    description:
      "Software development, web development, design, IT, consulting, and digital transformation.",
  },
};

export default function ServicesPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Our Services"
          description="Premium technology outsourcing across software, web, design, IT, consulting, and digital transformation."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#00D8FF]/40 hover:bg-white/[0.08]"
            >
              <h2 className="font-heading text-xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                {service.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] group-hover:underline">
                Learn more
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
              </span>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
