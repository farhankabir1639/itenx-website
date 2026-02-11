"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Senior Engineers",
    description:
      "Boutique team of seasoned developers who ship production-grade code from day one.",
  },
  {
    title: "Agile Delivery",
    description:
      "Iterative sprints, transparent communication, and predictable delivery timelines.",
  },
  {
    title: "Cost-Effective",
    description:
      "Premium quality at competitive rates—no agency markup, no unnecessary overhead.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We grow with you. From MVP to scale, we're with you at every stage.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "Docker",
  "Kubernetes",
  "GraphQL",
];

export default function CapabilitiesContent() {
  return (
    <div className="mt-16">
      <div className="mb-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
        <div className="flex w-max animate-marquee gap-12">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="whitespace-nowrap text-lg font-medium text-slate-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00D8FF]/20"
          >
            <span className="mb-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#00D8FF] to-cyan-400" />
            <h3 className="font-heading text-lg font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
