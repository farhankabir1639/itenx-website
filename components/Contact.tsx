"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const companyInfo = [
  { label: "Email", value: "hello@itenx.com" },
  { label: "Location", value: "Dhaka, Bangladesh · Remote-first · Global" },
  { label: "Response", value: "Within 24 hours" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500);
  };

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
            Tell us about your project. We&apos;ll get back to you within 24
            hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl lg:grid-cols-[1fr,360px] lg:p-8"
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-[#00D8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]/30"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-[#00D8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]/30"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us briefly about your project..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 transition-colors focus:border-[#00D8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]/30"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, boxShadow: "0 0 35px rgba(0, 216, 255, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              className="cta-primary relative overflow-hidden rounded-xl border border-[#00D8FF]/40 px-8 py-4 font-semibold text-white shadow-[0_0_20px_-5px_rgba(0,216,255,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send message"}
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                animate={isSubmitting ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0 }}
              />
            </motion.button>
          </form>

          {/* Company info sidebar */}
            <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.04] p-6 lg:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D8FF]/30 to-transparent" />
            <h3 className="mb-6 font-heading text-lg font-semibold text-white">
              Company Info
            </h3>
            <ul className="space-y-6">
              {companyInfo.map((item) => (
                <li key={item.label}>
                  <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-slate-200">{item.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate-500">
              We respond to all inquiries within 24 hours. For urgent matters,
              mention &quot;urgent&quot; in your message.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
