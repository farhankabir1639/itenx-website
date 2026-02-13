"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your Offshore Development Team, Engineered for Success
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            itenx is an offshore software development company based in
            Bangladesh with a strategic presence in the US. We combine the
            cost-effectiveness of offshore outsourcing with the quality standards
            of senior engineering teams.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            Founded by experienced technologists, we deliver world-class
            software development services across the full technology
            lifecycle—from MVPs to enterprise-scale platforms.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">
            With 12+ years of experience in software outsourcing, we&apos;ve
            built lasting partnerships with clients who demand both technical
            excellence and transparent collaboration.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-[#00D8FF] hover:underline"
          >
            Learn more about itenx
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
        </motion.div>
      </div>
    </section>
  );
}
