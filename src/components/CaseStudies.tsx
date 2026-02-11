"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    title: "Enterprise platform modernization",
    description: "Migrated a legacy monolith to microservices, cutting deployment time by 70% and enabling independent team scaling.",
    gradient: "linear-gradient(135deg, rgba(0, 216, 255, 0.15) 0%, rgba(0, 216, 255, 0.02) 50%, transparent 100%)",
  },
  {
    title: "Global e-commerce experience",
    description: "Designed and built a headless storefront with real-time inventory and localized checkout for 12 markets.",
    gradient: "linear-gradient(135deg, rgba(0, 216, 255, 0.12) 0%, transparent 50%, rgba(0, 216, 255, 0.06) 100%)",
  },
  {
    title: "AI-powered operations suite",
    description: "Delivered an internal toolset for forecasting and automation, reducing manual ops by 60% in the first year.",
    gradient: "linear-gradient(135deg, transparent 0%, rgba(0, 216, 255, 0.08) 50%, rgba(0, 216, 255, 0.12) 100%)",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-display-md font-bold text-foreground mb-4">
            Case studies
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A selection of engagements where we delivered measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border overflow-hidden"
              style={{ background: c.gradient }}
            >
              <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
                <div className="mb-4 inline-flex rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-medium">
                  Project
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {c.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Read more
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
