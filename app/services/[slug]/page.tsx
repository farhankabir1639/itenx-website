import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services-data";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import ServicePageContent from "@/components/services/ServicePageContent";

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

  const description =
    (service as { seoDescription?: string; longDescription: string }).seoDescription ??
    (service as { longDescription: string }).longDescription;

  return {
    title: `${service.title} Services | itenx Technology Outsourcing`,
    description,
    keywords: [
      ...service.keywords,
      "itenx",
      "technology outsourcing",
      "Bangladesh",
    ],
    openGraph: {
      title: `${service.title} | itenx`,
      description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <article className="bg-[#0A0C10]">
      {/* Full-width hero with background image */}
      <ServicePageHero
        slug={service.slug}
        title={service.title}
        description={service.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Page content */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <ServicePageContent service={service} />
      </div>
    </article>
  );
}
