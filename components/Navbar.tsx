"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CTALink } from "@/components/ui/CTALink";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled && "backdrop-blur-2xl"
      )}
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative mx-4 mt-4 overflow-hidden transition-all duration-500",
          "rounded-2xl",
          "border border-white/15 bg-white/[0.07] backdrop-blur-xl",
          isScrolled
            ? "border-white/25 bg-white/[0.1] shadow-[0_0_50px_-12px_rgba(0,216,255,0.2)]"
            : "shadow-[0_0_30px_-10px_rgba(0,216,255,0.1)]"
        )}
      >
        {/* Glassmorphism gradient overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-[#00D8FF]/5 via-transparent to-[#00D8FF]/5 opacity-0 transition-opacity duration-500",
            isScrolled && "opacity-100"
          )}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,transparent_50%)]" />

        <div className="relative flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-heading text-xl font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#00D8FF]"
            aria-label="itenx technologies limited - Home"
          >
            itenx
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "group/link relative text-sm font-medium transition-colors hover:text-white",
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-white"
                      : "text-slate-300"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#00D8FF] to-cyan-300 transition-all duration-300 group-hover/link:w-full",
                      pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                        ? "w-full"
                        : "w-0"
                    )}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Get in touch CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <CTALink
              href="https://calendly.com/kabirfarhan/40min"
              variant="primary"
              size="sm"
              showArrow={false}
              aria-label="Get in touch - Schedule a call with itenx"
            >
              Get in touch
            </CTALink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-white/20 bg-white/[0.08] p-4 backdrop-blur-2xl"
            >
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-4 py-3 transition-colors hover:bg-white/5 hover:text-[#00D8FF]",
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "bg-white/5 text-[#00D8FF]"
                      : "text-slate-300"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                </motion.li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-2">
                <CTALink
                  href="https://calendly.com/kabirfarhan/40min"
                  variant="primary"
                  size="sm"
                  showArrow={false}
                  className="w-full justify-center py-3"
                  aria-label="Get in touch - Schedule a call with itenx"
                >
                  Get in touch
                </CTALink>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
