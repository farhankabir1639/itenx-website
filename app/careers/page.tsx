import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join itenx. We're hiring engineers, designers, and process managers in Bangladesh and remotely. Build technology with a global impact.",
  openGraph: {
    title: "Careers | itenx",
    description:
      "Join itenx. Engineers, designers, process managers. Remote and Dhaka.",
  },
};

export default function CareersPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Careers"
          description="Join a team of engineers, designers, and process managers building technology for clients worldwide."
        />

        <div className="mt-16 space-y-8">
          <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h2 className="font-heading text-xl font-semibold text-white">
              Why work at itenx
            </h2>
            <p className="mt-4 text-slate-400">
              We build production-grade software for startups and enterprises
              globally. Our team enjoys competitive pay, remote flexibility, and
              the chance to work on challenging projects with senior peers.
            </p>
          </section>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
            <p className="text-slate-400">
              We&apos;re always looking for talented engineers, designers, and
              process managers. If you&apos;d like to join us, get in touch.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D8FF] to-cyan-400 px-8 py-4 font-semibold text-[#0A0C10] transition-opacity hover:opacity-90"
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
      </div>
    </article>
  );
}
