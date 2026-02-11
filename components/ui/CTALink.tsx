"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CTALinkProps {
  href: string;
  variant?: "primary" | "secondary";
  size?: "default" | "sm";
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  "aria-label"?: string;
}

export function CTALink({
  href,
  variant = "primary",
  size = "default",
  children,
  className,
  showArrow = true,
  "aria-label": ariaLabel,
}: CTALinkProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-all duration-300 ease-out";

  const sizes = {
    default: "px-8 py-4",
    sm: "px-5 py-2.5 text-sm",
  };

  const variants = {
    primary: cn(
      "cta-primary text-white shadow-[0_0_20px_-5px_rgba(0,216,255,0.3)]",
      "border border-[#00D8FF]/40"
    ),
    secondary: cn(
      "border border-white/30 bg-white/5 text-white backdrop-blur-sm",
      "hover:border-[#00D8FF]/50 hover:bg-white/10",
      "hover:shadow-[0_0_25px_-5px_rgba(0,216,255,0.25)]"
    ),
  };

  return (
    <Link href={href} aria-label={ariaLabel} className="inline-block">
      <motion.span
        className={cn(base, variants[variant], sizes[size], className)}
        style={{ display: "inline-flex" }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            variant === "primary"
              ? "0 0 35px rgba(0, 216, 255, 0.5)"
              : "0 0 25px -5px rgba(0, 216, 255, 0.3)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
        {showArrow && (
          <svg
            className={cn("transition-transform group-hover:translate-x-1", size === "sm" ? "h-4 w-4" : "h-5 w-5")}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        )}
      </motion.span>
    </Link>
  );
}
