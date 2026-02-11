import { BlogPostCard } from "./BlogPostCard";
import type { BlogPost } from "./BlogPostCard";

interface RelatedPostsProps {
  posts: BlogPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts.length) return null;

  return (
    <aside className="mt-20 border-t border-white/10 pt-16">
      <h2 className="font-heading mb-8 text-2xl font-bold text-white">
        Related Posts
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </aside>
  );
}
