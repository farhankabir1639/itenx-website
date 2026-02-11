/**
 * Common GROQ queries for itenx Blog CMS
 */

/** All published posts (list view) - excludes drafts */
export const POSTS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "mainImage": mainImage.asset->url,
  "author": author.name,
  categories
}`;

/** Single post by slug - published only */
export const POST_QUERY = `*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  body,
  "mainImage": mainImage {
    "url": asset->url,
    alt
  },
  author {
    name,
    "image": image.asset->url
  },
  categories,
  seo {
    metaTitle,
    metaDescription
  }
}`;

/** All post slugs (for static generation) - published only */
export const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] {
  "slug": slug.current
}`;

/** Related posts - 3 latest, excluding current by slug */
export const RELATED_POSTS_QUERY = `*[_type == "post" && defined(slug.current) && slug.current != $slug && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  "mainImage": mainImage.asset->url,
  "author": author.name,
  categories
}`;
