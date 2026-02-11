import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-[800px] px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl font-bold text-white">
          Post Not Found
        </h1>
        <p className="mt-4 text-slate-400">
          The blog post you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-[#00D8FF]/40 bg-[#00D8FF]/10 px-6 py-3 font-semibold text-[#00D8FF] transition-colors hover:bg-[#00D8FF]/20"
        >
          Back to Blog
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
