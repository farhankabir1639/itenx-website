"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreaevpo";
const SERVICE_OPTIONS = [
  "Software Development",
  "Web Development",
  "UI/UX Design",
  "IT Infrastructure",
  "Cloud Solutions",
  "Consulting",
  "Digital Transformation",
];

const inputBase =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 transition-colors hover:border-white/20 focus:border-[#00D8FF]/50 focus:outline-none focus:ring-1 focus:ring-[#00D8FF]/30";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): Record<string, string> => {
    const err: Record<string, string> = {};
    if (!formData.get("name")?.toString().trim()) err.name = "Name is required";
    if (!formData.get("email")?.toString().trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get("email")!.toString()))
      err.email = "Please enter a valid email";
    if (!formData.get("service")) err.service = "Please select a service";
    const requirement = formData.get("requirement")?.toString().trim();
    if (!requirement) err.requirement = "Detailed requirement is required";
    else if (requirement.length < 20)
      err.requirement = "Please provide at least 20 characters";
    return err;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reject if honeypot was filled (bot)
    if (formData.get("_gotcha")) return;

    formData.append("_timestamp", new Date().toISOString());
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await res.json();

      if (result.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot - Formspree's _gotcha, bots fill this */}
      <div
        className="absolute -left-[9999px] top-0"
        aria-hidden
      >
        <label htmlFor="_gotcha">Leave this empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputBase}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputBase}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-slate-300">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company (optional)"
          aria-invalid={!!errors.company}
          className={inputBase}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium text-slate-300">
          Service Needed <span className="text-red-400">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={`${inputBase} cursor-pointer appearance-none bg-[#0A0C10] pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: "right 0.75rem center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "1.5em 1.5em",
          }}
        >
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" className="text-xs text-red-400" role="alert">
            {errors.service}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="requirement" className="text-sm font-medium text-slate-300">
          Detailed Requirement <span className="text-red-400">*</span>
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          placeholder="Tell us about your project requirements, timeline, and budget..."
          required
          minLength={20}
          aria-required="true"
          aria-invalid={!!errors.requirement}
          aria-describedby={errors.requirement ? "requirement-error" : undefined}
          className={`${inputBase} resize-none`}
        />
        {errors.requirement && (
          <p id="requirement-error" className="text-xs text-red-400" role="alert">
            {errors.requirement}
          </p>
        )}
      </div>

      {status === "success" && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300"
        >
          <svg
            className="h-5 w-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p>
            Thank you! We&apos;ve received your inquiry and will respond within 24
            hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-300"
        >
          <svg
            className="h-5 w-5 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p>
            Something went wrong. Please try again or email us at{" "}
            <a
              href="mailto:hello@itenx.com"
              className="underline hover:text-red-200"
            >
              hello@itenx.com
            </a>
          </p>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 35px rgba(0, 216, 255, 0.5)" } : undefined}
        whileTap={{ scale: 0.98 }}
        className="cta-primary relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#00D8FF]/40 px-8 py-4 font-semibold text-white shadow-[0_0_20px_-5px_rgba(0,216,255,0.3)] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </motion.button>
    </form>
  );
}
