import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import {
  POST_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { SocialShareButtons } from "@/components/blog/SocialShareButtons";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { estimateReadTime } from "@/lib/read-time";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itenx.it.com";

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
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

async function getPost(slug: string) {
  return client.fetch(POST_QUERY, { slug });
}

async function getRelatedPosts(slug: string) {
  return client.fetch(RELATED_POSTS_QUERY, { slug });
}

type RouteParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };

  const title = post.seo?.metaTitle ?? post.title;
  const description =
    post.seo?.metaDescription ?? post.excerpt ?? `${post.title} - itenx blog`;
  const imageUrl = post.mainImage?.url;
  const postUrl = `${siteUrl}/blog/${slug}`;

  return {
    title: `${title} | itenx Blog`,
    description,
    openGraph: {
      title: `${title} | itenx Blog`,
      description,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.mainImage?.alt ?? post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | itenx Blog`,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(POST_SLUGS_QUERY);
  return slugs
    .filter((s) => s?.slug)
    .map((s) => ({ slug: s.slug }));
}

export const dynamicParams = true;
export const revalidate = 60;

export default async function BlogPostPage({ params }: RouteParams) {
  const { slug } = await params;

  const [post, relatedPosts] = await Promise.all([
    getPost(slug),
    getRelatedPosts(slug),
  ]);

  if (!post) notFound();

  const postUrl = `${siteUrl}/blog/${slug}`;
  const readTime = estimateReadTime(post.body);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? post.seo?.metaDescription ?? post.title,
    image: post.mainImage?.url,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: post.author?.name
      ? {
          "@type": "Person",
          name: post.author.name,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "itenx technologies limited",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <article className="bg-[#0A0C10]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero - Full-width featured image */}
      {post.mainImage?.url && (
        <div className="relative -mx-4 aspect-[21/9] w-[calc(100%+2rem)] overflow-hidden sm:-mx-6 sm:w-[calc(100%+3rem)] lg:-mx-8 lg:w-[calc(100%+4rem)]">
          <Image
            src={post.mainImage.url}
            alt={post.mainImage.alt ?? post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] via-[#0A0C10]/50 to-transparent" />
        </div>
      )}

      {/* Content - Max-width 800px */}
      <div className="mx-auto max-w-[800px] px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/blog"
                className="text-slate-500 transition-colors hover:text-[#00D8FF]"
              >
                Blog
              </Link>
            </li>
            <li aria-hidden className="text-slate-600">
              /
            </li>
            <li className="text-slate-400" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        {/* Meta: Author, date, read time, categories */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
          {post.author?.name && (
            <span className="text-slate-400">{post.author.name}</span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          )}
          {readTime > 0 && (
            <span>{readTime} min read</span>
          )}
        </div>

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.categories.map((cat: string) => (
              <span
                key={cat}
                className="rounded-full border border-[#00D8FF]/30 bg-[#00D8FF]/10 px-3 py-0.5 text-xs font-medium text-[#00D8FF]"
              >
                {categoryLabels[cat] ?? cat}
              </span>
            ))}
          </div>
        )}

        {/* Body content */}
        {post.body && post.body.length > 0 && (
          <div className="mt-12">
            <PortableText
              value={post.body as PortableTextBlock[]}
              components={portableTextComponents}
            />
          </div>
        )}

        {/* Social share */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <SocialShareButtons url={postUrl} title={post.title} />
        </div>

        {/* Related posts */}
        <RelatedPosts posts={relatedPosts ?? []} />
      </div>
    </article>
  );
}
