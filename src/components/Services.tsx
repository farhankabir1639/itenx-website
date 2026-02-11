"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Palette,
  Server,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom applications, APIs, and scalable systems. From MVP to enterprise-grade software.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, responsive web apps and e-commerce. Modern stacks, performance, and SEO.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design, design systems, and pixel-perfect interfaces that convert.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Cloud, DevOps, security, and reliable infrastructure for global delivery.",
  },
  {
    icon: MessageSquare,
    title: "Consulting",
    description: "Strategy, architecture review, and technical leadership when you need clarity.",
  },
  {
    icon: Sparkles,
    title: "Digital Transformation",
    description: "End-to-end modernization: people, process, and technology aligned to outcomes.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading text-display-md font-bold text-foreground mb-4">
            What we deliver
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            End-to-end technology capabilities for teams that refuse to compromise on quality or speed.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-6 lg:p-8 transition-all hover:border-primary/30 hover:shadow-[0_0_30px_-10px_rgba(0,216,255,0.2)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
