"use client";

import { motion } from "framer-motion";
import { Target, Award, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Outcome-focused",
    description: "Every sprint ties to business outcomes, not just deliverables. We measure what matters.",
  },
  {
    icon: Award,
    title: "Premium quality",
    description: "Rigorous standards, code review, and design systems by default. No shortcuts.",
  },
  {
    icon: Globe,
    title: "Globally minded",
    description: "Distributed teams, time-zone aware, and culturally inclusive. We work where you work.",
  },
  {
    icon: Zap,
    title: "Delivery at pace",
    description: "Agile, predictable timelines, and clear communication. Ship on time, every time.",
  },
];

export function WhyItenx() {
  return (
    <section id="why-itenx" className="py-24 sm:py-32 border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-display-md font-bold text-foreground mb-4">
            Why itenx
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We combine the craft of a top-tier studio with the scale and rigor of a global delivery partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-background p-6 lg:p-8 hover:border-primary/20 transition-colors"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <f.icon className="size-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
