"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { caseStudies } from "@/lib/case-studies-data";

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
              key={study.slug}
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

              <Link
                href={`/case-studies/${study.slug}`}
                className="relative flex min-h-[280px] flex-col p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-block text-xs font-medium uppercase tracking-wider text-[#00D8FF]">
                    {study.category}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-xs text-slate-500">{study.industry}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <p className="mt-4 flex-1 text-sm text-slate-400">
                  {study.description}
                </p>

                {/* Metrics preview */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {study.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2">
                      <p className="font-heading text-base font-bold text-[#00D8FF]">{m.value}</p>
                      <p className="text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] opacity-0 transition-opacity group-hover:opacity-100">
                  Read case study
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
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
