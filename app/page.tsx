import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyItenx from "@/components/WhyItenx";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Premium Technology Outsourcing & IT Staffing | itenx",
  description:
    "itenx delivers world-class software development, web development, UI/UX design, and digital transformation. Trusted IT staffing and technology outsourcing partner in Bangladesh for staff augmentation and engineering solutions.",
  keywords: [
    "technology outsourcing",
    "IT staffing",
    "software staffing",
    "staff augmentation",
    "software development outsourcing",
    "web development",
    "digital transformation",
    "IT consulting Bangladesh",
  ],
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
