import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with itenx. We respond within 24 hours. Dhaka, Bangladesh · US offices · Remote-first. Email hello@itenx.com.",
  openGraph: {
    title: "Contact itenx | Get in Touch",
    description:
      "Contact itenx for technology outsourcing. Response within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Get in Touch"
          description="Tell us about your project. We respond within 24 hours."
          gradient
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <ContactPageContent />
      </div>
    </article>
  );
}
