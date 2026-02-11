"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "FinTech Platform",
    category: "Software Development",
    description:
      "Scalable payment orchestration platform for a leading European fintech, processing millions of transactions daily.",
    gradient: "from-violet-500/20 to-cyan-500/20",
    image: "/images/case-studies/fintech-platform.png",
    alt: "FinTech platform case study - software development and payment orchestration by itenx",
  },
  {
    title: "E-Commerce Redesign",
    category: "Web & Design",
    description:
      "Full redesign and migration of a retail brand's e-commerce experience, doubling conversion rates.",
    gradient: "from-amber-500/20 to-rose-500/20",
    image: "/images/case-studies/ecommerce-redesign.png",
    alt: "E-commerce redesign case study - web development and UX by itenx",
  },
  {
    title: "Healthcare Portal",
    category: "Digital Transformation",
    description:
      "HIPAA-compliant patient portal and telehealth platform for a regional hospital network.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    image: "/images/case-studies/healthcare-portal.png",
    alt: "Healthcare portal case study - digital transformation and telehealth by itenx",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Case Studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Real impact for real clients—from startups to enterprises.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[16px] border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#00D8FF]/20"
            >
              {/* Case study thumbnail background */}
              <div className="absolute inset-0 rounded-[16px]">
                <Image
                  src={study.image}
                  alt={study.alt}
                  fill
                  className="rounded-[16px] object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay for text readability */}
                <div
                  className={`absolute inset-0 rounded-[16px] bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/80 to-transparent`}
                />
              </div>
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 rounded-[16px] bg-gradient-to-br ${study.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 rounded-[16px] bg-[#0A0C10]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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
                  View case study
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
        </div>
      </div>
    </section>
  );
}
