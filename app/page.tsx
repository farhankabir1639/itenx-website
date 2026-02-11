import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyItenx from "@/components/WhyItenx";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Why Choose itenx | Elite Software Engineering & AI",
  description:
    "Discover why leading companies choose itenx for software development outsourcing, AI engineering, and digital transformation. 40% faster delivery, 60% cost savings, Fortune 500 quality. Machine learning development, LLM integration, RAG systems.",
  keywords: [
    "software development outsourcing",
    "AI engineering services",
    "machine learning development",
    "custom software development",
    "offshore development",
    "Bangladesh tech outsourcing",
    "LLM integration",
    "RAG systems",
    "enterprise software development",
    "digital transformation services",
    "technology outsourcing",
    "IT staffing",
  ],
  openGraph: {
    title: "Why Leading Companies Choose itenx",
    description:
      "Elite engineering team, AI/ML expertise, 40% faster delivery, 60% cost savings. Software development outsourcing Bangladesh.",
  },
};

export default function HomePage() {
  return (
    <main className="bg-[#0A0C10]">
      <Hero />
      <About />
      <Services />
      <WhyItenx />
      <CaseStudies />
      <Contact />
    </main>
  );
}
