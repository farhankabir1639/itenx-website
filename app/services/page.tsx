import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import ServicesPageContent from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium technology outsourcing: software development, web development, UI/UX design, IT infrastructure, consulting, and digital transformation. Based in Bangladesh, serving clients globally.",
  openGraph: {
    title: "Technology Services | itenx",
    description:
      "Software development, web development, design, IT, consulting, and digital transformation.",
  },
};

export default function ServicesPage() {
  return (
    <article className="bg-[#0A0C10]">
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
