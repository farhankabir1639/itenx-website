"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerColumns = [
  {
    title: "Company",
      links: [
      { label: "About itenx", href: "#about" },
      { label: "Our services", href: "#services" },
      { label: "Case studies", href: "#case-studies" },
      { label: "Contact us", href: "#contact" },
    ],
  },
  {
    title: "Services",
      links: [
      { label: "Software development services", href: "#services" },
      { label: "Web development services", href: "#services" },
      { label: "UI/UX design services", href: "#services" },
      { label: "IT infrastructure services", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
  {
    title: "Connect",
      links: [
      { label: "Follow itenx on LinkedIn", href: "https://www.linkedin.com/company/itenx" },
      { label: "Follow itenx on Twitter", href: "https://twitter.com/itenx" },
      { label: "View itenx on GitHub", href: "https://github.com/itenx" },
      { label: "Email itenx", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#0A0C10]">
      {/* Gradient border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D8FF]/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: colIndex * 0.1, duration: 0.4 }}
              className="relative rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#00D8FF]/20"
            >
              <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[#00D8FF]">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-[#00D8FF]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row"
        >
          <p className="font-heading text-lg font-semibold text-white">
            itenx
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} itenx technologies limited. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
