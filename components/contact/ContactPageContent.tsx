"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

const companyInfo = [
  { label: "Email", value: "hello@itenx.com" },
  { label: "Location", value: "Dhaka, Bangladesh · Remote-first · Global" },
  { label: "Response", value: "Within 24 hours" },
];

const offices = [
  {
    title: "Dhaka HQ",
    location: "Dhaka, Bangladesh",
    description: "Headquarters and engineering hub. Home to our core team of engineers, designers, and process managers.",
  },
  {
    title: "US Office",
    location: "United States",
    description: "Client-facing presence for North American and European clients. Time-zone alignment and in-person collaboration.",
  },
];

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Typically within 1–2 weeks. We assess your requirements, align on scope, and kick off with a discovery sprint.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer fixed-price projects, time-and-materials, and dedicated team arrangements. Each engagement is tailored to your needs.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes. We work with startups, scale-ups, and enterprises. Our agile approach suits both MVPs and large-scale systems.",
  },
  {
    q: "What time zones do you support?",
    a: "We have overlap with US Eastern and European hours. Our US office supports North American clients directly.",
  },
];

export default function ContactPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-20 py-12">
      {/* Form + Offices */}
      <div className="grid gap-12 lg:grid-cols-[1fr,400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl lg:p-8"
        >
          <ContactForm />
        </motion.div>

        <div className="space-y-6">
          <div className="relative rounded-xl border border-white/15 bg-white/[0.04] p-6">
            <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-gradient-to-r from-transparent via-[#00D8FF]/30 to-transparent" />
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
          </div>

          {offices.map((office, i) => (
            <motion.div
              key={office.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="font-heading font-semibold text-white">
                {office.title}
              </h3>
              <p className="mt-1 text-sm text-[#00D8FF]">{office.location}</p>
              <p className="mt-3 text-sm text-slate-400">{office.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section>
        <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-white">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-white">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/10 px-6 py-4"
                >
                  <p className="text-sm text-slate-400">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
