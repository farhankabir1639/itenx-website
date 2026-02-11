"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  gradient?: boolean;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({
  title,
  description,
  gradient = false,
  breadcrumbs,
  className = "",
}: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-16 text-center sm:py-24 ${className}`}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap justify-center gap-2 text-sm">
            {breadcrumbs.map((item, i) => (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-slate-600" aria-hidden>
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
        </nav>
      )}
      <h1
        className={`font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          gradient
            ? "bg-gradient-to-r from-[#00D8FF] via-cyan-300 to-[#00D8FF] bg-clip-text text-transparent"
            : "text-white"
        }`}
      >
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">{description}</p>
    </motion.div>
  );
}
