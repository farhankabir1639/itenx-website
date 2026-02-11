"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTALink } from "@/components/ui/CTALink";

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
          What we offer
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
          How we deliver
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
          Recent work
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
        <CTALink
          href="https://calendly.com/kabirfarhan/40min"
          variant="primary"
          aria-label={`Start your ${service.title} project - Schedule a call with itenx`}
        >
          Start your {service.title} project
        </CTALink>
        <CTALink
          href="/services"
          variant="secondary"
          showArrow={false}
          aria-label="Explore all itenx technology services"
        >
          Explore all services
        </CTALink>
      </motion.section>
    </div>
  );
}
