"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    slug: "customer-success",
    title: "Customer Success",
    description:
      "Dedicated offshore CSMs that drive retention, reduce churn, and grow account revenue. Onboarding specialists and support teams—outsourced from Bangladesh.",
    icon: "/images/services/consulting.png",
    alt: "Customer success outsourcing - dedicated CSMs and onboarding - itenx BPO",
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    description:
      "Professional community management, moderation, and engagement programs. Discord servers, product forums, and brand advocate programs—outsourced.",
    icon: "/images/services/ui-ux.png",
    alt: "Community management outsourcing - Discord, forum moderation - itenx BPO",
  },
  {
    slug: "aeo-seo",
    title: "AEO & SEO Services",
    description:
      "Technical SEO and Answer Engine Optimization for traditional and AI-powered search. Structured data, content strategy, and organic growth programs.",
    icon: "/images/services/web-dev.png",
    alt: "SEO and AEO services - technical SEO, AI search optimization - itenx",
  },
  {
    slug: "customer-acquisition",
    title: "Customer Acquisition",
    description:
      "Full-funnel acquisition programs—offshore SDR teams, inbound lead qualification, demand generation, and pipeline management at offshore rates.",
    icon: "/images/services/software-dev.png",
    alt: "Customer acquisition outsourcing - SDR teams, lead generation - itenx BPO",
  },
  {
    slug: "media-buying",
    title: "Media Buying",
    description:
      "Paid media across Google, Meta, LinkedIn, and programmatic—managed by certified media buyers for maximum ROAS and performance.",
    icon: "/images/services/transformation.png",
    alt: "Media buying outsourcing - Google Ads, Meta, programmatic - itenx",
  },
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Bespoke enterprise software, APIs, and scalable solutions. Our offshore software development services cover full-stack development, microservices architecture, and cloud-native applications.",
    icon: "/images/services/software-dev.png",
    alt: "Software development and engineering - itenx technology outsourcing",
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, performant websites and web applications built with React, Next.js, and the latest frameworks. We specialize in JAMstack architecture and headless CMS integrations.",
    icon: "/images/services/web-dev.png",
    alt: "Web development services - React, Next.js - itenx",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design that delights, converts, and drives engagement across every touchpoint.",
    icon: "/images/services/ui-ux.png",
    alt: "UI/UX design and user experience - itenx design services",
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    description:
      "Cloud architecture, DevOps, security, and infrastructure that scales with your business.",
    icon: "/images/services/infrastructure.png",
    alt: "IT infrastructure and cloud - DevOps, security - itenx",
  },
  {
    slug: "consulting",
    title: "Consulting",
    description:
      "Strategic technology advisory to align your stack, processes, and roadmap with your goals.",
    icon: "/images/services/consulting.png",
    alt: "IT consulting and technology advisory - itenx",
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description:
      "End-to-end modernization of processes, systems, and culture for the digital age.",
    icon: "/images/services/transformation.png",
    alt: "Digital transformation services - itenx technology outsourcing",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comprehensive Technology & Business Process Outsourcing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            From software engineering and cloud infrastructure to customer success,
            community, and performance marketing—our offshore teams deliver
            across the full stack of modern business operations.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_-10px_rgba(0,216,255,0.15)]"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00D8FF]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#00D8FF]/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <span className="mb-4 inline-block overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-[1.05]">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    width={120}
                    height={120}
                    className="rounded-xl object-contain"
                    loading="lazy"
                  />
                </span>
                <h3 className="font-heading text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] transition-all duration-300 group-hover:translate-x-0.5 group-hover:underline">
                  Learn more
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
