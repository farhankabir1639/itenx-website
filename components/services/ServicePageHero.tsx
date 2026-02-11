"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const serviceHeroImages: Record<string, string> = {
  "software-development": "/images/services/software-dev-hero.png",
  "web-development": "/images/services/web-dev-hero.png",
  "ui-ux-design": "/images/services/ui-ux-hero.png",
  "it-infrastructure": "/images/services/infrastructure-hero.png",
  consulting: "/images/services/consulting-hero.png",
  "digital-transformation": "/images/services/transformation-hero.png",
};

interface ServicePageHeroProps {
  slug: string;
  title: string;
  description: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function ServicePageHero({
  slug,
  title,
  description,
  breadcrumbs,
}: ServicePageHeroProps) {
  const backgroundImage =
    serviceHeroImages[slug] ?? "/images/services/software-dev-hero.png";

  return (
    <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
      {/* 1. Background image layer - absolute, full size, cover, center */}
      <div
        className="absolute inset-0 left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
        aria-hidden
      />
      {/* 2. Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 left-0 top-0 h-full w-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10, 12, 16, 0.75), rgba(10, 12, 16, 0.9))",
          zIndex: 1,
        }}
        aria-hidden
      />
      {/* 3. Content - relative, high z-index, on top */}
      <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[320px] sm:py-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <ol className="flex flex-wrap justify-center gap-2 text-sm">
              {breadcrumbs.map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-slate-500" aria-hidden>
                      /
                    </span>
                  )}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-slate-400 transition-colors hover:text-[#00D8FF]"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-slate-300" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-400 sm:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
