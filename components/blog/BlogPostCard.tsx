import Link from "next/link";
import Image from "next/image";

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  publishedAt?: string | null;
  mainImage?: string | null;
  author?: string | null;
  categories?: string[] | null;
}

const categoryLabels: Record<string, string> = {
  technology: "Technology",
  engineering: "Engineering",
  "ai-ml": "AI & ML",
  design: "Design",
  business: "Business",
  industry: "Industry",
};

function formatDate(isoDate: string | null | undefined) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-[#00D8FF]/40 hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_rgba(0,216,255,0.2)]"
    >
      {/* Featured image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
        {post.mainImage ? (
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#00D8FF]/10 to-transparent">
            <span className="text-4xl text-[#00D8FF]/30">☆</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>

      <div className="p-6">
        {/* Category tags */}
        {post.categories && post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-[#00D8FF]/30 bg-[#00D8FF]/10 px-3 py-0.5 text-xs font-medium text-[#00D8FF]"
              >
                {categoryLabels[cat] ?? cat}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-[#00D8FF] line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt - 2 lines max */}
        {post.excerpt && (
          <p className="mt-3 line-clamp-2 text-sm text-slate-400">
            {post.excerpt}
          </p>
        )}

        {/* Author + date */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
          {post.author && <span>{post.author}</span>}
          {post.author && post.publishedAt && (
            <span aria-hidden>·</span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          )}
        </div>

        {/* Read More link */}
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#00D8FF] transition-all group-hover:gap-3">
          Read More
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
        </span>
      </div>
    </Link>
  );
}
