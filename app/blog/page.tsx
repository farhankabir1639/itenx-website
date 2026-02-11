import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogFilters } from "@/components/blog/BlogFilters";
import { BlogSubscriptionForm } from "@/components/blog/BlogSubscriptionForm";
import type { BlogPost } from "@/components/blog/BlogPostCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog & Insights | itenx",
  description:
    "Industry insights, tech trends, and company updates from itenx technologies limited.",
  openGraph: {
    title: "Blog & Insights | itenx",
    description:
      "Industry insights, tech trends, and company updates.",
  },
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  let posts: BlogPost[] = [];

  try {
    posts = await client.fetch(POSTS_QUERY);
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return (
      <article className="bg-[#0A0C10]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <PageHero
            title="Blog & Insights"
            description="Industry insights, tech trends, and company updates."
          />
          <div className="mt-16 rounded-2xl border border-red-500/20 bg-red-500/5 p-12 text-center">
            <p className="text-red-400">
              Unable to load blog posts. Please try again later.
            </p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title="Blog & Insights"
          description="Industry insights, tech trends, and company updates."
        />

        {posts.length > 0 ? (
          <BlogFilters posts={posts} />
        ) : (
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
            <p className="text-slate-400">
              No posts yet. Check back for articles on technology, engineering,
              and digital innovation.
            </p>
            <div className="mt-6">
              <BlogSubscriptionForm />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
