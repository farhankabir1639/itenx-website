"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About itenx
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Based in Dhaka, Bangladesh, we are a boutique technology partner
            trusted by startups and enterprises worldwide. Our team of senior
            engineers, designers, and consultants delivers excellence at every
            touchpoint—from architecture to deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
