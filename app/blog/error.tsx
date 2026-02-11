"use client";

import { useEffect } from "react";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog page error:", error);
  }, [error]);

  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-12 text-center">
          <h1 className="font-heading text-xl font-semibold text-red-400">
            Something went wrong
          </h1>
          <p className="mt-4 text-slate-400">
            We couldn&apos;t load the blog. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-xl border border-[#00D8FF]/40 bg-[#00D8FF]/10 px-6 py-3 font-semibold text-[#00D8FF] transition-colors hover:bg-[#00D8FF]/20"
          >
            Try again
          </button>
        </div>
      </div>
    </article>
  );
}
