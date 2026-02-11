"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description: string;
  className?: string;
}

export function PageHero({ title, description, className = "" }: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`py-20 text-center sm:py-24 ${className}`}
    >
      <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">{description}</p>
    </motion.div>
  );
}
