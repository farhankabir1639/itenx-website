"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Fill out the form below and we&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[600px] rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
