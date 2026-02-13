import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyItenx from "@/components/WhyItenx";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Offshore Software Development Services | itenx",
  description:
    "Premium offshore software development company from Bangladesh. Expert software development outsourcing with senior engineers, modern tech stack, and proven results. 12+ years experience.",
  keywords: [
    "offshore software development",
    "software development outsourcing",
    "offshore software development company",
    "offshore software development services",
    "offshore development team",
    "hire offshore developers",
    "software outsourcing",
    "bangladesh software development",
  ],
  openGraph: {
    title: "Offshore Software Development Services | itenx",
    description:
      "Premium offshore software development company from Bangladesh. Expert software development outsourcing with senior engineers and 12+ years experience.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-[#0A0C10]">
      <Hero />
      <Services />
      <WhyItenx />
      <CaseStudies />
      <Contact />
      <About />
    </main>
  );
}
