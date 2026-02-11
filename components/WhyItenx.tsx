"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTALink } from "@/components/ui/CTALink";

const valueCards = [
  {
    title: "Elite Engineering Team",
    description:
      "Our senior engineers average 8+ years of experience with Fortune 500 companies. We don't assign junior developers to your project—every line of code is written by battle-tested experts who've scaled systems to millions of users. No training wheels, no surprises.",
    stats: ["8+ years average experience"],
    icon: "/images/features/elite-engineers.png",
  },
  {
    title: "AI & Machine Learning Engineering",
    description:
      "Transform your product with cutting-edge AI capabilities. From LLM integration (GPT-4, Claude, Llama) to custom ML models, computer vision, and intelligent automation—we turn AI buzzwords into revenue-generating features. RAG systems, fine-tuning, vector databases, and production-ready AI pipelines.",
    stats: ["LLM integration", "Custom AI solutions"],
    icon: "/images/features/ai-ml-engineering.png",
  },
  {
    title: "Ship 40% Faster Than In-House Teams",
    description:
      "Our 2-week sprint cycles and DevOps automation mean you see working features every 14 days—not 'coming soon.' We've helped clients launch MVPs in 8 weeks that would take traditional agencies 6 months. Speed without cutting corners.",
    stats: ["40% faster delivery", "MVP in 8 weeks"],
    icon: "/images/features/rapid-delivery.png",
  },
  {
    title: "60% Cost Savings Without Compromise",
    description:
      "Why pay Silicon Valley rates for the same expertise? Our Dhaka-based engineers deliver Fortune 500-quality code at 40-60% lower costs—without time zone headaches or communication barriers. English-fluent teams, US-friendly hours, enterprise-grade security.",
    stats: ["40-60% cost savings", "SOC 2 compliant"],
    icon: "/images/features/cost-savings.png",
  },
  {
    title: "True Partnership, Not Transactional Outsourcing",
    description:
      "We don't disappear after deployment. From initial MVP to Series B scaling, we're invested in your success. Our 95%+ client retention rate isn't luck—it's because we treat your product like our own. Proactive architecture advice, ongoing optimization, and 24/7 support when it matters.",
    stats: ["95% client retention"],
    icon: "/images/features/partnership.png",
  },
];

const techCategories = [
  {
    category: "AI & Machine Learning",
    items: [
      "OpenAI GPT-4",
      "Claude",
      "Llama",
      "Mistral",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "Qdrant",
      "TensorFlow",
      "PyTorch",
      "Hugging Face",
      "Computer Vision",
    ],
  },
  {
    category: "Backend & Infrastructure",
    items: [
      "Node.js",
      "Python",
      "Go",
      "Rust",
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "PostgreSQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Frontend & Mobile",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      "Apache Kafka",
      "Airflow",
      "Snowflake",
      "BigQuery",
      "Elasticsearch",
      "Grafana",
    ],
  },
];

const visualStats = [
  { value: "95%", label: "Client Retention" },
  { value: "40%", label: "Faster Delivery" },
  { value: "8+", label: "Years Avg Experience" },
];

export default function WhyItenx() {
  return (
    <section
      id="why-itenx"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      aria-label="Why choose itenx - Elite software engineering and AI development"
    >
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#0A0C10] to-transparent" />
      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0A0C10] to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Leading Companies Choose itenx
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            We don&apos;t just build software—we architect solutions that drive
            revenue, reduce costs, and scale with your ambitions. Here&apos;s
            what sets us apart from traditional outsourcing.
          </p>
        </motion.header>

        {/* Value proposition cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {valueCards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              itemScope
              itemType="https://schema.org/Service"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/20 sm:p-8"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D8FF]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex justify-center">
                  <span className="flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#00D8FF]/20 bg-white/[0.06] p-1 shadow-[0_0_15px_-5px_rgba(0,216,255,0.2)] backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_25px_-5px_rgba(0,216,255,0.4)]">
                    <Image
                      src={card.icon}
                      alt={`${card.title} - itenx value proposition`}
                      width={80}
                      height={80}
                      className="object-contain"
                      loading="lazy"
                      unoptimized
                    />
                  </span>
                </div>
                <h3
                  className="mt-5 font-heading text-lg font-semibold text-white"
                  itemProp="name"
                >
                  {card.title}
                </h3>
                <p
                  className="mt-4 text-sm leading-relaxed text-slate-400"
                  itemProp="description"
                >
                  {card.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-4">
                  {card.stats.map((stat) => (
                    <li
                      key={stat}
                      className="rounded-md border border-[#00D8FF]/15 bg-[#00D8FF]/5 px-2 py-0.5 text-[11px] font-medium tracking-wide text-[#00D8FF]/90"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats, social proof, CTAs - aligned like hero */}
        <div className="mx-auto max-w-5xl text-center">
          {/* Visual stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-10"
          >
            {visualStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center">
                <div className="mb-2 font-heading text-4xl font-bold text-[#00D8FF]">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-lg text-slate-400"
          >
            Trusted by startups to Fortune 500 companies across fintech, healthcare, and e-commerce
          </motion.p>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
          <CTALink
            href="/contact"
            variant="primary"
            aria-label="See how itenx can accelerate your product"
          >
            See How We Can Accelerate Your Product
          </CTALink>
          <CTALink
            href="/contact"
            variant="secondary"
            showArrow={false}
            aria-label="Schedule free architecture review"
          >
            Schedule Free Architecture Review
          </CTALink>
        </motion.div>
        </div>

        {/* Technologies We Master */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          aria-labelledby="technologies-heading"
          className="mt-20 border-t border-white/10 pt-12"
        >
          <h2
            id="technologies-heading"
            className="mb-10 text-center font-heading text-2xl font-bold text-white sm:text-3xl"
          >
            Technologies We Master
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techCategories.map((cat, i) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-[#00D8FF]/20"
              >
                <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#00D8FF]">
                  {cat.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:border-[#00D8FF]/30 hover:text-slate-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  );
}
