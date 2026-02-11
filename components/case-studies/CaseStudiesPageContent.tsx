"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const caseStudies = [
  {
    title: "FinTech Platform",
    category: "Software",
    description:
      "Scalable payment orchestration platform for a leading European fintech, processing millions of transactions daily.",
    gradient: "from-violet-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Redesign",
    category: "Web",
    description:
      "Full redesign and migration of a retail brand's e-commerce experience, doubling conversion rates.",
    gradient: "from-amber-500/20 to-rose-500/20",
  },
  {
    title: "Healthcare Portal",
    category: "Infrastructure",
    description:
      "HIPAA-compliant patient portal and telehealth platform for a regional hospital network.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    title: "SaaS Dashboard",
    category: "Design",
    description:
      "Enterprise dashboard redesign with analytics, role-based access, and real-time data visualization.",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Logistics API",
    category: "Software",
    description:
      "High-throughput API for logistics coordination, integrating carriers and warehouse systems.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Marketing Site",
    category: "Web",
    description:
      "Performance-optimized marketing site with A/B testing, analytics, and SEO best practices.",
    gradient: "from-rose-500/20 to-orange-500/20",
  },
];

const filters = ["All", "Software", "Web", "Design", "Infrastructure"];

export default function CaseStudiesPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = caseStudies.filter(
    (s) =>
      activeFilter === "All" ||
      s.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <div className="py-12">
      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-[#00D8FF] text-[#0A0C10]"
                : "border border-white/10 bg-white/5 text-slate-400 hover:border-[#00D8FF]/30 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Case study cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {filtered.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#00D8FF]/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-[#0A0C10]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative flex min-h-[280px] flex-col p-8">
                <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-[#00D8FF]">
                  {study.category}
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <p className="mt-4 flex-1 text-sm text-slate-400">
                  {study.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] opacity-0 transition-opacity group-hover:opacity-100">
                  Read more
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
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
