import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "itenx technologies limited is a premium technology outsourcing company founded in Bangladesh with US offices. Built by senior engineers, designers, and process managers serving clients globally.",
  openGraph: {
    title: "About itenx | Technology Partner in Bangladesh & USA",
    description:
      "Founded in Bangladesh with US offices. Engineers, designers, and process managers delivering world-class software solutions.",
  },
};

export default function AboutPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="About itenx"
          description="Premium technology outsourcing built in Bangladesh, with offices in the US. Powered by engineers, designers, and process managers."
        />

        <div className="prose prose-invert mx-auto max-w-3xl space-y-8 pt-8">
          <section>
            <h2 className="font-heading text-2xl font-semibold text-white">
              Our Story
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              itenx technologies limited was founded in Bangladesh as a boutique
              technology partner for startups and enterprises worldwide. With
              headquarters in Dhaka and offices in the United States, we combine
              cost-effective engineering talent from Bangladesh with client-facing
              presence in key markets.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-white">
              Built by Specialists
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Our team is made up of senior engineers, designers, and process
              managers who ship production-grade software from day one. We don&apos;t
              staff juniors—every project is delivered by experienced professionals
              who understand architecture, design systems, and delivery at scale.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-white">
              Global Reach, Local Roots
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              Headquartered in Dhaka, Bangladesh, we operate US offices to serve
              North American and European clients with time-zone alignment and
              in-person collaboration when needed. Our distributed model gives you
              world-class engineering at competitive rates, backed by a team that
              understands both local and international delivery standards.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold text-white">
              What We Deliver
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              From software development and web applications to UI/UX design, IT
              infrastructure, consulting, and digital transformation—itenx
              provides end-to-end technology solutions. We work in agile sprints,
              communicate transparently, and grow with you from MVP to enterprise
              scale.
            </p>
          </section>
        </div>

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
