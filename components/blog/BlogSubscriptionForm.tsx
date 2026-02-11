"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mreaevpo";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function BlogSubscriptionForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setError("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("email", trimmed); // Use trimmed value

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const result = await res.json();

      if (result.ok) {
        setStatus("success");
        setEmail("");
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
    <form onSubmit={handleSubmit} className="mx-auto max-w-[500px]">
      <input type="hidden" name="_subject" value="Blog Subscription - New Subscriber" />
      <input type="hidden" name="subscription_type" value="blog_newsletter" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <div className="sm:w-[70%]">
          <label htmlFor="blog-subscribe-email" className="sr-only">
            Email address
          </label>
          <input
            id="blog-subscribe-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            disabled={isSubmitting}
            aria-invalid={!!error}
            aria-describedby={error ? "blog-subscribe-error" : undefined}
            className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-500 transition-colors hover:border-white/20 focus:border-[#00D8FF] focus:outline-none focus:ring-1 focus:ring-[#00D8FF]/30 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </div>
        <div className="sm:w-[30%]">
          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl border border-[#00D8FF]/40 bg-[#00D8FF]/10 px-6 font-semibold text-[#00D8FF] transition-all hover:bg-[#00D8FF]/20 hover:shadow-[0_0_20px_-5px_rgba(0,216,255,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </div>
      </div>

      {error && (
        <p id="blog-subscribe-error" className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-400">
          Thanks for subscribing! We&apos;ll notify you when new posts are
          published.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
