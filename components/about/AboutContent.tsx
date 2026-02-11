"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTALink } from "@/components/ui/CTALink";

const team = [
  { name: "Alex Rahman", role: "Chief Technology Officer", initial: "AR" },
  { name: "Sara Ahmed", role: "Head of Design", initial: "SA" },
  { name: "Marcus Chen", role: "Engineering Lead", initial: "MC" },
  { name: "Nadia Islam", role: "Operations & Delivery", initial: "NI" },
];

const values = [
  {
    title: "Excellence",
    description: "We ship production-grade code and designs. No shortcuts, no technical debt by default.",
  },
  {
    title: "Transparency",
    description: "Clear communication, honest timelines, and visibility into every step of delivery.",
  },
  {
    title: "Partnership",
    description: "We grow with you. From MVP to scale, we're a long-term extension of your team.",
  },
  {
    title: "Innovation",
    description: "Modern stack, best practices, and continuous improvement in everything we build.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl py-16 text-center"
      >
        <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
          Our Story
        </h2>
        <p className="mt-6 leading-relaxed text-slate-400">
          itenx technologies limited was founded in Bangladesh as a boutique
          technology partner for startups and enterprises worldwide. With
          headquarters in Dhaka and offices in the United States, we combine
          cost-effective engineering talent from Bangladesh with client-facing
          presence in key markets. Our senior engineers, designers, and process
          managers ship production-grade software from day one—no juniors, no
          shortcuts.
        </p>
      </motion.section>

      {/* Team */}
      <section className="py-16">
        <h2 className="mb-12 text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
          Our Team
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/30"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D8FF]/20 to-cyan-500/10 text-lg font-bold text-[#00D8FF]">
                {member.initial}
              </div>
              <h3 className="font-heading font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <h2 className="mb-12 text-center font-heading text-2xl font-semibold text-white sm:text-3xl">
          Our Values
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/20"
            >
              <span className="mb-3 block h-1 w-12 rounded-full bg-gradient-to-r from-[#00D8FF] to-cyan-400" />
              <h3 className="font-heading font-semibold text-white">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{value.description}</p>
            </motion.div>
          ))}
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
          Ready to work together?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Tell us about your project. We respond within 24 hours.
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
