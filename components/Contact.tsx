"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";

const companyInfo = [
  { label: "Email", value: "hello@itenx.com" },
  { label: "Location", value: "Dhaka, Bangladesh · Remote-first · Global" },
  { label: "Response", value: "Within 24 hours" },
];

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
          <ContactForm />

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
