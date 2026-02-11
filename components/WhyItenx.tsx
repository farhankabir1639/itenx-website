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

function Marquee() {
  return (
    <div className="relative overflow-hidden py-8">
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
  );
}

export default function WhyItenx() {
  return (
    <section id="why-itenx" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8" aria-label="About and capabilities">
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#0A0C10] to-transparent" />
      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0A0C10] to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why itenx
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We combine boutique craftsmanship with enterprise-grade delivery.
          </p>
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 rounded-2xl border border-white/10 bg-white/[0.02] py-4"
        >
          <Marquee />
        </motion.div>

        {/* Feature blocks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D8FF]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <span className="mb-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#00D8FF] to-cyan-400" />
                <h3 className="font-heading text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
