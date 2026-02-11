import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import CapabilitiesPageContent from "@/components/capabilities/CapabilitiesPageContent";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "itenx capabilities: engineering excellence, design & UX, infrastructure & DevOps. Senior engineers, modern stack, user research, cloud, CI/CD. Bangladesh & US.",
  openGraph: {
    title: "Capabilities | itenx",
    description:
      "Engineering excellence, design & UX, infrastructure & DevOps. Enterprise-grade technology partner.",
  },
};

export default function CapabilitiesPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title="Capabilities"
          description="Engineering excellence, design & UX, and infrastructure that scales. Built for outcomes."
          gradient
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Capabilities" }]}
        />

        <CapabilitiesPageContent />
      </div>
    </article>
  );
}
