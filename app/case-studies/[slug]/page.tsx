import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies-data";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { PageHero } from "@/components/PageHero";
import CaseStudyContent from "@/components/case-studies/CaseStudyContent";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itenx.it.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study" };

  return {
    title: `${study.title} | Case Study | itenx`,
    description: study.description,
    alternates: {
      canonical: `${siteUrl}/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | itenx Case Study`,
      description: study.description,
      url: `${siteUrl}/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <article className="bg-[#0A0C10]">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: siteUrl },
          { name: "Case Studies", item: `${siteUrl}/case-studies` },
          { name: study.title, item: `${siteUrl}/case-studies/${study.slug}` },
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title={study.title}
          description={study.description}
          gradient
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: study.title },
          ]}
        />
      </div>
      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8">
        <CaseStudyContent study={study} />
      </div>
    </article>
  );
}
