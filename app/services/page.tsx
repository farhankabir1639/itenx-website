import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://itenx.it.com";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium technology outsourcing: software development, web development, UI/UX design, IT infrastructure, consulting, and digital transformation. Based in Bangladesh, serving clients globally.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Technology Services | itenx",
    description:
      "Software development, web development, design, IT, consulting, and digital transformation.",
    url: `${siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <article className="bg-[#0A0C10]">
      <BreadcrumbJsonLd items={[
        { name: "Home", item: siteUrl },
        { name: "Services", item: `${siteUrl}/services` },
      ]} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Our Services"
          description="Premium technology outsourcing across software, web, design, IT, consulting, and digital transformation."
          gradient
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />

        <ServicesPageContent />
      </div>
    </article>
  );
}
