"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTALink } from "@/components/ui/CTALink";
import { services } from "@/lib/services-data";

const serviceIcons: Record<string, string> = {
  "software-development": "/images/services/software-dev.png",
  "web-development": "/images/services/web-dev.png",
  "ui-ux-design": "/images/services/ui-ux.png",
  "it-infrastructure": "/images/services/infrastructure.png",
  consulting: "/images/services/consulting.png",
  "digital-transformation": "/images/services/transformation.png",
};

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
                <span className="mb-4 inline-flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#00D8FF]/20 bg-white/[0.06] shadow-[0_0_15px_-5px_rgba(0,216,255,0.2)] backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_-5px_rgba(0,216,255,0.35)]">
                  <Image
                    src={serviceIcons[service.slug] ?? "/images/services/software-dev.png"}
                    alt={`${service.title} icon`}
                    width={80}
                    height={80}
                    className="object-contain"
                    loading="lazy"
                  />
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
        <CTALink
          href="https://calendly.com/kabirfarhan/40min"
          variant="primary"
          className="mt-8"
          aria-label="Get in touch - Schedule a call with itenx"
        >
          Get in touch
        </CTALink>
      </motion.section>
    </>
  );
}
