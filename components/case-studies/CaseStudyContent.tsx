"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies-data";
import { CTALink } from "@/components/ui/CTALink";

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <div className="space-y-16">
      {/* Meta bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-6 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-6"
      >
        {[
          { label: "Client", value: study.client },
          { label: "Industry", value: study.industry },
          { label: "Category", value: study.category },
          { label: "Duration", value: study.duration },
        ].map((item) => (
          <div key={item.label} className="min-w-[120px]">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
            <p className="mt-1 font-heading font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </motion.div>

      {/* Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {study.metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center"
          >
            <p className="font-heading text-3xl font-bold text-[#00D8FF]">{m.value}</p>
            <p className="mt-2 text-xs text-slate-400">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Challenge */}
      <Section title="The Challenge" delay={0.15}>
        <p className="leading-relaxed text-slate-300">{study.challenge}</p>
      </Section>

      {/* Solution */}
      <Section title="Our Approach" delay={0.2}>
        <p className="leading-relaxed text-slate-300">{study.solution}</p>
      </Section>

      {/* Results */}
      <Section title="Results" delay={0.25}>
        <ul className="space-y-3">
          {study.results.map((result) => (
            <li key={result} className="flex items-start gap-3">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00D8FF]/10">
                <svg className="h-3 w-3 text-[#00D8FF]" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-300">{result}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Technologies */}
      <Section title="Technologies Used" delay={0.3}>
        <div className="flex flex-wrap gap-2">
          {study.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-2xl border border-white/10 bg-white/[0.02] p-10 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold text-white">
          Ready to build something like this?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          Tell us about your project and we'll respond within 24 hours.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTALink
            href="https://calendly.com/kabirfarhan/40min"
            variant="primary"
            aria-label="Schedule a call with itenx"
          >
            Schedule a call
          </CTALink>
          <Link
            href="/case-studies"
            className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
          >
            ← Back to case studies
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <h2 className="mb-6 font-heading text-xl font-semibold text-white">{title}</h2>
      {children}
    </motion.section>
  );
}
