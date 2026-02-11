"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "./BlogPostCard";
import { BlogPostCard } from "./BlogPostCard";

const ALL_CATEGORIES = "all";
const categoryLabels: Record<string, string> = {
  technology: "Technology",
  engineering: "Engineering",
  "ai-ml": "AI & ML",
  design: "Design",
  business: "Business",
  industry: "Industry",
};

export function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES);

  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      p.categories?.forEach((c) => set.add(c));
    });
    return Array.from(set).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === ALL_CATEGORIES) return posts;
    return posts.filter((p) => p.categories?.includes(selectedCategory));
  }, [posts, selectedCategory]);

  return (
    <div>
      {categories.length > 0 && (
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory(ALL_CATEGORIES)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              selectedCategory === ALL_CATEGORIES
                ? "border border-[#00D8FF]/50 bg-[#00D8FF]/20 text-[#00D8FF]"
                : "border border-white/20 bg-white/5 text-slate-400 hover:border-[#00D8FF]/30 hover:text-[#00D8FF]"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "border border-[#00D8FF]/50 bg-[#00D8FF]/20 text-[#00D8FF]"
                  : "border border-white/20 bg-white/5 text-slate-400 hover:border-[#00D8FF]/30 hover:text-[#00D8FF]"
              }`}
            >
              {categoryLabels[cat] ?? cat}
            </button>
          ))}
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] py-16 text-center">
          <p className="text-slate-400">
            No posts found
            {selectedCategory !== ALL_CATEGORIES &&
              ` in ${categoryLabels[selectedCategory] ?? selectedCategory}`}
            .
          </p>
        </div>
      )}
    </div>
  );
}
