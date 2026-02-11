"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label="Breadcrumb"
      className="mb-8"
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, i) => (
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
    </motion.nav>
  );
}
