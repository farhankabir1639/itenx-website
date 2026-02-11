"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Service = (typeof import("@/lib/services-data").services)[number];

interface ServicePageContentProps {
  service: Service;
}

export default function ServicePageContent({ service }: ServicePageContentProps) {
  return (
    <div className="space-y-16 pt-8">
      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-invert max-w-none"
      >
        <h2 className="font-heading text-xl font-semibold text-white">
          Overview
        </h2>
        <p className="mt-4 leading-relaxed text-slate-400">
          {service.longDescription}
        </p>
      </motion.section>

      {/* What we do */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="font-heading text-xl font-semibold text-white">
          What we do
        </h2>
        <ul className="mt-6 space-y-4">
          {service.whatWeDo.map((item, i) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00D8FF]/20 text-xs font-bold text-[#00D8FF]">
                {i + 1}
              </span>
              <span className="text-slate-400">{item}</span>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="font-heading text-xl font-semibold text-white">
          Technologies
        </h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#00D8FF]/20 bg-[#00D8FF]/5 px-4 py-2 text-sm text-[#00D8FF]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Example projects */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="font-heading text-xl font-semibold text-white">
          Example projects
        </h2>
        <ul className="mt-4 space-y-2">
          {service.exampleProjects.map((project) => (
            <li
              key={project}
              className="flex items-center gap-2 text-slate-400 before:content-['→'] before:text-[#00D8FF]"
            >
              {project}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col items-center gap-4 py-12 sm:flex-row sm:justify-center"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D8FF] to-cyan-400 px-8 py-4 font-semibold text-[#0A0C10] transition-opacity hover:opacity-90"
        >
          Start a project
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
        <Link
          href="/services"
          className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
        >
          View all services
        </Link>
      </motion.section>
    </div>
  );
}
