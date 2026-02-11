import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/services-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };

  return {
    title: service.title,
    description: service.longDescription,
    keywords: [...service.keywords],
    openGraph: {
      title: `${service.title} | itenx`,
      description: service.longDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <PageHero
          title={service.title}
          description={service.description}
        />

        <div className="prose prose-invert mx-auto max-w-3xl pt-8">
          <p className="leading-relaxed text-slate-400">
            {service.longDescription}
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#00D8FF] to-cyan-400 px-8 py-4 font-semibold text-[#0A0C10] transition-opacity hover:opacity-90"
          >
            Start a project
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
          >
            View all services
          </Link>
        </div>
      </div>
    </article>
  );
}
