"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* 1. Background image layer - absolute, full size, lowest z-index */}
      <div
        className="absolute inset-0 left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
        aria-hidden
      />
      {/* 2. Dark gradient overlay - makes text readable, shows cyan circuit pattern through */}
      <div
        className="absolute inset-0 left-0 top-0 h-full w-full"
        style={{
          background: "linear-gradient(to bottom, rgba(10, 12, 16, 0.75), rgba(10, 12, 16, 0.9))",
          zIndex: 1,
        }}
        aria-hidden
      />
      {/* 3. Accent gradient orbs - subtle cyan/indigo glow */}
      <div className="absolute inset-0 left-0 top-0 h-full w-full" style={{ zIndex: 2 }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(0,216,255,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_40%,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_70%,rgba(0,216,255,0.12),transparent_50%)]" />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,rgba(0,216,255,0.08),transparent_70%)]"
        />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(0,216,255,0.03) 0%, transparent 25%, rgba(99,102,241,0.03) 50%, transparent 75%, rgba(0,216,255,0.03) 100%)",
            backgroundSize: "400% 400%",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* 4. Content - relative, high z-index, on top of all background layers */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Pre-headline tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-300 backdrop-blur-sm">
            <span className="text-[#00D8FF]">☆</span>
            PREMIUM TECHNOLOGY OUTSOURCING
          </span>
        </motion.div>

        {/* Split headline - v1 copy */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block text-white">Engineering Tomorrow.</span>
          <span className="mt-2 block text-slate-400">Delivered Today.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          itenx technologies limited delivers world-class engineering, design,
          and software solutions—trusted by teams that demand excellence at
          scale.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-indigo-500 to-[#00D8FF] px-8 py-4 font-semibold text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_rgba(0,216,255,0.4)] hover:scale-[1.02]"
            aria-label="Start a project - Contact itenx for your next software project"
          >
            Start a project
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00D8FF]/50 hover:bg-white/10"
            aria-label="Explore itenx technology services"
          >
            Explore services
          </Link>
        </motion.div>

        {/* Floating stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] px-8 py-6 backdrop-blur-xl transition-all duration-300 hover:border-[#00D8FF]/40 hover:bg-white/[0.1] hover:shadow-[0_0_30px_-10px_rgba(0,216,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00D8FF]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative font-heading text-2xl font-bold text-[#00D8FF] sm:text-3xl">
                {stat.value}
              </p>
              <p className="relative mt-1 text-sm text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
