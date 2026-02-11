import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "itenx technologies limited is a premium technology outsourcing company founded in Bangladesh with US offices. Built by senior engineers, designers, and process managers serving clients globally.",
  openGraph: {
    title: "About itenx | Technology Partner in Bangladesh & USA",
    description:
      "Founded in Bangladesh with US offices. Engineers, designers, and process managers delivering world-class software solutions.",
  },
};

export default function AboutPage() {
  return (
    <article className="bg-[#0A0C10]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PageHero
          title="About itenx"
          description="Premium technology outsourcing built in Bangladesh, with offices in the US. Powered by engineers, designers, and process managers."
          gradient
        />

        <AboutContent />
      </div>
    </article>
  );
}
