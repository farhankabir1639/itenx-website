"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Engineering Excellence",
    description:
      "Senior developers, modern stack, and best practices. We ship production-grade code from day one—clean architecture, test coverage, and DevOps-ready deployments. No junior staffing; every line of code is reviewed and maintainable.",
    points: ["Senior engineers only", "Modern stack (React, Node, Python)", "Clean architecture & best practices", "Code review & testing"],
  },
  {
    title: "Design & UX",
    description:
      "User research, prototyping, and iterative testing. We create interfaces that convert and delight. From wireframes to high-fidelity design systems, we ensure accessibility, clarity, and brand alignment.",
    points: ["User research & testing", "Wireframes & prototypes", "Design systems", "Accessibility (WCAG)"],
  },
  {
    title: "Infrastructure & DevOps",
    description:
      "Cloud architecture, CI/CD, and monitoring. We design infrastructure that scales with you. AWS, Azure, Kubernetes—we handle deployment, security, and incident response so you focus on product.",
    points: ["Cloud (AWS, Azure)", "CI/CD pipelines", "Monitoring & alerting", "Security hardening"],
  },
];

const clientLogos = [
  "Acme Corp",
  "TechFlow",
  "Nexus Digital",
  "Prime Systems",
  "Vertex Labs",
  "Stellar Solutions",
];

export default function CapabilitiesPageContent() {
  return (
    <>
      {/* Capability sections */}
      <section className="py-16">
        <div className="space-y-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm lg:p-12"
            >
              <h2 className="font-heading text-2xl font-semibold text-white">
                {cap.title}
              </h2>
              <p className="mt-4 text-slate-400">{cap.description}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {cap.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-full border border-[#00D8FF]/20 bg-[#00D8FF]/5 px-4 py-2 text-sm text-[#00D8FF]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client logos */}
      <section className="py-16">
        <h2 className="mb-12 text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
          Trusted by teams worldwide
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] py-8 text-slate-500 backdrop-blur-sm"
            >
              <span className="font-heading text-sm font-semibold">{logo}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
          Explore our work
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          See how we&apos;ve helped clients achieve their goals.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D8FF] to-cyan-400 px-8 py-4 font-semibold text-[#0A0C10] transition-opacity hover:opacity-90"
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
      </motion.section>
    </>
  );
}
