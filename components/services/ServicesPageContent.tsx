"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/services-data";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "PostgreSQL",
  "Tailwind",
  "Docker",
  "Kubernetes",
  "GraphQL",
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understand your goals, users, and technical constraints." },
  { step: "02", title: "Design", description: "Wireframes, prototypes, and design systems aligned with your brand." },
  { step: "03", title: "Develop", description: "Agile sprints, clean code, and continuous integration." },
  { step: "04", title: "Deploy", description: "Production rollout, monitoring, and ongoing support." },
];

export default function ServicesPageContent() {
  return (
    <>
      {/* Service cards */}
      <section className="py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block rounded-2xl border border-white/15 bg-white/[0.04] p-6 transition-all duration-300 hover:border-[#00D8FF]/40 hover:bg-white/[0.08]"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#00D8FF]/20 bg-[#00D8FF]/10 text-[#00D8FF">
                  <span className="font-heading text-sm font-bold">
                    {service.title.slice(0, 1)}
                  </span>
                </span>
                <h2 className="font-heading text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-slate-400">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] group-hover:underline">
                  Learn more
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <h2 className="mb-12 text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
          Our Process
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
            >
              {i < processSteps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-slate-600 lg:block">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
              <span className="text-3xl font-bold text-[#00D8FF]/50">{item.step}</span>
              <h3 className="mt-2 font-heading font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech stack marquee */}
      <section className="py-16">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4">
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
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
          Start a project
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Tell us about your goals. We&apos;ll get back within 24 hours.
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
